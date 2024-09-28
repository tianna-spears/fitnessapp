/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import SectionWrapper from './SectionWrapper';
import Button from './Button';
import { SCHEMES, WORKOUTS } from '../utilities/getSwole';

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

export default function Generator (props) {
    const { poison, setPoison, muscles, setMuscles, goal, setGoal, updateWorkout} = props;
    const [ showModal, setShowModal ] = useState(false);

    function toggleModal() {
        setShowModal(!showModal);
    }

    function updateMuscles(muscleGroup) {
        if (muscles.includes(muscleGroup)) {
            setMuscles(muscles.filter(val => val !==
            muscleGroup))
            return  
        }

        if (muscles.length >2) {
            return
        } 

        if (poison !== 'individual') {
            setMuscles([muscleGroup])
            setShowModal(false);
            return
        }
   
        setMuscles([...muscles, muscleGroup])
        if (muscles.length === 2)
            setShowModal(false);
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
                        <button onClick={() => {
                            setMuscles([])
                            setPoison(type)
                        }} className={'bg-slate-950 border px-4 duration-200 hover:border-blue-600 py-3 rounded-lg ' + 
                        (type === poison ? ' border-blue-600' : ' border-blue-400')} key={typeIndex}>
                        <p className='capitalize'>{type.replaceAll('_', " ")}</p>
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
            <div className='flex flex-col rounded-lg 
            border border-solid border-blue-400 bg-slate-950'>
                <button onClick={toggleModal} 
                className='relative flex items-center justify-center p-3'>
                    <p className='capitalize'>{muscles.length == 
                     0 ? 'Select muscle groups' : muscles.join(' ')}</p>
                    <i className="fa-solid fa-caret-down absolute
                    right-3 top-1/2 -translate-y-1/2"></i>
                </button>
                {showModal && (
                    <div className='flex flex-col px-3 pb-3'>
                        {(poison==='individual' ? WORKOUTS[poison]: Object.keys(WORKOUTS[poison])).map((muscleGroup, 
                            muscleGroupIndex) => {
                                return (
                                    <button 
                                        onClick={() => updateMuscles(muscleGroup)}
                                        key={muscleGroupIndex}
                                        className={'hover duration-200 p-2 rounded' + (muscles.
                                        includes(muscleGroup) ?  'text-blue-400  bg-blue-900' : 'hover:text-blue-400')}>
                                    <p className='uppercase'>{muscleGroup.replaceAll('_', ' ')}</p>
                                    </button>
                                )})
                            }
                    
                    </div>
                )}
            </div>

{/* Third Header */}

            <Header index={'03'}
            title={'Become a Beast'}
            description={"Select your ultimate objective."}/>
            <div className='grid grid-cols-1 gap-4 sm:grid-cols-3'>
                {Object.keys(SCHEMES).map((scheme, schemeIndex) => {
                    return (
                        <button onClick={() => {
                            setGoal(scheme)
                        }} className={'bg-slate-950 border py-3 duration-200 px-4 hover:border-blue-600 rounded-lg ' + 
                        (scheme === goal ? ' border-blue-600' : ' border-blue-400')} key={schemeIndex}>
                        <p className='capitalize'>{scheme.replaceAll('_', " ")}</p>
                    </button>
                    )
            })}
            </div>
            <Button func={updateWorkout} text={"Formulate"}></Button>
        </SectionWrapper>

    )
}