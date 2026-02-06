import React from "react";
import noProjectsSelected from "../assets/no-projects.png";
import Button from "./Button";

function StartingMenu({ setCreatingProjectState }) {
    return (
        <div className="flex flex-col w-full h-full bg-white md:w-3/4 md:h-full items-center justify-center">
            <div className="
    flex flex-col items-center justify-center gap-6
    md:w-[60%] md:h-[60%]
    bg-white text-black
    rounded-xl
    p-8
  ">
                <img
                    width={100}
                    height={100}
                    src={noProjectsSelected}
                    alt="No Projects Selected"
                    className="opacity-80"
                />

                <h1 className="text-2xl md:text-3xl font-bold tracking-tight">
                    No Projects Selected
                </h1>

                <p className="text-sm md:text-base text-gray-600 text-center max-w-md">
                    Select a project to get started
                </p>

                <Button onClick={() => setCreatingProjectState(true)}>
                    + Add Project
                </Button>
            </div>
        </div >

    );
}

export default StartingMenu;