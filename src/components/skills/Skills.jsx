import React from 'react';
import './skills.scss';

const Skills = () => {
  const skills = [
    {
      title: 'Frontend',
      skills: [
        { name: 'React JS', image: '/JS (3).png' },
        { name: 'JavaScript', image: '/JS (1).png' },
        { name: 'HTML', image: '/html.webp' },
        { name: 'CSS', image: '/CSS.webp' },
        { name: 'Framer Motion', image: '/franer.jpeg' },
        { name: 'Redux', image: '/rdx.png' },
        { name: 'SCSS', image: '/scss.png' },
        { name: 'BootStrap', image: '/bootstrap.jpeg' },
        { name: 'TaiwindCSS', image: '/tailwing.jpeg' },
        { name: 'GSAP', image: '/gsap.jpeg' },
      ],
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Node JS', image: '/node.png' },
        { name: 'Express', image: '/ex.png' },
        { name: 'EJS', image: '/ejs.png' },
        { name: 'MongoDB', image: '/mdb.webp' },
        { name: 'Mongoose', image: '/mong.png' },
        { name: 'REST', image: '/rest.png' },
      ],
    },
    {
      title: 'DevOps',
      skills: [
        { name: 'RedHat', image: '/redhat.png' },
        { name: 'AWS', image: '/aws.png' },
        { name: 'Ansible', image: '/ansible.png' },
      ],
    },
  ];

  return (
    <div id="skills">
      <div className="wrapper">
        <div className="title">Skills</div>
        <div className="desc">Here are some of my skills</div>
        <div className="skills-container">
          {skills.map((skill, index) => (
            <div className="skill" key={index}>
              <h2 className="skill-title">{skill.title}</h2>
              <div className="skill-list">
                {skill.skills.map((item, idx) => (
                  <div className="skill-item" key={idx}>
                    <img src={item.image} alt={item.name} className="skill-image" />
                    {item.name}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
