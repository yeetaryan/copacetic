import ProgressBar from "../ProgressBar"
export default function Challenge() {
  const word='copacetic'
  const definition='In excellent order'
   return (
    <section id="challenge">
      <h1>{word}</h1>
      <p>{definition}</p>
      <div className="helper">
       <div>
         {/*contains all the visual bars*/}
        {[...Array(definition.length).keys()]
        .map((element,elementIdx)=>{
        //determine whether or not the user has typed character they think is correct  and show red and blue accordingly .
          return (
            <div key={elementIdx}></div>
          )
        })}
       </div>
       <input type="text" placeholder="Enter the definition..."/>
      </div>
      <div className="challenge-btn">
        <button className="card-button-secondary">
             <h6>Quit</h6>
        </button>
    <button className="card-button-primary">
      <h6>I forgot</h6>
    </button>
      </div>
      <ProgressBar/>
    </section>
   )
 
   
}