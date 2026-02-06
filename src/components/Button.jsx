import React from "react";

function Button({ children, ...props }) {
    return (
        <button
            className="
        bg-black text-white px-4 py-2 rounded-md
        border-2 border-transparent
        hover:bg-white hover:text-black hover:border-black
        transition-colors duration-300
      "
            {...props}
        >
            {children}
        </button>
    );
}

export default Button;