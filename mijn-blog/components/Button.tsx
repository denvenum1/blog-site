"use client";

interface FancyButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export default function FancyButton({ children, className = "", ...props }: FancyButtonProps) {
  return (
    <button
      className={`relative flex items-center px-6 py-3 overflow-hidden font-medium transition-all bg-[var(--primary-color)] rounded-md group ${className}`}
      {...props}
    >
      {/* Hoekdecoratie rechtsboven */}
      <span className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-[color:var(--primary-color)] rounded group-hover:-mr-4 group-hover:-mt-4">
        <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
      </span>

      {/* Hoekdecoratie linksonder */}
      <span className="absolute bottom-0 rotate-180 left-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-[color:var(--primary-color)] rounded group-hover:-ml-4 group-hover:-mb-4">
        <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
      </span>

      {/* Achtergrondslide bij hover */}
      <span className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full bg-cyan-200 rounded-md group-hover:translate-x-0"></span>

      {/* Tekst */}
      <span className="relative w-full text-left text-gray-800 transition-colors duration-200 ease-in-out group-hover:text-white">
        {children}
      </span>
    </button>
  );
}
