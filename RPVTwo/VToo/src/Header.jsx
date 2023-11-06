import React from 'react';

function Header() {
  return (
    <header className="bg-blue-500 text-white p-4">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-semibold">Your App Name</div>
          <nav>
            <ul className="flex space-x-4">
              <li><a href="/">Home</a></li>
              <li><a href="/about me">About me</a></li>
              <li><a href="/portfolio">Portfolio</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
