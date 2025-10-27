import React from 'react'

const SkillsSection = () => {
  const skills = [
    { name: "React", level: "Advanced" },
    { name: "JavaScript", level: "Advanced" },
    { name: "Tailwind CSS", level: "Intermediate" },
    { name: "Node.js", level: "Intermediate" },
    { name: "Git", level: "Advanced" },
    { name: "Python", level: "Beginner" },
    { name: "Devops", level: "advance" },
    { name: "Aws", level: "Beginner" },
    { name: "jenkins", level: "Advanced" },
  ]

  return (
    <section id="skills" className='py-24 px-24 relative'>
      <div className="container mx-auto max-w-5xl">
        <h2 className='text-3xl md:text-4xl font-bold mb-12 text-center'>
          My <span className='text-[#15d1e9]'>skills</span>
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, key) => (
            <div key={key} className='bg-card p-5 rounded-lg shadow-md hover:shadow-lg transition'>
              <h3 className='text-xl font-semibold'>{skill.name}</h3>
              <p className='text-gray-500'>{skill.level}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SkillsSection
 