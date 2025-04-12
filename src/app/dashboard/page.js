"use client";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase-client";
import { useRouter } from "next/navigation";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import TextStyle from "@tiptap/extension-text-style";
import Color from "@tiptap/extension-color";

// Toolbar component for the editor
const MenuBar = ({ editor }) => {
  if (!editor) return null;

  return (
    <div className="flex flex-wrap gap-2 mb-2 border-b border-white/20 pb-2">
      <button
        onClick={() => editor.chain().focus().toggleBold().run()}
        className={`p-1.5 rounded ${
          editor.isActive("bold")
            ? "bg-purple-600"
            : "bg-white/10 hover:bg-white/20"
        }`}
        title="Bold"
      >
        <strong>B</strong>
      </button>
      <button
        onClick={() => editor.chain().focus().toggleItalic().run()}
        className={`p-1.5 rounded ${
          editor.isActive("italic")
            ? "bg-purple-600"
            : "bg-white/10 hover:bg-white/20"
        }`}
        title="Italic"
      >
        <em>I</em>
      </button>
      <button
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        className={`p-1.5 rounded ${
          editor.isActive("bulletList")
            ? "bg-purple-600"
            : "bg-white/10 hover:bg-white/20"
        }`}
        title="Bullet List"
      >
        • List
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
        className={`p-1.5 rounded ${
          editor.isActive("heading", { level: 1 })
            ? "bg-purple-600"
            : "bg-white/10 hover:bg-white/20"
        }`}
        title="Heading 1"
      >
        H1
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        className={`p-1.5 rounded ${
          editor.isActive("heading", { level: 2 })
            ? "bg-purple-600"
            : "bg-white/10 hover:bg-white/20"
        }`}
        title="Heading 2"
      >
        H2
      </button>
      <input
        type="color"
        onInput={(event) =>
          editor.chain().focus().setColor(event.target.value).run()
        }
        value={editor.getAttributes("textStyle").color || "#ffffff"}
        className="w-8 h-8 bg-white/10 rounded cursor-pointer"
        title="Text Color"
      />
      <button
        onClick={() => editor.chain().focus().setColor("#ffffff").run()}
        className="p-1.5 rounded bg-white/10 hover:bg-white/20"
        title="Reset Color"
      >
        ↺
      </button>
    </div>
  );
};

const TabButton = ({ label, tab, activeTab, setActiveTab }) => (
  <button
    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
      activeTab === tab
        ? "bg-purple-600 text-white shadow-lg"
        : "bg-white/10 text-purple-200 hover:bg-purple-500 hover:text-white"
    }`}
    onClick={() => setActiveTab(tab)}
  >
    {label}
  </button>
);

export default function DashboardPage() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("journals");
  const [journals, setJournals] = useState([]);
  const [newEntry, setNewEntry] = useState("");
  const [loading, setLoading] = useState(false);
  const [userId, setUserId] = useState(null);
  const [loadingUser, setLoadingUser] = useState(true);

  const editor = useEditor({
    extensions: [StarterKit, TextStyle, Color],
    content: newEntry,
    onUpdate: ({ editor }) => {
      setNewEntry(editor.getHTML());
    },
  });

  // Fetch current user
  useEffect(() => {
    const getUser = async () => {
      const {
        data: { user },
        error,
      } = await supabase.auth.getUser();

      if (!user || error) {
        router.push("/login");
        return;
      }

      setUserId(user.id);
      await fetchJournals(user.id);
      setLoadingUser(false);
    };

    getUser();
  }, [router]);

  const fetchJournals = async (uid) => {
    const { data, error } = await supabase
      .from("journals")
      .select("*")
      .eq("user_id", uid)
      .order("created_at", { ascending: false });

    if (!error) setJournals(data);
  };

  const createJournal = async () => {
    if (!newEntry.trim()) return;
    setLoading(true);

    // Get HTML/JSON content from Tiptap
    const tiptapContent = editor?.getHTML() || ""; // or editor?.getJSON() for JSON storage
    const rawText = editor?.getText() || ""; // Plain text version

    const { error } = await supabase.from("journals").insert([
      {
        user_id: userId,
        content: tiptapContent, // Store HTML/JSON from Tiptap
        // raw_text: rawText, // Store plain text
      },
    ]);

    if (!error) {
      setNewEntry("");
      editor?.commands.clearContent();
      fetchJournals(userId);
      setActiveTab("journals");
    }
    setLoading(false);
  };

  const deleteJournal = async (id) => {
    await supabase.from("journals").delete().eq("id", id);
    fetchJournals(userId);
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push("/login");
  };

  if (loadingUser) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-indigo-950 to-purple-950 flex items-center justify-center">
        <div className="text-white">Processing...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-950 to-purple-950 text-white px-4 pt-32 pb-12">
      <div className="max-w-2xl mx-auto">
        <div className="flex gap-3 justify-center mb-8 flex-wrap">
          <TabButton
            label="📓 Journals"
            tab="journals"
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
          <TabButton
            label="✍️ Create"
            tab="create"
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
          <TabButton
            label="🗑️ Delete"
            tab="delete"
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
          <button
            onClick={handleLogout}
            className="px-4 py-2 rounded-full text-sm font-medium bg-red-600 hover:bg-red-700 text-white shadow"
          >
            🚪 Logout
          </button>
        </div>

        {/* Content based on tab */}
        {activeTab === "journals" && (
          <div className="space-y-4">
            <h2 className="text-xl font-bold mb-2">Your Journals</h2>
            {journals.length === 0 ? (
              <p className="text-indigo-300">No journal entries yet.</p>
            ) : (
              journals.map((j) => (
                <div
                  key={j.id}
                  className="bg-white/10 p-4 rounded-lg shadow border border-white/10"
                >
                  <div
                    className="prose prose-invert max-w-none"
                    dangerouslySetInnerHTML={{ __html: j.content }}
                  />
                  <p className="text-sm text-indigo-300 mt-2">
                    {new Date(j.created_at).toLocaleString()}
                  </p>
                </div>
              ))
            )}
          </div>
        )}

        {activeTab === "create" && (
          <div className="space-y-4">
            <h2 className="text-xl font-bold mb-2">New Journal Entry</h2>
            <div className="bg-white/10 rounded-lg border border-white/20">
              <MenuBar editor={editor} />
              <EditorContent
                editor={editor}
                className="min-h-[200px] p-4 focus:outline-none"
              />
            </div>
            <button
              onClick={createJournal}
              disabled={loading}
              className={`w-full py-2 rounded-lg font-semibold transition ${
                loading
                  ? "bg-purple-400 cursor-not-allowed"
                  : "bg-purple-600 hover:bg-purple-700"
              }`}
            >
              {loading ? "Saving..." : "Save Journal"}
            </button>
          </div>
        )}

        {activeTab === "delete" && (
          <div className="space-y-4">
            <h2 className="text-xl font-bold mb-2">Delete Entries</h2>
            {journals.map((j) => (
              <div
                key={j.id}
                className="flex justify-between items-center bg-white/10 p-4 rounded-lg border border-white/10"
              >
                <div
                  className="truncate w-3/4 prose prose-invert max-w-none"
                  dangerouslySetInnerHTML={{
                    __html:
                      j.content.substring(0, 100) +
                      (j.content.length > 100 ? "..." : ""),
                  }}
                />
                <button
                  onClick={() => deleteJournal(j.id)}
                  className="text-red-400 hover:text-red-600 text-sm"
                >
                  Delete
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
