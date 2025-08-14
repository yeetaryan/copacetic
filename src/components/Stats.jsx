import { calcLevel,calculateAccuracy,calculateNewWords } from '../utils'
import ProgressBar from './ProgressBar'
export default function Stats(props) {
//destructuring syntax
const {name,day,attempts,PLAN}=props
//const name='Aryan'  
//const day=16
/*day is needed at 2 places stop using the hard coded value 
!challenge and Dashboard */
const currlvl=calcLevel(day)
console.log(currlvl)
const floorLvl=Math.floor(currlvl)
const remainder=(currlvl-floorLvl)*100
   return (
      <div className="card stats-card">
            <div className="welcome-text">
                <h6>Welcome</h6>
                <h4 className="text-large">
                    {name}
                </h4>
            </div>
     
<div className="stats-column">
  <div>
    <p>Streak 🔥</p>
    <h4>{day-1}</h4>
  </div>
   <div>
    <p>Words seen</p>
    <h4>{calculateNewWords(day-1)}</h4>
  </div>
   <div>
    <p>Accuracy</p>
    <h4>{(calculateAccuracy(attempts,day)*100).toFixed(1)}</h4>
  </div>
</div>   
 <ProgressBar text={`lvl ${floorLvl}`}remainder={remainder}/>
</div> 
   )
 
   
}