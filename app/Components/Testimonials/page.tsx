'use client'
import React from "react";
export default function Example() {
    return (
        <>
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
            
                * {
                    font-family: 'Poppins', sans-serif;
                }
            `}</style>
            <div className="bg-[#0C0414] text-white mt-15">
                <h1 className="text-3xl font-semibold text-center mx-auto">Our Latest Creations</h1>
                <p className="text-sm text-slate-500 text-center mt-2 max-w-lg mx-auto">A visual collection of our most recent works -
                    each piece crafted with intention, emotion, and style.</p>

                <div className="flex items-center gap-6 h-[400px] w-full max-w-5xl mt-10 mx-auto">
                    <div className="relative group flex-grow transition-all w-56 h-[400px] duration-500 hover:w-full">
                        <img className="h-full w-full object-cover object-center"
                            src="PortOne.jpeg"
                        
                            alt="image" />
                        <div
                            className="absolute inset-0 flex flex-col justify-end p-10 text-white bg-black/50 opacity-0 group-hover:opacity-100 transition-all duration-300">
                            <h1 className="text-3xl">Full Stack Developer</h1>
                            <p className="text-sm">"Pro Folio X made creating my portfolio incredibly simple. The templates are clean, modern, and helped me showcase my work professionally in minutes."</p>

                        </div>
                    </div>
                    <div className="relative group flex-grow transition-all w-56 h-[400px] duration-500 hover:w-full">
                        <img className="h-full w-full object-cover object-right"
                            src="PortTwo.jpeg"
                            
                            alt="image" />
                        <div
                            className="absolute inset-0 flex flex-col justify-end p-10 text-white bg-black/50 opacity-0 group-hover:opacity-100 transition-all duration-300">
                            <h1 className="text-3xl">Data scientists</h1>
                            <p className="text-sm">"I struggled to organize my projects before, but Pro Folio X made everything effortless. Now my portfolio looks polished and recruiter-ready."</p>

                        </div>
                    </div>
                    <div className="relative group flex-grow transition-all w-56 h-[400px] duration-500 hover:w-full">
                        <img className="h-full w-full object-cover object-center"
                            src="PortThree.jpeg"
                            
                            alt="image" />
                        <div
                            className="absolute inset-0 flex flex-col justify-end p-10 text-white bg-black/50 opacity-0 group-hover:opacity-100 transition-all duration-300">
                            <h1 className="text-3xl">Software Engineer</h1>
                            <p className="text-sm">"An amazing tool for developers and designers! Pro Folio X helped me build a stunning portfolio that truly represents my skills."</p>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};