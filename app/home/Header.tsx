"use client"
import React from "react";
import Link from "next/link";
import Image from "next/image";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  return (
    <header className="flex flex-wrap justify-between items-center px-8 py-6 bg-white">
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
      <div className="w-full mt-12 flex flex-wrap justify-between items-center">
        <div className="w-full md:w-1/2 pr-8">
          <h1 className="text-6xl font-bold text-orange-500 mb-4">Zohaib</h1>
          <h2 className="text-3xl text-black mb-4">Full Stack Developer</h2>
          <p className="text-xl text-zinc-700">
            Passionate about AI, Web3, and the Metaverse, creating digital
            solutions that blend creativity with technology. Currently, I
            contribute to the Governor&apos;s IT Initiative, shaping the future of
            tech.
          </p>
        </div>
        <div className="w-full md:w-1/2 mt-8 md:mt-0">
          <Image
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/17bb8964ed9c5275484ca1af0285562fd8bae0bf4fae4a42d4c4ffac717d154c?placeholderIfAbsent=true&apiKey=4ac13593b70540019f4117ad092ab070"
            alt="Developer illustration"
            width={500}
            height={360}
            className="w-full h-auto object-cover rounded-lg"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;