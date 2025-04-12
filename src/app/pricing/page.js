"use client";
import { useState } from "react";
import { Check, X, ArrowRight } from "lucide-react";
import Footer from "@/components/Footer";

export default function Pricing() {
  const [annual, setAnnual] = useState(true);

  return (
    <main className="min-h-screen text-white ">
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <span className="bg-indigo-800 text-indigo-100 px-4 py-1 rounded-full text-sm font-medium mb-6 inline-block">
            Pricing Plans
          </span>
          <h1 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-300 via-pink-200 to-indigo-300">
            Choose the Perfect Plan for Your Journaling Needs
          </h1>
          <p className="text-xl text-indigo-100 max-w-3xl mx-auto mb-12">
            Simple, transparent pricing that scales with your needs. No hidden
            fees, no surprises.
          </p>

          {/* Billing toggle */}
          <div className="flex items-center justify-center mb-16">
            <span
              className={`mr-4 text-lg ${
                !annual ? "text-indigo-100" : "text-indigo-300"
              }`}
            >
              Monthly
            </span>
            <div
              onClick={() => setAnnual(!annual)}
              className={`relative inline-flex h-8 w-16 cursor-pointer rounded-full transition-colors ease-in-out duration-200 ${
                annual ? "bg-indigo-600" : "bg-indigo-800"
              }`}
            >
              <span
                className={`inline-block h-6 w-6 transform rounded-full bg-white transition ease-in-out duration-200 ${
                  annual ? "translate-x-9 mt-1 ml-1" : "translate-x-1 mt-1"
                }`}
              />
            </div>
            <span
              className={`ml-4 text-lg ${
                annual ? "text-indigo-100" : "text-indigo-300"
              }`}
            >
              Annually{" "}
              <span className="text-purple-400 font-medium">(Save 20%)</span>
            </span>
          </div>

          {/* Pricing cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Free tier */}
            <div className="bg-gradient-to-br from-indigo-900/50 to-purple-900/50 rounded-2xl overflow-hidden border border-indigo-800/30 transition-all duration-300 hover:scale-105 hover:shadow-xl">
              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-4">Basic</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-white">Free</span>
                  <span className="text-indigo-300 ml-2">forever</span>
                </div>
                <p className="text-indigo-200 mb-6">
                  Perfect for casual journaling and getting started.
                </p>
                <a
                  href="/signup"
                  className="block w-full py-3 px-4 rounded-lg text-center bg-indigo-800 hover:bg-indigo-700 transition-colors duration-300 text-white font-medium"
                >
                  Get Started
                </a>
              </div>
              <div className="bg-indigo-900/30 p-8">
                <p className="font-medium text-indigo-100 mb-6">Includes:</p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-purple-400 mr-3 shrink-0 mt-0.5" />
                    <span className="text-indigo-200">Up to 5 journals</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-purple-400 mr-3 shrink-0 mt-0.5" />
                    <span className="text-indigo-200">
                      Basic text formatting
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-purple-400 mr-3 shrink-0 mt-0.5" />
                    <span className="text-indigo-200">1GB cloud storage</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-purple-400 mr-3 shrink-0 mt-0.5" />
                    <span className="text-indigo-200">Web access</span>
                  </li>
                  <li className="flex items-start">
                    <X className="w-5 h-5 text-indigo-400 mr-3 shrink-0 mt-0.5" />
                    <span className="text-indigo-400">No daily backups</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Premium tier */}
            <div className="bg-gradient-to-br from-purple-800/70 to-indigo-800/70 rounded-2xl overflow-hidden border border-purple-500/30 transform transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl relative">
              <div className="absolute top-0 right-0 bg-gradient-to-r from-purple-500 to-indigo-500 text-white text-sm font-medium px-4 py-1 rounded-bl-lg">
                Most Popular
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-4">Premium</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-white">
                    ${annual ? "8" : "10"}
                  </span>
                  <span className="text-indigo-200 ml-2">/ month</span>
                </div>
                <p className="text-indigo-100 mb-6">
                  For dedicated writers who want advanced features.
                </p>
                <a
                  href="/signup?plan=premium"
                  className="block w-full py-3 px-4 rounded-lg text-center bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 transition-all duration-300 text-white font-medium"
                >
                  Get Premium
                </a>
              </div>
              <div className="bg-indigo-800/40 p-8">
                <p className="font-medium text-indigo-100 mb-6">
                  Everything in Basic, plus:
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-purple-300 mr-3 shrink-0 mt-0.5" />
                    <span className="text-indigo-100">Unlimited journals</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-purple-300 mr-3 shrink-0 mt-0.5" />
                    <span className="text-indigo-100">
                      Rich text formatting
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-purple-300 mr-3 shrink-0 mt-0.5" />
                    <span className="text-indigo-100">20GB cloud storage</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-purple-300 mr-3 shrink-0 mt-0.5" />
                    <span className="text-indigo-100">
                      Web and mobile access
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-purple-300 mr-3 shrink-0 mt-0.5" />
                    <span className="text-indigo-100">Daily backups</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Professional tier */}
            <div className="bg-gradient-to-br from-indigo-900/50 to-purple-900/50 rounded-2xl overflow-hidden border border-indigo-800/30 transition-all duration-300 hover:scale-105 hover:shadow-xl">
              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Professional
                </h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-white">
                    ${annual ? "16" : "20"}
                  </span>
                  <span className="text-indigo-300 ml-2">/ month</span>
                </div>
                <p className="text-indigo-200 mb-6">
                  For professional writers and creators.
                </p>
                <a
                  href="/signup?plan=professional"
                  className="block w-full py-3 px-4 rounded-lg text-center bg-indigo-800 hover:bg-indigo-700 transition-colors duration-300 text-white font-medium"
                >
                  Get Professional
                </a>
              </div>
              <div className="bg-indigo-900/30 p-8">
                <p className="font-medium text-indigo-100 mb-6">
                  Everything in Premium, plus:
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-purple-400 mr-3 shrink-0 mt-0.5" />
                    <span className="text-indigo-200">
                      Collaborative journals
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-purple-400 mr-3 shrink-0 mt-0.5" />
                    <span className="text-indigo-200">Advanced analytics</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-purple-400 mr-3 shrink-0 mt-0.5" />
                    <span className="text-indigo-200">100GB cloud storage</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-purple-400 mr-3 shrink-0 mt-0.5" />
                    <span className="text-indigo-200">Priority support</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-purple-400 mr-3 shrink-0 mt-0.5" />
                    <span className="text-indigo-200">API access</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-indigo-950/50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-indigo-300">
              Frequently Asked Questions
            </h2>
            <p className="text-indigo-200">
              Everything you need to know about our pricing and plans.
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-indigo-900/30 rounded-xl p-6 border border-indigo-800/30">
              <h3 className="text-xl font-semibold mb-3 text-white">
                Can I switch between plans?
              </h3>
              <p className="text-indigo-200">
                Yes, you can upgrade or downgrade your plan at any time. When
                upgrading, you'll get immediate access to new features and be
                charged the prorated difference. When downgrading, the change
                takes effect at the end of your current billing cycle.
              </p>
            </div>

            <div className="bg-indigo-900/30 rounded-xl p-6 border border-indigo-800/30">
              <h3 className="text-xl font-semibold mb-3 text-white">
                Is there a free trial for paid plans?
              </h3>
              <p className="text-indigo-200">
                Yes, we offer a 14-day free trial for both Premium and
                Professional plans. No credit card required to start your trial.
              </p>
            </div>

            <div className="bg-indigo-900/30 rounded-xl p-6 border border-indigo-800/30">
              <h3 className="text-xl font-semibold mb-3 text-white">
                What payment methods do you accept?
              </h3>
              <p className="text-indigo-200">
                We accept all major credit cards, PayPal, and Apple Pay. For
                Professional plans, we also offer invoice-based payments for
                annual subscriptions.
              </p>
            </div>

            <div className="bg-indigo-900/30 rounded-xl p-6 border border-indigo-800/30">
              <h3 className="text-xl font-semibold mb-3 text-white">
                Can I get a refund if I'm not satisfied?
              </h3>
              <p className="text-indigo-200">
                We offer a 30-day money-back guarantee for all paid plans. If
                you're not satisfied with our service, contact our support team
                within 30 days of your purchase for a full refund.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-gradient-to-br from-purple-900/50 to-indigo-900/50">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-3xl font-bold mb-6 text-white">
            Need a custom plan for your team?
          </h2>
          <p className="text-xl text-indigo-200 mb-8">
            We offer custom enterprise solutions with dedicated support and
            tailored features.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center px-8 py-3 bg-white text-indigo-900 rounded-lg font-medium hover:bg-indigo-100 transition-colors duration-300"
          >
            Contact Sales <ArrowRight className="ml-2 w-5 h-5" />
          </a>
        </div>
      </section>
 
    </main>
  );
}
