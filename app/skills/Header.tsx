import React from "react";
import Link from "next/link";
import Image from "next/image";

const Header: React.FC = () => {
  return (
    <header className="flex justify-between items-center py-6 bg-white">
      <div className="flex items-center">
        <Image
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/3443032b11a5d052b4e65864fa8a87bfa6565ea291e9faf518b8328ba388a8a2?placeholderIfAbsent=true&apiKey=4ac13593b70540019f4117ad092ab070"
          alt="Logo"
          width={80}
          height={80}
          className="rounded-full"
        />
        <nav className="ml-8">
          <ul className="flex space-x-6">
            <li className="relative">
              <Link href="/" className="text-lg font-medium text-gray-700 hover:text-blue-600 transition-colors duration-300 after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-blue-600 after:bottom-0 after:left-0 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300">Home</Link>
            </li>
            <li className="relative">
              <Link href="/about" className="text-lg font-medium text-gray-700 hover:text-blue-600 transition-colors duration-300 after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-blue-600 after:bottom-0 after:left-0 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300">About me</Link>
            </li>
            <li className="relative">
              <Link href="#projects" className="text-lg font-medium text-gray-700 hover:text-blue-600 transition-colors duration-300 after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-blue-600 after:bottom-0 after:left-0 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300">Projects</Link>
            </li>
            <li className="relative">
              <Link href="/skills" className="text-lg font-medium text-gray-700 hover:text-blue-600 transition-colors duration-300 after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-blue-600 after:bottom-0 after:left-0 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300">Skills</Link>
            </li>
          </ul>
        </nav>
      </div>
      <Link href="#contact" className="px-6 py-2 text-lg font-semibold text-white bg-cyan-600 rounded-lg hover:bg-cyan-700 transition-colors">
        Contact
      </Link>
    </header>
  );
};

export default Header;