// import React from 'react';

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
            a <span className='font-medium text-blue-400'> healthier </span> lifestyle, and better
            <span className='font-medium text-blue-400'> habits.</span>
            </p>
            <button className='blueShadow rounded-md border-[2px] 
            border-solid border-blue-400 bg-slate-950 px-8 py-4 duration-200'>
                <p> Accept and Begin</p>
            </button>

        </div>
    )
}