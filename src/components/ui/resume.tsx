"use client"

import React, { useState } from "react";


const Resume = () => {
    const [showResume, setShowResume] = useState(false);

    const handleViewResume = () => {
        setShowResume(true);
    };

    const handleCloseModal = () => {
        setShowResume(false); 
    };

    return (
        <div className="flex justify-center items-center mt-12">
            <button 
                className="flex text-center px-6 py-3 rounded-lg justify-center text-base bg-blue-500 text-white font-semibold shadow-md hover:shadow-xl hover:bg-blue-600 hover:shadow-slate-300 transition-shadow duration-300"
                type="button"
                onClick={() => setShowResume(true)} 
            >
                View my resume
            </button>
            {showResume && (
                <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center"
                onClick={() => setShowResume(false)}>
                    {/*Modal*/}
                    <div className="p-4 rounded-xl w-4/5 md:w-1/2 relative hover:scrollbar-visible overflow-y-auto h-screen"
                    onClick={(e) => e.stopPropagation()}>
                        <iframe
                            src="/resume.pdf#toolbar=0"
                            width="100%"
                            height="100%"
                            title="Resume"
                            className="w-full h-full"
                            >
                        </iframe>
                    </div>
                    <a 
                    href="/Tomin_Jessil_Resume.pdf" 
                    download
                    className="absolute top-3 right-3 font-semibold bg-blue-500 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-blue-600 transition-all"
                    >
                    Download
                </a>
                </div>

            )}
        </div>
    );
}

export default Resume;
