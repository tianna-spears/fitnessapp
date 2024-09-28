// eslint-disable-next-line no-unused-vars
import React from "react";
import SectionWrapper from "./SectionWrapper";
import ExerciseCard from "./ExerciseCard";

/* eslint-disable react/prop-types */
export default function Workout(props) {
    const { workout } = props;

    return (
        <SectionWrapper 
        id= {'workout'}
        header={"Welcome to"}
        title= {['The', ' DANGER', 'zone']}>
            <div className='flex flex-col gap-4'>
                {workout.map((exercise, i) => {
                    return (
                        <ExerciseCard
                        i= {i}
                        exercise={exercise} 
                        key={i} />
                    )
                }
            )} 
            </div>
        </SectionWrapper>
    )
}