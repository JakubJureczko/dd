import React, { useEffect } from 'react';
import './App.css';
import bd from './assets/k05.wav'
import sn from './assets/s10.wav'
import hh from './assets/h01.wav'
import hh2 from './assets/c02.wav'
import gt from './assets/guitar.wav'

import useSound from 'use-sound';



function App() {
  
     const [kick] = useSound(bd)
     const [snare] = useSound(sn)
     const [hihat] = useSound(hh)
     const [hihat2] = useSound(hh2)
     const [guitar] = useSound(gt)
  
// useEffect(() => document.addEventListener('keypress', (e) => handleKeyPress(e.code)),[])

     
    
//     function handleKeyPress(keyCode) {
//       switch (keyCode) {
//         case 'KeyD':
//           kick();      
//         console.log('kick'); 
//           break;
//           case 'KeyF':
//             snare(); 
//         break;
//         case 'KeyJ':
//             hihat(); 
//         break;
//         case 'KeyK':
//             hihat2(); 
//         break;
//         default:
//           break;
//       }
//     }
    
 
  
  
  return (
    <div className="App" >
     
            
              <button onClick={kick}  >Kick D</button>
              <button onClick={snare} >Snare F</button>
              <button onClick={hihat} >Hat J</button>
              <button onClick={hihat2} >Cymbal K</button>
              <button onClick={guitar} >Guitar</button>
        
    </div>
  );
}

export default App;
