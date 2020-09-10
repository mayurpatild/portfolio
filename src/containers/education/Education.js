import React from "react";
import "./Education.css";
import EducationCard from "../../components/educationCard/EducationCard";
import { education } from "../../portfolio";
import { Fade } from "react-reveal";


export default function Education() {
    if(education.viewEducations){
        return (
            <div id="education">
                <Fade bottom duration={1000} distance="20px">
                <div className="education-container" id="educationExp">
                    <div>
                        <h1 className="education-heading">Education</h1>
                        <div className="education-cards-div">
                        {education.education.map((card) => {
                            return (
                                <EducationCard
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
