"use client";

import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  CheckCircle,
  Users,
  TrendingUp,
  Shield,
  ArrowRight,
  Menu
} from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-slate-900/95 backdrop-blur-md border-b border-slate-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <h1 className="text-2xl font-bold text-white">
                  Flerid Influence
                </h1>
              </div>
            </div>

            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a href="#features" className="text-slate-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors">
                  FEATURES
                </a>
                <a href="#how-it-works" className="text-slate-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors">
                  HOW IT WORKS
                </a>
                <a href="#about" className="text-slate-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors">
                  ABOUT
                </a>
                <a href="#contact" className="text-slate-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors">
                  CONTACT
                </a>
                <Button
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="bg-emerald-500 hover:bg-emerald-600 text-white font-medium px-6"
                >
                  GET STARTED
                </Button>
              </div>
            </div>

            <div className="md:hidden">
              <Button variant="ghost" size="sm" className="text-white">
                <Menu className="h-6 w-6" />
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-24 pb-20 lg:pt-32 lg:pb-32 overflow-hidden">
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-light text-white mb-8 leading-tight">
              Introducing<br />
              <span className="font-normal">the <span className="text-emerald-400">Flerid Influence</span> Platform</span>
            </h1>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-emerald-500 hover:bg-emerald-600 text-white font-medium px-8 py-3 text-base"
              >
                <span className="mr-2">📱</span>
                Get Your Brand Connected
              </Button>
              <Button
                onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-slate-700 hover:bg-slate-600 text-white border-0 px-8 py-3 text-base"
              >
                Explore Features
              </Button>
            </div>

            <div className="flex items-center justify-center text-slate-300 mb-16">
              <div className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></div>
              <span className="text-lg">The new purpose-built platform to harness authentic influence</span>
            </div>


          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 lg:py-32 bg-slate-800/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light text-white mb-6">
              Why Choose Flerid Influence?
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              We deliver results through our unique approach to influencer marketing
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="bg-slate-800/80 border-slate-700 hover:border-emerald-500/50 transition-all duration-300 group">
              <CardHeader className="p-8">
                <div className="w-12 h-12 rounded-lg bg-emerald-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-xl text-white mb-3">Quality Assurance</CardTitle>
                <CardDescription className="text-slate-300 leading-relaxed">
                  Every influencer personally curated and verified for authenticity
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-slate-800/80 border-slate-700 hover:border-emerald-500/50 transition-all duration-300 group">
              <CardHeader className="p-8">
                <div className="w-12 h-12 rounded-lg bg-emerald-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <CheckCircle className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-xl text-white mb-3">Zero Fake Followers</CardTitle>
                <CardDescription className="text-slate-300 leading-relaxed">
                  Authentic engagement guaranteed - we check every account manually
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-slate-800/80 border-slate-700 hover:border-emerald-500/50 transition-all duration-300 group">
              <CardHeader className="p-8">
                <div className="w-12 h-12 rounded-lg bg-emerald-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-xl text-white mb-3">Relationship Management</CardTitle>
                <CardDescription className="text-slate-300 leading-relaxed">
                  Direct communication facilitated by our expert team
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-slate-800/80 border-slate-700 hover:border-emerald-500/50 transition-all duration-300 group">
              <CardHeader className="p-8">
                <div className="w-12 h-12 rounded-lg bg-emerald-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <TrendingUp className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-xl text-white mb-3">ROI Focus</CardTitle>
                <CardDescription className="text-slate-300 leading-relaxed">
                  Campaigns designed for measurable business impact
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light text-white mb-6">
              How It Works
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Our proven 5-step process ensures successful collaborations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {[
              {
                step: "01",
                title: "Discovery",
                description: "We identify perfect brand-influencer matches based on audience, values, and campaign goals"
              },
              {
                step: "02",
                title: "Screening",
                description: "Comprehensive background checks, engagement audits, and authenticity verification"
              },
              {
                step: "03",
                title: "Introduction",
                description: "Personalized introductions with campaign briefs and collaboration frameworks"
              },
              {
                step: "04",
                title: "Management",
                description: "End-to-end campaign support, from negotiation to content approval to performance tracking"
              },
              {
                step: "05",
                title: "Results",
                description: "Detailed analytics and ROI reporting for every collaboration"
              }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 rounded-full bg-emerald-500 flex items-center justify-center text-white font-bold text-xl mb-6 mx-auto hover:scale-110 transition-transform">
                  {item.step}
                </div>
                <h3 className="text-xl font-medium mb-4 text-white">{item.title}</h3>
                <p className="text-slate-300 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 lg:py-32 bg-slate-800/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light text-white mb-8">
              About Flerid Influence
            </h2>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              We are the premium influencer marketing platform that bridges the gap between authentic influencers and quality brands.
              Our mission is to create meaningful partnerships that drive real business results through genuine influence.
            </p>
            <p className="text-lg text-slate-400 leading-relaxed">
              Founded on the principle that authentic influence creates lasting impact, we personally curate every partnership
              to ensure brand safety, audience alignment, and measurable ROI. Our platform serves as the trusted intermediary
              for premium brands seeking genuine influencer collaborations.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light text-white mb-8">
              Get In Touch
            </h2>
            <p className="text-xl text-slate-300 mb-12 leading-relaxed">
              Ready to transform your influencer marketing? Let&apos;s discuss how we can help your brand connect with authentic influencers.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <Card className="bg-slate-800/80 border-slate-700 p-8">
                <CardHeader className="text-center">
                  <CardTitle className="text-xl text-white mb-4">Email Us</CardTitle>
                  <CardDescription className="text-slate-300 text-lg">
                    info@flerid.com
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="bg-slate-800/80 border-slate-700 p-8">
                <CardHeader className="text-center">
                  <CardTitle className="text-xl text-white mb-4">Call Us</CardTitle>
                  <CardDescription className="text-slate-300 text-lg">
                    +91 6003351943
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>

            <Button
              onClick={() => window.open('mailto:info@flerid.com?subject=Campaign Inquiry&body=Hi, I would like to discuss starting a campaign with Flerid Influence.', '_blank')}
              className="bg-emerald-500 hover:bg-emerald-600 text-white font-medium px-8 py-3 text-lg"
            >
              Start Your Campaign Today
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-800 border-t border-slate-700 py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <h3 className="text-2xl font-bold text-white mb-4">
                Flerid Influence
              </h3>
              <p className="text-slate-300 mb-4 max-w-md">
                The premium influencer marketing platform where authentic partnerships drive real results.
                Exclusively curated. Personally managed. Guaranteed authentic.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="border-emerald-500/30 text-slate-300">Premium Network</Badge>
                <Badge variant="outline" className="border-emerald-500/30 text-slate-300">Verified Influencers</Badge>
                <Badge variant="outline" className="border-emerald-500/30 text-slate-300">Guaranteed ROI</Badge>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-white">Services</h4>
              <ul className="space-y-2 text-slate-300">
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Influencer Discovery</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Campaign Management</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Performance Analytics</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Creative Direction</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-white">Contact</h4>
              <ul className="space-y-2 text-slate-300">
                <li>info@flerid.com</li>
                <li>+91 6003351943</li>
                <li><a href="#contact" className="hover:text-emerald-400 transition-colors">Get In Touch</a></li>
                <li><a href="#about" className="hover:text-emerald-400 transition-colors">Learn More</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-700 mt-8 pt-8 text-center text-slate-400">
            <p>&copy; 2025 Flerid Influence - Premium Influencer Marketing Platform. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
