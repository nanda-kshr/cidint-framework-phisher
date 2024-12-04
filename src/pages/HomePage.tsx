import React from 'react';
import { 
  ArrowRight, 
  Globe, 
  Twitter, 
  Github, 
  Linkedin, 
  Facebook, 
  Shield, 
  Code, 
  Database, 
  Zap, 
  Check, 
  Rocket 
} from 'lucide-react';
import { Button } from '../components/common/Button';

export const HomePage: React.FC = () => {
  const socialIcons = [
    { Icon: Twitter, href: "https://twitter.com/cyberphish" },
    { Icon: Github, href: "https://github.com/cyberphish" },
    { Icon: Linkedin, href: "https://linkedin.com/company/cyberphish" },
    { Icon: Facebook, href: "https://facebook.com/cyberphish" }
  ];
  
  const features = [
    {
      icon: Shield,
      title: "Advanced Cybersecurity",
      description: "Cutting-edge protection mechanisms to safeguard your digital assets and infrastructure.",
      color: "text-blue-400"
    },
    {
      icon: Code,
      title: "Seamless Web Development",
      description: "Integrated development environment with powerful tools for rapid web application creation.",
      color: "text-green-400"
    },
    {
      icon: Database,
      title: "Intelligent Data Management",
      description: "Smart data handling and analytics to drive insights and optimize your digital strategy.",
      color: "text-purple-400"
    }
  ];

  return (
    <div className="bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800 text-white min-h-screen">
      <div className="container mx-auto px-6 pt-24 max-w-7xl">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400 leading-tight">
                CyberPhish: Empowering Digital Creation
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed max-w-xl">
                A revolutionary platform that combines cybersecurity, web development, and data management into one powerful, seamless ecosystem.
              </p>
            </div>
            
            <div className="flex space-x-6">
              <Button 
                icon={<ArrowRight />} 
                className="shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 transition-shadow duration-300"
              >
                Get Started
              </Button>
              <Button 
                variant="secondary" 
                className="hover:bg-gray-700 transition-colors duration-300"
              >
                Learn More
              </Button>
            </div>

            <div className="pt-8 border-t border-gray-800">
              <h3 className="text-xl mb-4 text-gray-300">Connect With Us</h3>
              <div className="flex space-x-6">
                {socialIcons.map(({ Icon, href }, index) => (
                  <a 
                    key={index} 
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-300 transform hover:-translate-y-1"
                  >
                    <Icon size={28} strokeWidth={1.5} />
                  </a>
                ))}
              </div>
            </div>
          </div>
          
          <div className="hidden md:flex justify-center items-center">
            <div className="bg-gradient-to-tr from-blue-500/20 to-green-500/20 rounded-3xl p-12 w-full max-w-md">
              <Globe className="w-full h-auto text-blue-400 opacity-70 animate-pulse" />
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-24 max-w-7xl">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400 leading-tight">
            Our Key Features
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Discover how CyberPhish revolutionizes your digital workflow with integrated, cutting-edge solutions.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-10">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-gray-800 border border-gray-700 rounded-2xl p-8 text-center 
                         transform hover:scale-105 hover:border-blue-500 
                         transition-all duration-300 ease-in-out 
                         shadow-lg hover:shadow-2xl hover:shadow-blue-500/20"
            >
              <feature.icon className={`mx-auto mb-6 ${feature.color}`} size={64} strokeWidth={1.5} />
              <h3 className="text-2xl font-semibold mb-4 text-white">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>


      <div className="container mx-auto px-6 py-24 max-w-7xl">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400 leading-tight">
                Why Choose CyberPhish?
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed max-w-xl">
                Transform your digital strategy with our comprehensive suite of tools designed for modern, forward-thinking enterprises.
              </p>
            </div>

            <div className="space-y-6">
              {[
                { icon: Zap, text: "Lightning-fast Performance", color: "text-yellow-400" },
                { icon: Check, text: "Comprehensive Security Protocols", color: "text-green-400" },
                { icon: Rocket, text: "Scalable and Future-Proof Solutions", color: "text-purple-400" }
              ].map((benefit, index) => (
                <div 
                  key={index} 
                  className="flex items-center space-x-6 p-4 bg-gray-800 rounded-xl hover:bg-gray-700 transition-colors duration-300"
                >
                  <benefit.icon className={`${benefit.color}`} size={36} strokeWidth={1.5} />
                  <span className="text-lg text-gray-300">{benefit.text}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="hidden md:flex justify-center items-center">
            <div className="bg-gradient-to-tr from-blue-500/20 to-green-500/20 rounded-3xl p-12 w-full max-w-md">
              <Code className="w-full h-auto text-blue-400 opacity-70 animate-pulse" />
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gray-800 py-24">
        <div className="container mx-auto px-6 max-w-7xl text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400 leading-tight">
              Ready to Transform Your Digital Ecosystem?
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed">
              Join thousands of innovative teams leveraging CyberPhish to secure, develop, and grow their digital presence with unparalleled efficiency.
            </p>
            
            <div className="flex justify-center space-x-6 pt-8">
              <Button 
                icon={<ArrowRight />} 
                className="text-lg px-10 py-4 shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 transition-shadow duration-300"
              >
                Start Free Trial
              </Button>
              <Button 
                variant="secondary" 
                className="text-lg px-10 py-4 hover:bg-gray-700 transition-colors duration-300"
              >
                Schedule Demo
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};