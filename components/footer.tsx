"use client"
import { Mail, Phone, Github, Twitter, Linkedin, Copy } from "lucide-react"
import { useState } from "react";


export default function Footer() {
  const [copied, setCopied] = useState<"email" | "phone" | null>(null); // ✅ Use explicit type

  // ✅ Function inside the component
  const handleCopy = (text: string, type: "email" | "phone") => {
    navigator.clipboard.writeText(text);
    setCopied(type);
    setTimeout(() => setCopied(null), 2000); // Reset after 2 sec
  };

  return (
    <footer className="py-20 px-4 max-w-7xl mx-auto text-center" id="contact">
      <div className="max-w-2xl mx-auto mb-16">
        <p className="text-xl text-gray-700 mb-8">
          What's next? Feel free to reach out to me if you're looking for a developer, have a query, or simply want to
          connect.
        </p>

        <div className="flex flex-col items-center space-y-4">
        <div className="flex items-center gap-2">
          <Mail className="w-6 h-6 text-gray-700" />
          <span className="text-xl font-medium">bhagatkrish65@gmail.com</span>
          <button 
            className="text-gray-500 hover:text-gray-700"
            onClick={() => handleCopy("bhagatkrish65@gmail.com", "email")}
          >
            <Copy className="w-5 h-5" />
          </button>
          {copied === "email" && <span className="text-green-500">Copied!</span>}
        </div>

        {/* Phone Section */}
        <div className="flex items-center gap-2">
          <Phone className="w-6 h-6 text-gray-700" />
          <span className="text-xl font-medium">+91 7067954499</span>
          <button 
            className="text-gray-500 hover:text-gray-700"
            onClick={() => handleCopy("+91 7067XXXX99", "phone")}
          >
            <Copy className="w-5 h-5" />
          </button>
          {copied === "phone" && <span className="text-green-500">Copied!</span>}
        </div>
        </div>
      </div>

      <p className="text-gray-600 mb-6">You may also find me on these platforms!</p>

      <div className="flex justify-center gap-6 mb-12">
        <a href="https://github.com/apniprogrammingyt09" className="text-gray-700 hover:text-gray-900">
          <Github className="w-6 h-6" />
        </a>
        <a href="https://x.com/Krish75313" className="text-gray-700 hover:text-gray-900">
          <Twitter className="w-6 h-6" />
        </a>
        <a href="https://www.linkedin.com/in/krish-bhagat-47512a289/" className="text-gray-700 hover:text-gray-900">
          <Linkedin className="w-6 h-6" />
        </a>
      </div>

      <p className="text-sm text-gray-500">© {new Date().getFullYear()} Krish Bhagat. All Rights Reserved.</p>
    </footer>
  )
}

