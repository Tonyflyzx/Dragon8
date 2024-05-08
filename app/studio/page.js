import React from "react";
import "./studio.css";

const page = () => {
    return (
        <div className="container">
            <p>Films </p>
            <div className="projects">
                <div className="project" id="header">
                    <div className="client">
                        <p className="">Project</p>
                    </div>
                    <div className="location">
                        <p>Location</p>
                    </div>
                    <div className="service">
                        <p>Service</p>
                    </div>
                    <div className="year">
                        <p>Year</p>
                    </div>
                </div>
                <div className="project" id="p1">
                    <div className="client">
                        <p>Pit Walks</p>
                    </div>
                    <div className="location">
                        <p>New York City</p>
                    </div>
                    <div className="service">
                        <p>Videography</p>
                    </div>
                    <div className="year">
                        <p>2023</p>
                    </div>
                </div>
                <div className="project" id="p2">
                    <div className="client">
                        <p>Project 2</p>
                    </div>
                    <div className="location">
                        <p>Location 2</p>
                    </div>
                    <div className="service">
                        <p>Service 2</p>
                    </div>
                    <div className="year">
                        <p>Year 2</p>
                    </div>
                </div>
                <div className="project" id="p3">
                    <div className="client">
                        <p>Project 3</p>
                    </div>
                    <div className="location">
                        <p>Location 3</p>
                    </div>
                    <div className="service">
                        <p>Service 3</p>
                    </div>
                    <div className="year">
                        <p>Year 3</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default page;