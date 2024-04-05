import React from "react";

export default function Task({task}) {

    return (
        <div>
            <div>
                <h3>{task.title}</h3>
                <h5>{task.description}</h5>
            </div>
        </div>
    );
}