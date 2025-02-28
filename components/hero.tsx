"use client"
import Image from "next/image"
import { MapPin, Github, Twitter, Linkedin } from "lucide-react"

export default function Hero() {
  return (
    <section className="py-20 px-4 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <h1 className="text-5xl font-bold">
            Hi I'm Krish{" "}
            <span role="img" aria-label="waving hand">
              👋
            </span>
          </h1>

          <p className="text-gray-600 text-lg leading-relaxed">
            I'm a FastAPI, AI/ML developer, web enthusiast, and co-founder of KodRish Innovation & Solution LLP. I
            specialize in deep learning, FastAPI, and full-stack development, working on projects like Vaani Sahayak,
            Holistic Mental Health Tracker, Bird Assist and more. I actively participate in hackathons and love pushing
            the boundaries of tech innovation.
          </p>

          <div className="flex items-center gap-2 text-gray-600">
            <MapPin className="w-5 h-5" />
            <span>Indore, India</span>
          </div>

          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span className="text-gray-600">Available for new projects</span>
          </div>

          <div className="flex gap-6">
            <a href="https://github.com/apniprogrammingyt09" className="text-gray-600 hover:text-gray-900 transition-colors">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://x.com/Krish75313" className="text-gray-600 hover:text-gray-900 transition-colors">
              <Twitter className="w-6 h-6" />
            </a>
            <a href="https://www.linkedin.com/in/krish-bhagat-47512a289/" className="text-gray-600 hover:text-gray-900 transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="relative w-full max-w-md mx-auto">
            <Image
              src="/krish1.png"
              alt="Krish Bhagat"
              width={400}
              height={400}
              className="rounded-lg"
              priority
            />
            <div className="flex justify-center mt-4">
              <button
                className="bg-gray-900 text-white px-6 py-2 rounded-full hover:bg-gray-800 transition-colors"
                onClick={() => {
                  const link = document.createElement("a");
                  link.href = "/Krish.pdf"; // Replace with the actual path
                  link.download = "Krish_Bhagat_CV.pdf"; // Replace with your preferred filename
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
                }}
              >
                Download CV
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

