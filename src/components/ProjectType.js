import React from 'react';

const ProjectType = ({projectPage, changeProjectType}) => {
    return (
        <div className='w-full flex bg-lightGrey justify-around h-[50px]'>
            <button className={`w-1/2 ${projectPage === 'professional' ? '' : 'bg-darkGrey text-white hover:bg-opacity-90 border-b-1'} shadow-3xl`} onClick={() => changeProjectType('professional')}>Professional Work</button>
            <button className={`w-1/2 ${projectPage === 'personal' ? '' : 'bg-darkGrey text-white hover:bg-opacity-90 border-b-1'} shadow-3xl`} onClick={() => changeProjectType('personal')}>Personal Work</button>
        </div>
    );
};

export default ProjectType;
