"use client";

import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Download, Cloud, Code, ShieldCheck } from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

export default function Portfolio() {
  return (
    <div className="bg-black text-white min-h-screen font-sans overflow-x-hidden">
      
      {/* Animated Background Glow */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute w-[500px] h-[500px] bg-purple-600 opacity-20 blur-3xl rounded-full top-[-100px] left-[-100px] animate-pulse"></div>
        <div className="absolute w-[500px] h-[500px] bg-cyan-500 opacity-20 blur-3xl rounded-full bottom-[-100px] right-[-100px] animate-pulse"></div>
      </div>

      {/* Hero Section */}
      <section className="h-screen flex flex-col justify-center items-center text-center px-6">
        <motion.h1
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 text-transparent bg-clip-text"
        >
          Shashishekhar Singh
        </motion.h1>

        <motion.p
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="mt-6 text-lg md:text-2xl text-gray-300 max-w-2xl"
        >
          Cloud • AI • Blockchain Enthusiast  
          Building Secure, Scalable & Intelligent Systems.
        </motion.p>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="mt-10 flex flex-wrap gap-6 justify-center"
        >
          <a href="#projects" className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl shadow-xl hover:scale-110 transition-transform">
            View Projects
          </a>

          <a
            href="/resume.pdf"
            download
            className="px-6 py-3 border border-gray-500 rounded-2xl flex items-center gap-2 hover:bg-white hover:text-black transition-all"
          >
            <Download size={18} /> Download Resume
          </a>
        </motion.div>
      </section>

      {/* About Section with Parallax Effect */}
      <section className="py-24 px-6 md:px-20 bg-neutral-950">
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-4xl font-bold mb-10 text-center">About Me</h2>
          <p className="text-gray-400 text-lg max-w-4xl mx-auto text-center leading-relaxed">
            I am a Computer Science student specializing in Cloud Architecture, AI Systems, and Secure Distributed Computing.
            Hands-on experience with AWS, Kubernetes, Docker, CI/CD pipelines, networking, and blockchain-based architectures.
            Passionate about privacy-preserving AI and scalable cloud-native systems.
          </p>
        </motion.div>
      </section>

      {/* Skills Section */}
      <section className="py-24 px-6 md:px-20">
        <h2 className="text-4xl font-bold mb-14 text-center">Core Expertise</h2>

        <div className="grid md:grid-cols-3 gap-10">
          {[
            {
              icon: <Cloud size={40} />,
              title: "Cloud & DevOps",
              desc: "AWS, VPC, EC2, S3, IAM, CloudFormation, Docker, Kubernetes, CI/CD"
            },
            {
              icon: <Code size={40} />,
              title: "Programming & Systems",
              desc: "Python, C/C++, DSA, REST APIs, System Design"
            },
            {
              icon: <ShieldCheck size={40} />,
              title: "Security & Networking",
              desc: "Subnetting, Firewalls, Wireshark, Secure Architectures"
            }
          ].map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="p-8 bg-neutral-900 rounded-2xl shadow-xl hover:shadow-purple-500/30 hover:scale-105 transition-all"
            >
              <div className="mb-4 text-cyan-400">{skill.icon}</div>
              <h3 className="text-2xl font-semibold mb-3">{skill.title}</h3>
              <p className="text-gray-400">{skill.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-6 md:px-20 bg-neutral-950">
        <h2 className="text-4xl font-bold mb-14 text-center">Featured Projects</h2>

        <div className="grid md:grid-cols-2 gap-10">
          {[
            {
              title: "Blockchain-based AI Model Integrity",
              desc: "Secure AI verification system integrating blockchain and cloud authentication (MFA, STS)."
            },
            {
              title: "Dockerized REST API on Kubernetes",
              desc: "GitHub Actions CI/CD, Horizontal Pod Autoscaling, production-ready container architecture."
            }
          ].map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="p-8 bg-neutral-900 rounded-2xl shadow-xl hover:scale-105 hover:shadow-cyan-500/20 transition-all"
            >
              <h3 className="text-2xl font-semibold mb-4">{project.title}</h3>
              <p className="text-gray-400 mb-4">{project.desc}</p>
              <button className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl hover:scale-105 transition-transform">
                View Details
              </button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section className="py-24 text-center">
        <h2 className="text-4xl font-bold mb-10">Connect With Me</h2>
        <div className="flex justify-center gap-10 text-cyan-400">
          <a href="#"><Github size={35} /></a>
          <a href="#"><Linkedin size={35} /></a>
          <a href="mailto:yourmail@example.com"><Mail size={35} /></a>
        </div>
      </section>

      <footer className="text-center py-6 text-gray-600 border-t border-gray-800">
        © {new Date().getFullYear()} Shashishekhar Singh | Built with Next.js, Tailwind & Framer Motion
      </footer>
    </div>
  );
}
