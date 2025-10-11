"use client";

import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Message sent!");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <section id="contact" className="min-h-screen px-4 py-20  dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4 text-gray-900 dark:text-white">
          Get In <span className="text-blue-500">Touch</span>
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-300 mb-12">
          Have a project in mind or just want to connect? Feel free to reach out
          to me for collaborations or questions.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Left: Contact Information */}
          <div className="bg-gradient-to-r from-purple-400 to-blue-500 p-1 rounded-xl shadow-lg">
            <div className="bg-white dark:bg-gray-800 rounded-xl p-8 h-full">
              <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
                Contact Information
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Feel free to reach out for opportunities, collaborations, or
                just to say hi!
              </p>

              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-gray-800 dark:text-gray-200">
                  <FiMail className="w-6 h-6 text-purple-500" />
                  <span>Email</span>:
                  <a
                    href="dev.mostafa2025@gmail.com"
                    className="ml-1 text-purple-500"
                  >
                    dev.mostafa2025@gmail.com
                  </a>
                </li>
                <li className="flex items-center gap-3 text-gray-800 dark:text-gray-200">
                  <FiPhone className="w-6 h-6 text-purple-500" />
                  <span>Phone</span>:
                  <a href="tel:+8801614797956" className="ml-1 text-purple-500">
                    +8801614797956
                  </a>
                </li>
                <li className="flex items-center gap-3 text-gray-800 dark:text-gray-200">
                  <FiMapPin className="w-6 h-6 text-purple-500" />
                  <span>Location</span>: Dinajpur, Bangladesh
                </li>
              </ul>

              <div className="mt-6 flex items-center gap-4">
                <a
                  href="https://github.com/devmostafakamal"
                  className="p-2 rounded-full bg-purple-100 text-purple-600 hover:bg-purple-200 transition"
                >
                  <FaGithub />
                </a>
                <a
                  href="https://www.linkedin.com/in/mostafa-kamal-731483379/"
                  className="p-2 rounded-full bg-purple-100 text-purple-600 hover:bg-purple-200 transition"
                >
                  <FaLinkedin />
                </a>
                <a
                  href="https://wa.me/8801858501598"
                  className="p-2 rounded-full bg-purple-100 text-purple-600 hover:bg-purple-200 transition"
                >
                  <FaWhatsapp />
                </a>
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
            <h3 className="text-xl font-bold mb-6 text-gray-900 dark:text-white">
              Send me a message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="relative">
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder=" "
                  className="peer w-full p-4 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
                <label
                  htmlFor="name"
                  className="absolute left-4 top-4 text-gray-500 dark:text-gray-400 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-1 peer-focus:text-sm peer-focus:text-blue-500"
                >
                  Name
                </label>
              </div>

              <div className="relative">
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder=" "
                  className="peer w-full p-4 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
                <label
                  htmlFor="email"
                  className="absolute left-4 top-4 text-gray-500 dark:text-gray-400 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-1 peer-focus:text-sm peer-focus:text-blue-500"
                >
                  Email
                </label>
              </div>

              <div className="relative">
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder=" "
                  className="peer w-full p-4 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
                <label
                  htmlFor="subject"
                  className="absolute left-4 top-4 text-gray-500 dark:text-gray-400 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-1 peer-focus:text-sm peer-focus:text-blue-500"
                >
                  Subject
                </label>
              </div>

              <div className="relative">
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder=" "
                  className="peer w-full p-4 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 h-32 resize-none"
                  required
                />
                <label
                  htmlFor="message"
                  className="absolute left-4 top-4 text-gray-500 dark:text-gray-400 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-1 peer-focus:text-sm peer-focus:text-blue-500"
                >
                  Message
                </label>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-500 to-blue-500 text-white p-3 rounded-lg hover:opacity-90 transition flex items-center justify-center gap-2"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
