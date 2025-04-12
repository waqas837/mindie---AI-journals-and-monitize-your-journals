const CareersPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-950 to-purple-950 px-4">
      <div className="max-w-6xl mx-auto px-6 pt-32 pb-6">
        <h1 className="text-4xl font-bold text-center text-white mb-8">
          Careers at Mindie
        </h1>
        <p className="text-center text-indigo-200 text-lg mb-12">
          Join our growing team and help us revolutionize the journaling
          experience.
        </p>
        <div className="bg-white/5 border border-white/10 backdrop-blur-lg shadow-2xl rounded-2xl p-8">
          <h2 className="text-2xl font-semibold text-white mb-6">
            Current Openings
          </h2>
          <ul className="space-y-6 text-indigo-300">
            <li>
              <h3 className="font-semibold text-white">Full Stack Developer</h3>
              <p>
                Help us build and maintain the backend and frontend of our
                journaling platform. Strong experience in JavaScript, React, and
                Node.js required.
              </p>
            </li>
            <li>
              <h3 className="font-semibold text-white">UI/UX Designer</h3>
              <p>
                Design intuitive, beautiful, and user-friendly interfaces that
                enhance the user experience of Mindie. Experience in Figma and
                Adobe XD is preferred.
              </p>
            </li>
            <li>
              <h3 className="font-semibold text-white">Marketing Manager</h3>
              <p>
                Develop and implement marketing strategies to grow Mindie’s user
                base. Experience with social media, SEO, and content marketing
                is a plus.
              </p>
            </li>
          </ul>

          <h2 className="text-2xl font-semibold text-white mt-12 mb-6">
            Why Work with Us?
          </h2>
          <p className="text-indigo-300 mb-6">
            At Mindie, we believe in creating a supportive and innovative
            environment where you can thrive. You'll have the opportunity to
            work on cutting-edge projects, contribute to a meaningful product,
            and grow your career.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-12 mb-6">
            Benefits
          </h2>
          <ul className="space-y-4 text-indigo-300">
            <li>Flexible work hours and remote work opportunities</li>
            <li>Competitive salary and equity options</li>
            <li>Health and wellness benefits</li>
            <li>Annual learning and development budget</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CareersPage;
