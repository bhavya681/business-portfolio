import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: 'Rajpura Project',
      description: '3 x 700 MW Units at Rajpura Thermal Power Project with L & T Power for the erection of ESP and Auxiliaries.',
      imgUrl: 'https://shivamenergytech.com/images/Project_1.JPG',
    },
    {
      title: 'Singrauli Project',
      description: '3 x 660 MW Units at Sasan Ultra Mega Power Project, Sasan (Reliance), Singrauli (M.P) with IOT Engineering Projects Ltd. for the erection of ESP, Duct Support Structures & Ducting, Mills, Fans, Coal Pipes, Feeders, Insulations & Auxiliaries Pipe Systems.',
      imgUrl: 'https://shivamenergytech.com/images/Project_2.JPG',
    },
    {
      title: 'Singrauli Project',
      description: '3 x 660 MW Units at Sasan Ultra Mega Power Project, Sasan (Reliance) Singrauli (M.P.) with Power Mech Projects Ltd. for Erection, Alignment, Testing & commissioning of Ducting from ESP Outlet to ID Fan to Chimney alongwith Support Structures in Unit # 4.',
      imgUrl: 'https://shivamenergytech.com/images/Project_3.JPG',
    },
  ];

  return (
    <>
      <header>
        {/* Header content */}
      </header>

      <div className="page-title bg-orange-500  py-4">
        <div className="container mx-auto px-4">
       
        <div className="container mx-auto">
          <h1 className="text-3xl text-center text-white font-bold"> Projects</h1>
        
      </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col sm:flex-row sm:flex-wrap mx-4">
          {projects.map((project, index) => (
            <div key={index} className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8 ">
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="image-post">
                  <img className="w-full h-50 object-cover" src={project.imgUrl} alt={project.title} />
                </div>
                <div className="p-6">
                  <h2 className="text-xl font-bold mb-2">{project.title}</h2>
                  <p className="text-gray-700">{project.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

   
    </>
  );
};

export default Projects;
