"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion, AnimatePresence } from "framer-motion";
import {
  CheckCircle,
  Users,
  TrendingUp,
  Shield,
  ArrowRight,
  Menu,
  X,
  Star,
  Award,
  Target,
  Zap,
  Smartphone,
  Search,
  UserCheck,
  MessageSquare,
  BarChart3,
  Trophy
} from "lucide-react";

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

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
                <a href="#case-studies" className="text-slate-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors">
                  CASE STUDIES
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
              <Button
                variant="ghost"
                size="sm"
                className="text-white"
                onClick={toggleMobileMenu}
              >
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-slate-900/98 backdrop-blur-md border-b border-slate-800"
            >
              <div className="px-4 py-4 space-y-4">
                <a
                  href="#features"
                  className="block text-slate-300 hover:text-white py-2 text-sm font-medium transition-colors"
                  onClick={closeMobileMenu}
                >
                  FEATURES
                </a>
                <a
                  href="#how-it-works"
                  className="block text-slate-300 hover:text-white py-2 text-sm font-medium transition-colors"
                  onClick={closeMobileMenu}
                >
                  HOW IT WORKS
                </a>
                <a
                  href="#case-studies"
                  className="block text-slate-300 hover:text-white py-2 text-sm font-medium transition-colors"
                  onClick={closeMobileMenu}
                >
                  CASE STUDIES
                </a>
                <a
                  href="#about"
                  className="block text-slate-300 hover:text-white py-2 text-sm font-medium transition-colors"
                  onClick={closeMobileMenu}
                >
                  ABOUT
                </a>
                <a
                  href="#contact"
                  className="block text-slate-300 hover:text-white py-2 text-sm font-medium transition-colors"
                  onClick={closeMobileMenu}
                >
                  CONTACT
                </a>
                <Button
                  onClick={() => {
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                    closeMobileMenu();
                  }}
                  className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-medium mt-4"
                >
                  GET STARTED
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-24 pb-20 lg:pt-32 lg:pb-32 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{
              x: [0, 100, 0],
              y: [0, -100, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute top-1/4 left-1/4 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              x: [0, -150, 0],
              y: [0, 100, 0],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute top-3/4 right-1/4 w-96 h-96 bg-slate-600/5 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              x: [0, 80, 0],
              y: [0, -80, 0],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute bottom-1/4 left-1/3 w-48 h-48 bg-emerald-400/10 rounded-full blur-2xl"
          />
        </div>

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-light text-white mb-8 leading-tight"
            >
              Introducing<br />
              <span className="font-normal">the <span className="text-emerald-400">Flerid Influence</span> Platform</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Button
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="bg-emerald-500 hover:bg-emerald-600 text-white font-medium px-8 py-3 text-base relative overflow-hidden group"
                >
                  <span className="relative z-10 flex items-center">
                    <Smartphone className="mr-2 h-5 w-5 group-hover:animate-pulse" />
                    Get Your Brand Connected
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Button
                  onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
                  className="bg-slate-700 hover:bg-slate-600 text-white border-0 px-8 py-3 text-base relative overflow-hidden group"
                >
                  <span className="relative z-10">Explore Features</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-slate-600 to-slate-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Button>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex items-center justify-center text-slate-300 mb-12"
            >
              <div className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></div>
              <span className="text-lg">The new purpose-built platform to harness authentic influence</span>
            </motion.div>

            {/* Trust Badges and Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-16"
            >
              <motion.div
                whileHover={{ scale: 1.05, borderColor: "rgb(16 185 129)" }}
                transition={{ type: "spring", stiffness: 300 }}
                className="text-center p-6 bg-slate-800/50 rounded-lg border border-slate-700 hover:bg-slate-800/70"
              >
                <div className="w-12 h-12 rounded-lg bg-emerald-500 flex items-center justify-center mx-auto mb-4">
                  <Trophy className="h-6 w-6 text-white" />
                </div>
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0 }}
                  className="text-3xl font-bold text-emerald-400 mb-2"
                >
                  11x ROI
                </motion.div>
                <div className="text-sm text-slate-300">Average Return on Investment</div>
                <div className="text-xs text-slate-400 mt-1">*Based on verified campaigns</div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05, borderColor: "rgb(16 185 129)" }}
                transition={{ type: "spring", stiffness: 300 }}
                className="text-center p-6 bg-slate-800/50 rounded-lg border border-slate-700 hover:bg-slate-800/70"
              >
                <div className="w-12 h-12 rounded-lg bg-emerald-500 flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                  className="text-3xl font-bold text-emerald-400 mb-2"
                >
                  0%
                </motion.div>
                <div className="text-sm text-slate-300">Fake Followers Guaranteed</div>
                <div className="text-xs text-slate-400 mt-1">Manual verification process</div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05, borderColor: "rgb(16 185 129)" }}
                transition={{ type: "spring", stiffness: 300 }}
                className="text-center p-6 bg-slate-800/50 rounded-lg border border-slate-700 hover:bg-slate-800/70"
              >
                <div className="w-12 h-12 rounded-lg bg-emerald-500 flex items-center justify-center mx-auto mb-4">
                  <Zap className="h-6 w-6 text-white" />
                </div>
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                  className="text-3xl font-bold text-emerald-400 mb-2"
                >
                  24hrs
                </motion.div>
                <div className="text-sm text-slate-300">Campaign Launch Time</div>
                <div className="text-xs text-slate-400 mt-1">From brief to execution</div>
              </motion.div>
            </motion.div>


          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 lg:py-32 bg-slate-800/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light text-white mb-6">
              Why Choose Flerid Influence?
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              We deliver results through our unique approach to influencer marketing
            </p>
          </motion.div>

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

          {/* Pricing Tiers */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-20"
          >
            <div className="text-center mb-12">
              <h3 className="text-3xl sm:text-4xl font-light text-white mb-4">
                Choose Your Plan
              </h3>
              <p className="text-lg text-slate-300">
                Flexible pricing for brands of all sizes
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[
                {
                  name: "Starter",
                  price: "₹15,000",
                  period: "per campaign",
                  description: "Perfect for small brands testing influencer marketing",
                  features: [
                    "2 verified micro-influencers",
                    "Basic campaign management",
                    "Performance analytics",
                    "Email support",
                    "1 month campaign duration"
                  ],
                  cta: "Get Started",
                  popular: false
                },
                {
                  name: "Professional",
                  price: "₹1,00,000",
                  period: "per campaign",
                  description: "Ideal for growing brands seeking measurable ROI",
                  features: [
                    "10 verified influencers (mix of micro & macro)",
                    "Full campaign management",
                    "Advanced analytics & reporting",
                    "Dedicated account manager",
                    "3 month campaign duration",
                    "Content approval process"
                  ],
                  cta: "Most Popular",
                  popular: true
                },
                {
                  name: "Enterprise",
                  price: "Custom",
                  period: "pricing",
                  description: "For large brands requiring comprehensive solutions",
                  features: [
                    "Unlimited verified influencers",
                    "White-glove campaign management",
                    "Real-time dashboard & API access",
                    "24/7 priority support",
                    "Long-term partnerships",
                    "Custom integrations",
                    "Quarterly strategy reviews"
                  ],
                  cta: "Contact Sales",
                  popular: false
                }
              ].map((plan, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative ${plan.popular ? 'transform scale-105' : ''}`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <Badge className="bg-emerald-500 text-white px-4 py-1">
                        Most Popular
                      </Badge>
                    </div>
                  )}

                  <Card className={`h-full ${plan.popular ? 'bg-slate-800/90 border-emerald-500' : 'bg-slate-800/80 border-slate-700'} hover:border-emerald-500/50 transition-all duration-300`}>
                    <CardHeader className="p-8">
                      <CardTitle className="text-2xl text-white mb-2">{plan.name}</CardTitle>
                      <div className="mb-4">
                        <span className="text-4xl font-bold text-emerald-400">{plan.price}</span>
                        <span className="text-slate-400 ml-2">{plan.period}</span>
                      </div>
                      <CardDescription className="text-slate-300 mb-6">
                        {plan.description}
                      </CardDescription>

                      <ul className="space-y-3 mb-8">
                        {plan.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-slate-300">
                            <CheckCircle className="h-5 w-5 text-emerald-400 mr-3 flex-shrink-0" />
                            <span className="text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>

                      <Button
                        onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                        className={`w-full ${plan.popular ? 'bg-emerald-500 hover:bg-emerald-600' : 'bg-slate-700 hover:bg-slate-600'} text-white font-medium py-3`}
                      >
                        {plan.cta}
                      </Button>
                    </CardHeader>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
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
                description: "We identify perfect brand-influencer matches based on audience, values, and campaign goals",
                icon: Search
              },
              {
                step: "02",
                title: "Screening",
                description: "Comprehensive background checks, engagement audits, and authenticity verification",
                icon: UserCheck
              },
              {
                step: "03",
                title: "Introduction",
                description: "Personalized introductions with campaign briefs and collaboration frameworks",
                icon: MessageSquare
              },
              {
                step: "04",
                title: "Management",
                description: "End-to-end campaign support, from negotiation to content approval to performance tracking",
                icon: Users
              },
              {
                step: "05",
                title: "Results",
                description: "Detailed analytics and ROI reporting for every collaboration",
                icon: BarChart3
              }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 rounded-full bg-emerald-500 flex items-center justify-center text-white mb-6 mx-auto hover:scale-110 transition-transform">
                  <item.icon className="h-8 w-8" />
                </div>
                <div className="text-xs text-emerald-400 font-semibold mb-2">{item.step}</div>
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
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light text-white mb-8">
              About Flerid Influence
            </h2>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              A branch of Flerid Technologies based in Assam, India. Our mission: &quot;Bridging authentic influencers and quality brands for meaningful partnerships.&quot;
            </p>
            <p className="text-lg text-slate-400 leading-relaxed">
              Founded on the principle that authentic influence creates lasting impact, we personally curate every partnership
              to ensure brand safety, audience alignment, and measurable ROI. Our platform serves as the trusted intermediary
              for premium brands seeking genuine influencer collaborations.
            </p>
          </motion.div>

          {/* Company Timeline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h3 className="text-3xl font-light text-white text-center mb-12">Our Journey</h3>
            <div className="max-w-3xl mx-auto">
              <div className="space-y-8">
                {[
                  { year: "2023", title: "Flerid Technologies Founded", description: "Established as a technology company in Assam, India" },
                  { year: "2024", title: "Market Research & Development", description: "Extensive research into influencer marketing challenges and solutions" },
                  { year: "2025", title: "Flerid Influence Launch", description: "Launched premium influencer marketing platform with manual curation" }
                ].map((milestone, index) => (
                  <div key={index} className="flex items-center space-x-6">
                    <div className="w-20 h-20 rounded-full bg-emerald-500 flex items-center justify-center text-white font-bold flex-shrink-0">
                      {milestone.year}
                    </div>
                    <div>
                      <h4 className="text-xl font-medium text-white mb-2">{milestone.title}</h4>
                      <p className="text-slate-300">{milestone.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Team Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h3 className="text-3xl font-light text-white text-center mb-12">Our Expert Team</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[
                {
                  name: "Arjun Sharma",
                  role: "Founder & CEO",
                  expertise: "Digital Marketing Strategy",
                  description: "10+ years in digital marketing and influencer partnerships",
                  image: "AS"
                },
                {
                  name: "Priya Patel",
                  role: "Head of Influencer Relations",
                  expertise: "Community Management",
                  description: "Expert in building authentic creator relationships",
                  image: "PP"
                },
                {
                  name: "Rohit Kumar",
                  role: "Analytics Director",
                  expertise: "Data Science & ROI Optimization",
                  description: "Specialist in campaign performance and ROI measurement",
                  image: "RK"
                }
              ].map((member, index) => (
                <Card key={index} className="bg-slate-800/80 border-slate-700 hover:border-emerald-500/50 transition-all duration-300 text-center">
                  <CardHeader className="p-8">
                    <div className="w-20 h-20 rounded-full bg-emerald-500 flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                      {member.image}
                    </div>
                    <CardTitle className="text-xl text-white mb-2">{member.name}</CardTitle>
                    <div className="text-emerald-400 font-medium mb-2">{member.role}</div>
                    <div className="text-sm text-slate-400 mb-4">{member.expertise}</div>
                    <CardDescription className="text-slate-300 text-sm">
                      {member.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </motion.div>

          {/* Certifications & Trust Elements */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h3 className="text-3xl font-light text-white mb-8">Certifications & Trust</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {[
                { name: "IMA Certified", description: "Influencer Marketing Association" },
                { name: "ASCI Compliant", description: "Advertising Standards Council" },
                { name: "ISO 27001", description: "Information Security Management" },
                { name: "GDPR Compliant", description: "Data Protection Regulation" }
              ].map((cert, index) => (
                <div key={index} className="p-6 bg-slate-800/80 rounded-lg border border-slate-700">
                  <div className="w-12 h-12 rounded-lg bg-emerald-500 flex items-center justify-center mx-auto mb-4">
                    <Shield className="h-6 w-6 text-white" />
                  </div>
                  <div className="font-semibold text-white mb-2">{cert.name}</div>
                  <div className="text-sm text-slate-400">{cert.description}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 lg:py-32 bg-slate-800/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light text-white mb-6">
              What Our Clients Say
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Real testimonials from brands who have transformed their marketing with authentic influencer partnerships
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                quote: "Flerid Influence delivered 25% sales growth in just 3 months. Their manual verification process ensured every influencer was authentic and aligned with our brand values.",
                author: "Sarah Chen",
                role: "Marketing Director",
                company: "Beauty Brand Co.",
                rating: 5,
                result: "25% Sales Growth"
              },
              {
                quote: "The ROI was incredible - 11x return on our investment. The team's personal approach to campaign management made all the difference.",
                author: "Raj Patel",
                role: "Founder",
                company: "Tech Startup",
                rating: 5,
                result: "11x ROI"
              },
              {
                quote: "Finally, an influencer platform that prioritizes authenticity. Zero fake followers, real engagement, and measurable results.",
                author: "Emily Rodriguez",
                role: "Brand Manager",
                company: "Fashion Forward",
                rating: 5,
                result: "200% Engagement Boost"
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-slate-800/80 border border-slate-700 rounded-lg p-8 hover:border-emerald-500/50 transition-all duration-300"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                <blockquote className="text-slate-300 mb-6 italic">
                  &quot;{testimonial.quote}&quot;
                </blockquote>

                <div className="border-t border-slate-700 pt-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-semibold text-white">{testimonial.author}</div>
                      <div className="text-sm text-slate-400">{testimonial.role}</div>
                      <div className="text-sm text-slate-400">{testimonial.company}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-emerald-400 font-bold text-lg">{testimonial.result}</div>
                      <div className="text-xs text-slate-400">Result</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section id="case-studies" className="py-20 lg:py-32 bg-slate-800/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light text-white mb-6">
              Real Results from Curated Partnerships
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              See how our authentic influencer partnerships have driven measurable success for premium brands
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Beauty Brand Transformation",
                industry: "Beauty & Cosmetics",
                challenge: "Low brand awareness among Gen Z consumers",
                solution: "Partnered with 5 micro-influencers in beauty niche",
                results: "300% increase in brand mentions, 45% boost in sales",
                roi: "11x ROI",
                testimonial: "Flerid Influence delivered authentic partnerships that resonated with our target audience.",
                client: "Premium Beauty Co.",
                icon: Star
              },
              {
                title: "Tech Startup Launch",
                industry: "Technology",
                challenge: "Product launch with zero market presence",
                solution: "Strategic campaign with tech reviewers and early adopters",
                results: "50K app downloads in first month, 4.8 star rating",
                roi: "8x ROI",
                testimonial: "The quality of influencers and campaign management exceeded our expectations.",
                client: "InnovateTech",
                icon: Zap
              },
              {
                title: "Fashion Brand Revival",
                industry: "Fashion & Lifestyle",
                challenge: "Declining engagement and outdated brand image",
                solution: "Collaborated with fashion micro-influencers for authentic content",
                results: "200% increase in engagement, 60% growth in followers",
                roi: "9x ROI",
                testimonial: "Our brand image completely transformed through authentic storytelling.",
                client: "StyleForward",
                icon: Award
              },
              {
                title: "Fitness Brand Expansion",
                industry: "Health & Fitness",
                challenge: "Expanding into new demographic segments",
                solution: "Targeted campaigns with fitness enthusiasts and wellness advocates",
                results: "150% increase in new customer acquisition",
                roi: "12x ROI",
                testimonial: "Flerid helped us reach audiences we never thought possible.",
                client: "FitLife Pro",
                icon: Target
              }
            ].map((study, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-slate-800/80 border-slate-700 hover:border-emerald-500/50 transition-all duration-300 group h-full">
                  <CardHeader className="p-8">
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-12 h-12 rounded-lg bg-emerald-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <study.icon className="h-6 w-6 text-white" />
                      </div>
                      <Badge variant="outline" className="border-emerald-500 text-emerald-400">
                        {study.industry}
                      </Badge>
                    </div>

                    <CardTitle className="text-xl text-white mb-4">{study.title}</CardTitle>

                    <div className="space-y-4 text-slate-300">
                      <div>
                        <h4 className="font-semibold text-emerald-400 mb-2">Challenge:</h4>
                        <p className="text-sm">{study.challenge}</p>
                      </div>

                      <div>
                        <h4 className="font-semibold text-emerald-400 mb-2">Solution:</h4>
                        <p className="text-sm">{study.solution}</p>
                      </div>

                      <div>
                        <h4 className="font-semibold text-emerald-400 mb-2">Results:</h4>
                        <p className="text-sm">{study.results}</p>
                      </div>

                      <div className="flex items-center justify-between pt-4 border-t border-slate-700">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-emerald-400">{study.roi}</div>
                          <div className="text-xs text-slate-400">Return on Investment</div>
                        </div>
                        <div className="text-right">
                          <div className="text-sm font-medium text-white">{study.client}</div>
                          <div className="text-xs text-slate-400">Client</div>
                        </div>
                      </div>

                      <blockquote className="italic text-slate-300 border-l-2 border-emerald-500 pl-4 mt-4">
                        &quot;{study.testimonial}&quot;
                      </blockquote>
                    </div>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <Button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-emerald-500 hover:bg-emerald-600 text-white font-medium px-8 py-3 text-lg"
            >
              Start Your Success Story
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-4xl sm:text-5xl lg:text-6xl font-light text-white mb-8"
            >
              Get In Touch
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-xl text-slate-300 mb-12 leading-relaxed"
            >
              Ready to transform your influencer marketing? Let&apos;s discuss how we can help your brand connect with authentic influencers.
            </motion.p>

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

          {/* FAQ Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-20 max-w-4xl mx-auto"
          >
            <h3 className="text-3xl font-light text-white text-center mb-12">
              Frequently Asked Questions
            </h3>

            <div className="space-y-4">
              {[
                {
                  question: "What is your vetting process for influencers?",
                  answer: "We conduct comprehensive background checks including engagement audits, authenticity verification using tools like HypeAuditor, manual review of content quality, and audience alignment analysis. Every influencer is personally curated and verified before joining our network."
                },
                {
                  question: "How do you ensure zero fake followers?",
                  answer: "We use advanced analytics tools combined with manual verification to detect fake followers, engagement pods, and bot activity. Our team personally reviews each influencer's audience quality, engagement patterns, and content authenticity before approval."
                },
                {
                  question: "What kind of ROI can I expect?",
                  answer: "Our campaigns typically deliver 8-12x ROI, with an average of 11x return on investment. Results vary based on industry, campaign goals, and influencer selection, but we guarantee measurable results and provide detailed analytics for every campaign."
                },
                {
                  question: "How quickly can you launch a campaign?",
                  answer: "Most campaigns can be launched within 24-48 hours from brief approval. Our streamlined process includes rapid influencer matching, quick negotiations, and efficient content approval workflows to get your campaign live fast."
                },
                {
                  question: "Do you work with both brands and influencers?",
                  answer: "Yes! We serve as the trusted intermediary for both premium brands seeking authentic partnerships and verified influencers looking for quality collaboration opportunities. Our platform ensures fair compensation and creative freedom for influencers while delivering guaranteed results for brands."
                },
                {
                  question: "What makes Flerid Influence different from other platforms?",
                  answer: "Unlike automated platforms, we personally curate every partnership. Our manual verification process, dedicated account management, and focus on authentic relationships ensure higher quality collaborations and better ROI compared to traditional influencer marketing platforms."
                }
              ].map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="bg-slate-800/80 border-slate-700 hover:border-emerald-500/50 transition-all duration-300">
                    <CardHeader className="p-6">
                      <details className="group">
                        <summary className="flex items-center justify-between cursor-pointer list-none">
                          <CardTitle className="text-lg text-white group-open:text-emerald-400 transition-colors">
                            {faq.question}
                          </CardTitle>
                          <div className="ml-4 flex-shrink-0">
                            <svg
                              className="w-5 h-5 text-slate-400 group-open:text-emerald-400 group-open:rotate-180 transition-all duration-300"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                          </div>
                        </summary>
                        <CardDescription className="mt-4 text-slate-300 leading-relaxed">
                          {faq.answer}
                        </CardDescription>
                      </details>
                    </CardHeader>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
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
