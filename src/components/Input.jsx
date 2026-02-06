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
        <div className="group flex flex-col gap-2">
            <AnimatedLabel text={label} />

            <input
                type={type}
                placeholder={placeholder}
                className="
          w-full rounded-md
          border-2 border-black
          bg-white px-4 py-2 text-black
          placeholder:text-gray-400

          focus:outline-none focus:bg-gray-100
          transition-shadow duration-300

          hover:shadow-[0_0_16px_4px_rgba(0,0,0,0.6)]
          focus:shadow-[0_0_22px_6px_rgba(0,0,0,0.75)]



        "
                {...props}
            />
        </div>
    );
}

export default Input;
