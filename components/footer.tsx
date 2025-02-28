import { Mail, Phone, Github, Twitter, Linkedin, Copy } from "lucide-react"

export default function Footer() {
  return (
    <footer className="py-20 px-4 max-w-7xl mx-auto text-center" id="contact">
      <div className="max-w-2xl mx-auto mb-16">
        <p className="text-xl text-gray-700 mb-8">
          What's next? Feel free to reach out to me if you're looking for a developer, have a query, or simply want to
          connect.
        </p>

        <div className="space-y-4">
          <div className="flex items-center justify-center gap-2">
            <Mail className="w-6 h-6 text-gray-700" />
            <span className="text-xl font-medium">bhagatkrish65@gmail.com</span>
            <button className="text-gray-500 hover:text-gray-700">
              <Copy className="w-5 h-5" />
            </button>
          </div>

          <div className="flex items-center justify-center gap-2">
            <Phone className="w-6 h-6 text-gray-700" />
            <span className="text-xl font-medium">+91 7067954499</span>
            <button className="text-gray-500 hover:text-gray-700">
              <Copy className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      <p className="text-gray-600 mb-6">You may also find me on these platforms!</p>

      <div className="flex justify-center gap-6 mb-12">
        <a href="#" className="text-gray-700 hover:text-gray-900">
          <Github className="w-6 h-6" />
        </a>
        <a href="#" className="text-gray-700 hover:text-gray-900">
          <Twitter className="w-6 h-6" />
        </a>
        <a href="#" className="text-gray-700 hover:text-gray-900">
          <Linkedin className="w-6 h-6" />
        </a>
      </div>

      <p className="text-sm text-gray-500">© {new Date().getFullYear()} Krish Bhagat. All Rights Reserved.</p>
    </footer>
  )
}

