import React from 'react';
import Progressbar from './InnerSection/Progressbar';

const SkillSection = () => {
    return (
        <div id='skills'>
            <h2 className="text-center text-4xl font-bold text-main-color">My Skills</h2>
    <p className="text-center font-extrabold text-main-color">----</p>
    <Progressbar/>
        </div>
    );
};

export default SkillSection;