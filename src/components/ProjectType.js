import React from 'react';

const tabs = [
    { key: 'professional', label: 'Professional work' },
    { key: 'personal', label: 'Personal work' },
];

const ProjectType = ({projectPage, changeProjectType}) => {
    return (
        <div role='tablist' aria-label='Project type' className='inline-flex items-center gap-1 rounded-full border border-dark/10 bg-white p-1 shadow-sm'>
            {tabs.map((tab) => {
                const active = projectPage === tab.key;
                return (
                    <button
                        key={tab.key}
                        role='tab'
                        aria-selected={active}
                        type='button'
                        onClick={() => changeProjectType(tab.key)}
                        className={`font-rubik rounded-full px-5 py-2 text-sm font-semibold transition-colors ${active ? 'bg-dark text-light' : 'text-dark/65 hover:text-dark'}`}
                    >
                        {tab.label}
                    </button>
                );
            })}
        </div>
    );
};

export default ProjectType;
