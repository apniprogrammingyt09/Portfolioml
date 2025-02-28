import Image from "next/image"

export default function Experience() {
  return (
    <section className="py-20 px-4 max-w-7xl mx-auto" id="experience">
      <h2 className="text-5xl font-bold text-center mb-16">Experience</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12 relative">
      <div className="space-y-12">
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <h3 className="text-2xl font-bold mb-4">AI/ML Engineer & Full-Stack Developer</h3>
            <ul className="list-disc pl-5 space-y-3 text-gray-700">
              <li>Developed AI models using <strong>TensorFlow, Keras, and PyTorch</strong>.</li>
              <li>Worked on <strong>NLP & Computer Vision with Hugging Face & OpenCV</strong>.</li>
              <li>Built <strong>Vaani Sahayak</strong>, an Indian Sign Language Translator.</li>
              <li>Created a custom dataset for <strong>sign language recognition</strong>.</li>
            </ul>
          </div>

          {/* Founder - KodRish Innovation & Solution LLP */}
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <h3 className="text-2xl font-bold mb-4">Founder - KodRish Innovation & Solution LLP</h3>
            <ul className="list-disc pl-5 space-y-3 text-gray-700">
              <li>Provides <strong>Web Development, AI solutions, and project development</strong> services.</li>
              <li>Developed <strong>InternSahayak</strong>, an internship management system.</li>
              <li>Manages real-time project dashboards using <strong>Next.js & Node.js</strong>.</li>
              <li>Deployed and managed projects on <strong>Vercel & PostgreSQL</strong>.</li>
            </ul>
          </div>
        </div>
        <div className="space-y-12">

          {/* Hackathon & AI Projects */}
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <h3 className="text-2xl font-bold mb-4">Hackathon & AI Projects</h3>
            <ul className="list-disc pl-5 space-y-3 text-gray-700">
              <li>Built a <strong>Holistic Mental Health Tracker Platform</strong>.</li>
              <li>Worked on <strong>Voice Synthesis & AI-Driven Music Generation</strong>.</li>
              <li>Developed AI-generated <strong>nebula images from text inputs</strong>.</li>
              <li>Implemented transformers for <strong>real-time word suggestions</strong>.</li>
            </ul>
          </div>

          {/* UI/UX & Creative Work */}
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <h3 className="text-2xl font-bold mb-4">UI/UX & Creative Work</h3>
            <ul className="list-disc pl-5 space-y-3 text-gray-700">
              <li>Designed UI/UX using <strong>Figma & Canva</strong>.</li>
              <li>Built <strong>modern, responsive landing pages</strong>.</li>
              <li>Focused on <strong>frontend performance optimization & accessibility</strong>.</li>
              <li>Created <strong>design systems & reusable UI components</strong>.</li>
              <li>Enhanced user engagement with <strong>interactive & animated elements</strong>.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

