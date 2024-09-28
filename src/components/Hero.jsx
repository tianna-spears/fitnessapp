// import React from 'react';
import Button from './Button';

export default function Hero() {
    return (
<div className='mx-auto flex min-h-screen w-full max-w-[800px] 
flex-col items-center justify-center gap-10 p-4 text-center'>

            <div className= 'flex flex-col gap-4'>
                <p> IT&apos;S TIME TO GET</p>
                <h1 className='text-4xl font-semibold uppercase
                sm:text-5xl md:text-6xl
                lg:text-7xl'> Ripped<span>dddddddd</span></h1>
            </div>
            <p className='justify-center text-sm font-light md:text-base'> 
            I hearby acknowledge that I am ready to commit to <span className='font-medium text-blue-400'> myself, </span> 
            a <span className='font-medium text-blue-400'> healthier </span> lifestyle, <br/>and better
            <span className='font-medium text-blue-400'> habits.</span>
            </p>

            <Button func={() =>{
                window.location.href = '#generate'
            }} 
                text={"Accept & Begin"}> </Button>
        </div>
    )
}