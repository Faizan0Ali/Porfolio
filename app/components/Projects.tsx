import React from 'react';

const projectsData = [
  {
    id: 1,
    title: 'MERA PHARMA | Medicine Delivery App',
    description: 'A medicine delivery platform with real-time tracking and vendor management.',
    link: 'https://play.google.com/store/apps/details?id=com.merapharma',
  },
  {
    id: 2,
    title: 'HATHME | Food Delivery and multi vendor app & admin panel',
    description: 'A full-fledged Food Delivery and multi vendor app with admin panel',
    link: 'https://play.google.com/store/apps/details?id=com.hathme.android&hl=en_IN',
  },

  {
    id: 3,
    title: 'E-commerce Platform',
    description: 'A full-fledged e-commerce solution',
    link: 'https://github.com/Faizan0Ali/Project-5_Ecommerce',
  },
  {
    id: 4,
    title: 'Portfolio Website',
    description: 'A personal portfolio showcasing my projects and skills.',
    link: 'https://github.com/your-portfolio',
  },
  {
    id: 5,
    title: 'Book Management',
    description: 'A Book Management backend handled app on Node.js',
    link: 'https://github.com/Faizan0Ali/project-3-Book-Management',
  },
  {
    id: 6,
    title: 'Url-Shortener',
    description: 'A Url-Shortener App like bitly',
    link: 'https://github.com/Faizan0Ali/Project-4_Url-Shortener',
  },
  {
    id: 7,
    title: 'College-Interns',
    description: 'A College-Interns App for both user and university',
    link: 'https://github.com/Faizan0Ali/Project-2-College-Interns',
  },
  {
    id: 8,
    title: 'BlogSite',
    description: 'A Blogsite Application with CRUD operations',
    link: 'https://github.com/Faizan0Ali/project-1-BlogSite',
  },
//   {
//     id: 5,
//     title: 'Task Management Tool',
//     description: 'A Kanban-style task management tool for project tracking and collaboration.',
//     link: 'https://github.com/your-task-manager',
//   },
];

const Projects = () => {
  return (
    <div className="bg-[#121212] pt-[4rem] md:pt-[6rem] pb-[5rem]">
      <h2 className="text-center text-yellow-400 text-[40px] mb-[4rem]">My <span className="text-white">Projects</span></h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[3rem] w-[85%] mx-auto">
        {projectsData.map((project) => (
          <div key={project.id} className="bg-[#1a1a1a] p-[2rem] rounded-lg shadow-lg hover:scale-105 transform transition duration-300 ease-in-out">
            <h3 className="text-[24px] text-yellow-400 mb-[1rem]">{project.title}</h3>
            <p className="text-[16px] text-gray-400 mb-[1.5rem]">{project.description}</p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-[16px] text-[#55e6a5] hover:text-[#aaffdd] font-semibold transition-colors duration-300"
            >
              View Project
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
