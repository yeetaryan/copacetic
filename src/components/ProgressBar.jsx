export default function ProgressBar() {
  const text='hello world'//come and change this later silly muppet
  const arr=[0,1,2,3,4,5,6,7,8,9]
  //iteratively travsersing array
  return (
   <div className='level'>
    <div>
    <h4>{text}</h4>  
    </div>
   {arr.map((element, elementIdx) =>{
    return (
     <div className='Level-bar' key={elementIdx}></div> 
    )
})}
<div className='xp' style={{width:`${40}% `}}></div>
   </div>
   )  
}