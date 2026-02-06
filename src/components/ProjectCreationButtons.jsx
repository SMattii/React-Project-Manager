import Button from "./Button";
import React from "react";

function ProjectCreationButtons({ handleSubmit, handleCancel }) {
    return (
        <div className="flex w-full justify-end gap-2 flex-wrap">
            <Button onClick={handleSubmit}>Save</Button>
            <Button onClick={handleCancel}>Cancel</Button>
        </div>
    );
}

export default ProjectCreationButtons;