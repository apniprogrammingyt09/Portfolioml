"use client"
export default function Testimonials() {
  return (
    <section className="py-20 px-4 max-w-7xl mx-auto" id="testimonials">
      <div className="text-center mb-16">
        <h2 className="text-5xl font-bold mb-4">Testimonials</h2>
        <p className="text-xl text-gray-600">Nice things people have said about me:</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Testimonial 1 */}
        <div className="bg-white p-8 rounded-lg shadow-sm">
          <p className="text-gray-700 mb-6">
            "Job well done! I am really impressed. He is very very good at what he does! I would recommend Sagar and
            will rehire in the future for Frontend development."
          </p>
          <div className="flex items-center">
            <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
            <div>
              <h4 className="font-bold">John Doe</h4>
              <p className="text-sm text-gray-600">Founder - xyz.com</p>
            </div>
          </div>
        </div>

        {/* Testimonial 2 */}
        <div className="bg-white p-8 rounded-lg shadow-sm">
          <p className="text-gray-700 mb-6">
            "Great guy, highly recommended for any COMPLEX front-end development job! His skills are top-notch and he
            will be an amazing addition to any team."
          </p>
          <div className="flex items-center">
            <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
            <div>
              <h4 className="font-bold">John Doe</h4>
              <p className="text-sm text-gray-600">Founder - abc.com</p>
            </div>
          </div>
        </div>

        {/* Testimonial 3 */}
        <div className="bg-white p-8 rounded-lg shadow-sm">
          <p className="text-gray-700 mb-6">
            "Sagar was extremely easy and pleasant to work with and he truly cares about the project being a success.
            Sagar has a high level of knowledge and was able to work on my MERN stack application without any issues."
          </p>
          <div className="flex items-center">
            <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
            <div>
              <h4 className="font-bold">John Doe</h4>
              <p className="text-sm text-gray-600">Freelancer</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-16 text-center">
        <button
          className="bg-gray-200 text-gray-800 px-6 py-2 rounded-full font-medium hover:bg-gray-300 transition-colors"
          onClick={() => window.location.href = "mailto:bhagatkrish65@gmail.com"}
        >
          Get in touch
        </button>
      </div>
    </section>
  )
}

