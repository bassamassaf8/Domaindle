import React from "react";
import Link from "next/link";

const Card = ({
  href,
  title,
  text,
}: {
  href: string;
  title: string;
  text?: string;
}) => {
  return (
    <div className="mr-4 mb-8 relative">
      <div className="opacity-60 min-w-xs max-w-m max-h-xs p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <Link href={href}>
          <h5 className="opacity-100 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {title}
          </h5>
        </Link>
        <p className="pt-2 pb-6 font-normal text-gray-700 dark:text-gray-400 ">
          {text}
        </p>
        <div className="group relative">
          <div className="absolute inset-0.5 bg-black rounded-lg blur opacity-75 z-0"></div>
          <div className="absolute inset-1.5 z-10 flex items-center justify-center">
            <span className="text-white"></span>
            <Link
              href={href}
              className="inline-flex items-center px-12 pb-2 py-2 ml-2 text-sm font-medium text-white bg-gradient-to-r from-sky-600 to-purple-600 rounded-lg opacity-60 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"
            >
            Go
              <svg
              
                className="w-3.5 h-3.5 ml-2"
                
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
