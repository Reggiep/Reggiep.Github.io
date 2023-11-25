import React from 'react';

function Header() {
  return (
  
    <header className="bg-blue-500 text-white p-4 w-full" >
      <div className="container mx-auto">
        <div className="flex items-center justify-between ">
          <div className="text-2xl font-semibold px-5">Reggie Pollock, Electrical & Software Engineer</div>
          <nav>
            <ul className="flex space-x-4">
            <a href="/"><li className="p-5 rounded-md border-white border-2 hover:border-black">Home</li></a>
              <li className="p-5 rounded-md border-white border-2 hover:border-black"><a href="/portfolio">Projects</a></li>
              <li className="p-5 rounded-md border-white border-2 hover:border-black"><a href="/resume">Resume</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>

  );
}

export default Header;
