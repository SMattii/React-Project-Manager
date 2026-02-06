import React from "react";
import "../index.css";

function AnimatedLabel({ text }) {
    return (
        <label className="inline-flex cursor-text select-none">
            {text.split("").map((char, i) => (
                <span
                    key={i}
                    className="label-char"
                    style={{ animationDelay: `${i * 0.03}s` }}
                >
                    {char === " " ? "\u00A0" : char}
                </span>
            ))}
        </label>
    );
}


function Input({ label = "Label", placeholder = "Placeholder", type = "text", ...props }) {
    return (
        <div className="flex flex-col gap-2 group">
            <AnimatedLabel text={label} />

            <input
                type={type}
                placeholder="Enter project name"
                className="
      w-full px-4 py-2
      bg-white text-black
      border-2 border-black rounded-md
      placeholder:text-gray-400
      focus:outline-none focus:bg-gray-100
      transition-shadow duration-200
      hover:shadow-[0_0_0_3px_black]
      focus:shadow-[0_0_0_3px_black]
    "
                {...props}
            />
        </div>


    );
}

export default Input;
