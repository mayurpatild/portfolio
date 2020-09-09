import React from "react";
import "./Education.css";
import ExperienceCard from "../../components/experienceCard/ExperienceCard";
import { education } from "../../portfolio";
import { Fade } from "react-reveal";


export default function education() {
    if(education.viewExperiences){
        return (
            <div id="experience">
                <Fade bottom duration={1000} distance="20px">
                <div className="experience-container" id="workExperience">
                    <div>
                        <h1 className="experience-heading">Experiences</h1>
                        <div className="experience-cards-div">
                        {education.experience.map((card) => {
                            return (
                                <ExperienceCard
                                    cardInfo={{
                                        company: card.company,
                                        desc: card.desc,
                                        date: card.date,
                                        companylogo: card.companylogo,
                                        role: card.role,
                                        descBullets: card.descBullets
                                    }}
                                />
                            );
                        })}
                        </div>
                    </div>
                </div>
                </Fade>
            </div>
        );
    }
    return null;
}
