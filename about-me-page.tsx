import Image from "next/image"

export default function AboutMe() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="text-5xl font-bold text-center mb-16">
        About Me{" "}
        <span role="img" aria-label="rocket">
          🚀
        </span>
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        <div className="relative">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-27%20at%2012.18.21%E2%80%AFAM-SXwJ61leCJbwfu6UT4oGCXAzybznSl.png"
            alt="Computer vision demo showing object detection on a workspace with laptop"
            width={600}
            height={400}
            className="rounded-lg w-full"
          />
          <div className="mt-8 flex justify-center">
            <button className="bg-gray-900 text-white px-8 py-3 rounded-full font-medium hover:bg-gray-800 transition-colors">
              Try Now
            </button>
          </div>
        </div>

        <div className="space-y-6">
          <h2 className="text-3xl font-bold">Curious about me? Here you have it:</h2>

          <p className="text-gray-700">
            I'm Krish Bhagat, a passionate AI/ML developer, full-stack web enthusiast, and co-founder of KodRish
            Innovation & Solution LLP. I specialize in deep learning, FastAPI, and full-stack development, actively
            working on projects like Vaani Sahayak (Indian Sign Language Translator), InternSahayak, and several other
            AI-driven innovations. My goal is to bridge the gap between technology and real-world problems, making
            impactful solutions that drive change.
          </p>

          <p className="text-gray-700">
            As a developer, I have hands-on experience in Python, FastAPI, TensorFlow, React, Next.js, and Node.js,
            enabling me to build end-to-end AI and web-based solutions. Apart from AI/ML, I have a keen interest in
            frontend and backend development, making me a well-rounded tech enthusiast. At KodRish, I focus on project
            development, AI research, and mentoring students in building innovative solutions.
          </p>

          <p className="text-gray-700">
            I am very much a progressive thinker and enjoy working on products end to end, from ideation all the way to
            development.
          </p>

          <p className="text-gray-700 font-medium">Finally, some quick bits about me.</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>B.E. in Computer Engineering (Data Science)</li>
              <li>Avid learner</li>
            </ul>

            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>Founder Kodrish Innovation & Solutions</li>
              <li>Passionate about deep learning & NLP</li>
            </ul>
          </div>

          <p className="text-gray-700">
            One last thing, I'm available for freelance work, so feel free to reach out and say hello! I promise I don't
            bite{" "}
            <span role="img" aria-label="smile">
              😊
            </span>
          </p>
        </div>
      </div>
    </div>
  )
}

