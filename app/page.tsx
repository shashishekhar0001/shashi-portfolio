"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Download, Award, ExternalLink, X } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const stats = [
  { label: "AWS Certifications", value: 3 },
  { label: "Cloud Projects", value: 5 },
  { label: "Internships", value: 2 },
];

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  const projects = [
    {
      title: "EpiShield – Epidemic Management System",
      description:
        "Cloud-hosted epidemic management platform deployed on AWS.",
      github: "https://github.com/YOURUSERNAME/epishield",
      details:
        "Built using AWS S3 hosting, optimized for concurrency, cost efficiency and scalability.",
    },
    {
      title: "Monolithic vs Microservices – AWS",
      description:
        "Architecture comparison deployed on AWS infrastructure.",
      github: "https://github.com/YOURUSERNAME/microservices-aws",
      details:
        "Implemented EC2 deployments, IAM roles, load balancing and benchmarking.",
    },
  ];

  const certifications = [
    {
      name: "AWS Solutions Architect",
      link: "https://www.credly.com/badges/a2f8d1a8-d7d0-4d68-8244-0ca089d7345e",
    },
    {
      name: "AWS AI Practitioner",
      link: "https://www.credly.com/earner/earned/badge/695faeca-1cf7-4a35-ba67-5b8b2c49d25c",
    },
    {
      name: "AWS Cloud Practitioner",
      link: "https://www.credly.com/earner/earned/badge/5e7b1f95-4718-4293-93a0-89cfa1d7bc90",
    },
  ];

  const galleryImages = [
    "Image1.jpeg",
    "Image2.jpg",
    "Image3.jpg",
    
  ];

  return (
    <div className="bg-black text-white min-h-screen font-sans overflow-x-hidden">

      {/* Background Glow */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute w-[500px] h-[500px] bg-purple-600 opacity-20 blur-3xl rounded-full top-[-100px] left-[-100px] animate-pulse"></div>
        <div className="absolute w-[500px] h-[500px] bg-cyan-500 opacity-20 blur-3xl rounded-full bottom-[-100px] right-[-100px] animate-pulse"></div>
      </div>

      {/* Hero */}
      <section className="h-screen flex flex-col justify-center items-center text-center px-6">
        <motion.h1
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="text-6xl font-extrabold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 text-transparent bg-clip-text"
        >
          Shashi Shekhar
        </motion.h1>
        <motion.p
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="mt-6 text-xl text-gray-300 max-w-3xl"
        >
          AWS Certified Solutions Architect | AI Practitioner | Cloud Engineer
        </motion.p>
        <div className="mt-8 flex gap-6">
          <a href="/resume.pdf" download className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl flex items-center gap-2 hover:scale-110 transition">
            <Download size={18} /> Download Resume
          </a>
        </div>
      </section>

      {/* Counters */}
      <section className="py-20 text-center">
        <div className="grid md:grid-cols-3 gap-10 max-w-4xl mx-auto">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              className="p-8 bg-neutral-900 rounded-2xl shadow-xl"
            >
              <h3 className="text-5xl font-bold text-cyan-400">{stat.value}+</h3>
              <p className="mt-3 text-gray-400">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section className="py-24 px-6 md:px-20 bg-neutral-950">
        <h2 className="text-4xl font-bold mb-14 text-center">Projects</h2>
        <div className="grid md:grid-cols-2 gap-10">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="p-8 bg-neutral-900 rounded-2xl shadow-xl cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <h3 className="text-2xl font-semibold mb-4">{project.title}</h3>
              <p className="text-gray-400">{project.description}</p>
              <a href={project.github} target="_blank" className="mt-4 inline-flex items-center gap-2 text-cyan-400">
                <Github size={18} /> GitHub Repo <ExternalLink size={16} />
              </a>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
          <div className="bg-neutral-900 p-10 rounded-2xl max-w-lg relative">
            <button onClick={() => setSelectedProject(null)} className="absolute top-4 right-4">
              <X />
            </button>
            <h3 className="text-2xl font-bold mb-4">{selectedProject.title}</h3>
            <p className="text-gray-300">{selectedProject.details}</p>
          </div>
        </div>
      )}

      {/* Certifications with Credly Links */}
      <section className="py-24 text-center">
        <h2 className="text-4xl font-bold mb-10">AWS Certifications</h2>
        <div className="flex flex-wrap justify-center gap-8">
          {certifications.map((cert, i) => (
            <motion.a
              key={i}
              href={cert.link}
              target="_blank"
              whileHover={{ scale: 1.1 }}
              className="px-6 py-4 bg-gradient-to-r from-yellow-500 to-orange-500 text-black rounded-full font-semibold shadow-lg"
            >
              <Award className="inline mr-2" size={18} /> {cert.name}
            </motion.a>
          ))}
        </div>
      </section>

      {/* Gallery */}
      <section className="py-24 px-6 md:px-20 bg-neutral-950">
        <h2 className="text-4xl font-bold mb-14 text-center">Gallery</h2>
        <div className="grid md:grid-cols-4 gap-6">
          {galleryImages.map((img, i) => (
            <motion.img
              key={i}
              src={img}
              alt="Gallery"
              whileHover={{ scale: 1.05 }}
              className="rounded-xl cursor-pointer"
              onClick={() => setSelectedImage(img)}
            />
          ))}
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50">
          <div className="relative">
            <button onClick={() => setSelectedImage(null)} className="absolute top-4 right-4 text-white">
              <X size={30} />
            </button>
            <img src={selectedImage} alt="Expanded" className="max-h-[80vh] rounded-xl" />
          </div>
        </div>
      )}

      {/* Contact */}
      <section className="py-20 text-center">
        <h2 className="text-3xl font-bold mb-8">Connect With Me</h2>
        <div className="flex justify-center gap-10 text-cyan-400">
          <a href="https://github.com/shashishekhar0001" target="_blank"><Github size={35} /></a>
          <a href="https://www.linkedin.com/in/shashi-shekhar-03789319b/" target="_blank"><Linkedin size={35} /></a>
          <a href="mailto:singhshashishekhar845@gmail.com"><Mail size={35} /></a>
        </div>
      </section>

      <footer className="text-center py-6 text-gray-600 border-t border-gray-800">
        © {new Date().getFullYear()} Shashi Shekhar | Cloud & AI Practitioner
      </footer>
    </div>
  );
}
