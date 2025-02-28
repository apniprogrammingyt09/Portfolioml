import Image from "next/image"

export default function Skills() {
  const skills = [
    { name: "Python", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1869px-Python-logo-notext.svg.png" },
    { name: "Pandas", icon: "https://seeklogo.com/images/P/pandas-icon-logo-BE10401BF1-seeklogo.com.png" },
    { name: "Fast APi", icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn_3MFhCzXcwI3GWIDTsWJg2HXDTG7TwGovA&s" },
    { name: "TensorFlow", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Tensorflow_logo.svg/1200px-Tensorflow_logo.svg.png" },
    { name: "Keras", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Keras_logo.svg/2048px-Keras_logo.svg.png" },
    { name: "PyTorch", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/PyTorch_logo_icon.svg/1200px-PyTorch_logo_icon.svg.png" },
    { name: "Scikit-Learn", icon: "https://image.spreadshirtmedia.com/image-server/v1/products/T1459A839PA3861PT28D1047062111W10000H5386/views/1,width=500,height=500,appearanceId=839,backgroundColor=ffffff/scikit-learn-logo-sticker.jpg" },
    { name: "Hugging Face", icon: "https://cdn.worldvectorlogo.com/logos/huggingface-2.svg" },
    { name: "PostgreSQL", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/1200px-Postgresql_elephant.svg.png" },
    { name: "MongoDB", icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSITHn_TgjDyhdWvePNw0mveDrTUr00GLfv_Q&s" },
    { name: "V0.dev", icon: "https://registry.npmmirror.com/@lobehub/icons-static-png/latest/files/light/v0.png" },
    { name: "Canva", icon: "https://static-cse.canva.com/blob/1148850/image2.png" },
    { name: "Figma", icon: "https://cdn.sanity.io/images/599r6htc/regionalized/5094051dac77593d0f0978bdcbabaf79e5bb855c-1080x1080.png?w=540&h=540&q=75&fit=max&auto=format" },
    { name: "Postman", icon: "https://www.cdnlogo.com/logos/p/20/postman.svg" },
    { name: "Vercel", icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFggf9yNRN9xCYku8XMEkSE0LU9uMhkYbehQ&s" },
    { name: "Git", icon: "https://avatars.githubusercontent.com/u/18133?s=280&v=4" },
  ]

  return (
    <section className="py-20 px-4 max-w-7xl mx-auto bg-gray-50" id="skills">
      <div className="text-center mb-16">
        <h2 className="text-5xl font-bold mb-4">Skills</h2>
        <p className="text-xl text-gray-600">The skills, tools and technologies I am really good at:</p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-8">
        {skills.map((skill, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="w-16 h-16 mb-2">
              <Image
                src={skill.icon || "/placeholder.svg"}
                alt={skill.name}
                width={60}
                height={60}
                className="object-contain"
              />
            </div>
            <span className="text-sm text-center">{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

