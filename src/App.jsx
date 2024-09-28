import Hero from './components/Hero';
import Generator from './components/Generator';
import Workout from './components/Workout';
import { useState } from 'react';
import { generateWorkout } from './utilities/functions';

function App() {
  const [ workout, setWorkout ] =useState(null);
  const [ poison, setPoison ] = useState('individual');
  const [ muscles, setMuscles ] =useState([]);
  const [ goal, setGoal ] = useState('strength_power');

  function updateWorkout() {
    if (muscles.length < 1) {
      return 
    }
    const newWorkout= generateWorkout({poison, muscles, goal});
    setWorkout(newWorkout)
  }


  return (
    <main className='flex min-h-screen flex-col bg-gradient-to-r
      from-slate-800 to-slate-950 text-sm text-white sm:text-base'>

      <Hero />
      <Generator 
      poison={poison}
      setPoison={setPoison}
      muscles={muscles}
      setMuscles={setMuscles}
      goal={goal}
      setGoal={setGoal}
      updateWorkout= {updateWorkout}
      />
      {workout && (<Workout workout={workout}/>)}
      
    </main>
  )
}

export default App;