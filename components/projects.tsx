import Image from "next/image"
import { ExternalLink } from "lucide-react"

export default function Projects() {
  return (
    <section className="py-20 px-4 max-w-7xl mx-auto bg-gray-50" id="projects">
      <div className="text-center mb-16">
        <h2 className="text-5xl font-bold mb-4">Projects</h2>
        <p className="text-xl text-gray-600">Some of the noteworthy projects I have built:</p>
      </div>

      <div className="space-y-16">
        {/* Project 1 */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
            <div>
              <Image
                src="/project.png"
                alt="Mental Health Tracker"
                width={500}
                height={300}
                className="rounded-lg w-full"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">Mental Health Tracker (By QLearning)</h3>
              <p className="text-gray-700 mb-6">
                Holistic Mental Health Tracker is an AI-powered platform designed to monitor, manage, and improve mental
                well-being through personalized insights and support. It provides users with daily mood tracking,
                symptom analysis, stress management techniques, and a supportive community to enhance emotional
                resilience.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="bg-gray-200 px-3 py-1 rounded-full text-sm">React</span>
                <span className="bg-gray-200 px-3 py-1 rounded-full text-sm">Next.js</span>
                <span className="bg-gray-200 px-3 py-1 rounded-full text-sm">Typescript</span>
                <span className="bg-gray-200 px-3 py-1 rounded-full text-sm">Fast API</span>
                <span className="bg-gray-200 px-3 py-1 rounded-full text-sm">MongoDB</span>
                <span className="bg-gray-200 px-3 py-1 rounded-full text-sm">Tailwindcss</span>
                <span className="bg-gray-200 px-3 py-1 rounded-full text-sm">QLearning</span>
                <span className="bg-gray-200 px-3 py-1 rounded-full text-sm">Render</span>
                <span className="bg-gray-200 px-3 py-1 rounded-full text-sm">Vercel</span>
                <span className="bg-gray-200 px-3 py-1 rounded-full text-sm">Git</span>
              </div>
              <div>
                <a href="https://fastapi-health-app.onrender.com" className="inline-flex items-center text-gray-900 font-medium">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  View Project
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Project 2 */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Vaani Sahayak 2.0</h3>
              <p className="text-gray-700 mb-6">
                Vaani Sahayak 2.0 is the next-generation Indian Sign Language (ISL) translator, designed to provide
                real-time translation, sentence formation, and intelligent word suggestions using AI and Deep Learning.
                This enhanced version builds on the foundation of Vaani Sahayak, with improved accuracy, multilingual
                support, and a seamless web interface.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="bg-gray-200 px-3 py-1 rounded-full text-sm">React</span>
                <span className="bg-gray-200 px-3 py-1 rounded-full text-sm">Next.js</span>
                <span className="bg-gray-200 px-3 py-1 rounded-full text-sm">Typescript</span>
                <span className="bg-gray-200 px-3 py-1 rounded-full text-sm">Next.js</span>
                <span className="bg-gray-200 px-3 py-1 rounded-full text-sm">FastAPI</span>
                <span className="bg-gray-200 px-3 py-1 rounded-full text-sm">OpenCV</span>
                <span className="bg-gray-200 px-3 py-1 rounded-full text-sm">TensorFlow</span>
                <span className="bg-gray-200 px-3 py-1 rounded-full text-sm">Yolov12s</span>
                <span className="bg-gray-200 px-3 py-1 rounded-full text-sm">Mediapipe</span>
                <span className="bg-gray-200 px-3 py-1 rounded-full text-sm">Transformers</span>
              </div>
              <div>
                <a href="https://universe.roboflow.com/indian-sign-languge/vaani-sahayak/model/2" className="inline-flex items-center text-gray-900 font-medium">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  View Project
                </a>
              </div>
            </div>
            <div>
              <Image
                src="/project2.png"
                alt="Vaani Sahayak 2.0"
                width={500}
                height={300}
                className="rounded-lg w-full"
              />
            </div>
          </div>
        </div>

        {/* Project 3 */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
            <div>
              <Image
                src="/project1.png"
                alt="Object Detection & Counting System"
                width={500}
                height={300}
                className="rounded-lg w-full"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">Object Detection & Counting System</h3>
              <p className="text-gray-700 mb-6">
                The Object Detection & Counting System is an AI-powered solution designed to detect, classify, and count
                objects in real-time using Computer Vision and Deep Learning. Whether it's for retail inventory
                management, traffic monitoring, industrial automation, or smart surveillance, this system ensures
                accurate and efficient object tracking.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="bg-gray-200 px-3 py-1 rounded-full text-sm">React</span>
                <span className="bg-gray-200 px-3 py-1 rounded-full text-sm">Next.js</span>
                <span className="bg-gray-200 px-3 py-1 rounded-full text-sm">Typescript</span>
                <span className="bg-gray-200 px-3 py-1 rounded-full text-sm">Next.js</span>
                <span className="bg-gray-200 px-3 py-1 rounded-full text-sm">FastAPI</span>
                <span className="bg-gray-200 px-3 py-1 rounded-full text-sm">OpenCV</span>
                <span className="bg-gray-200 px-3 py-1 rounded-full text-sm">TensorFlow</span>
                <span className="bg-gray-200 px-3 py-1 rounded-full text-sm">Yolov12s</span>
                <span className="bg-gray-200 px-3 py-1 rounded-full text-sm">Mediapipe</span>
                <span className="bg-gray-200 px-3 py-1 rounded-full text-sm">Transformers</span>
              </div>
              <div>
                <a href="https://object-hy5d.vercel.app" className="inline-flex items-center text-gray-900 font-medium">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  View Project
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

