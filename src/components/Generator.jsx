/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import SectionWrapper from './SectionWrapper';
import { SCHEMES, WORKOUTS } from '../utilities/getSwole'

function Header(props) {
    const { index, title, description, icon } = props;
    return (
        <div className='flex flex-col gap-4'>
            <div className='flex items-center justify-center gap-2'>
                <p className='text-3xl font-semibold text-slate-400
                sm:text-4xl md:text-5xl'>{index}</p>
                <h4 className='text-xl sm:text-2xl md:text-3xl'>
                    {title} {icon && <span>{icon} </span>}</h4>
            </div>
            <p className='mx-auto text-sm sm:text-base'>{description}</p>
        </div>
    )
}

export default function Generator () {
    const [ showModal, setShowModal ] = useState(false);
    const [ poison, setPoison ] = useState('individual');
    const [ muscles, setMuscles ] =useState([]);
    const [ goals, setGoals ] = useState('strength_power');

    function toggleModal() {
        setShowModal(!showModal);
    }

    return (
        <SectionWrapper 
        header={"generate your workout"}
        title= {['Its', ' Huge', 'o\'clock']}>

        {/* First Header */}
            <Header index={'01'}
            title={'Pick your poison'}
            description={"Select the workout you wish to endure."}
            icon={<i className="fa-solid fa-dumbbell"></i>}
            />
            <div className='grid grid-cols-2 gap-4 sm:grid-cols-4'>
                {Object.keys(WORKOUTS).map((type, typeIndex) => {
                    return (
                        <button className='rounded-lg border
                        border-blue-400 bg-slate-950 
                        py-3 duration-200 hover:border-blue-600'
                        key={typeIndex}>
                            <p className='capitalize'>{type.
                            replaceAll('_', "-")}</p>
                        </button>
                    )
            })}
            </div>

{/* Second Header */}
            <Header index={'02'}
            title={'Lock on target'}
            description={"Select which muscles you would like to be sore tomorrow."}
            icon={<i className="fa-regular fa-face-grin-beam-sweat"></i>}
            />
            <div className='flex  flex-col rounded-lg 
            border border-solid border-blue-400 bg-slate-950'>
                <button
                onClick={toggleModal} 
                className='relative flex items-center justify-center 
                p-3'>
                    <p>Select muscle groups</p>
                    <i className="fa-solid fa-caret-down absolute
                    right-3 top-1/2 -translate-y-1/2"></i>
                </button>
                {showModal && (
                    <div>model</div>
                )}
            </div>
        </SectionWrapper>
    )
}