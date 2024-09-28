/* eslint-disable react/prop-types */
export default function Button(props) {
    const {text, func} = props;

    return (
        <button onClick={func}
            className='blueShadow mx-auto rounded-md 
            border-[2px] border-solid border-blue-400 bg-slate-950 px-8 py-4 duration-200'>
            <p> {text}</p>
        </button>
    )
}