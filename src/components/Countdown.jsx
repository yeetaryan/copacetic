// export default function Countdown () {
//    return (
//      <div className="card countdown-card">
//      <h1 className="item-header">Day {1}</h1>
//     <div className="today-container">
//       <div>
//         <p>Time remaining</p>
//         <h1>13H 45M 22S</h1>
//         <div>Words for Today</div>
//         <h3>16</h3>
//       </div>
//     </div>
//     <button className="start-task">
//       <h6>Start</h6>
//     </button>
//      </div>  
//    )
 
   
// }
export default function Countdown () {
  return (
    <div className="card countdown-card">
      <h1 className="item-header">Day {1}</h1>

      {/* Make two side-by-side blocks inside today-container */}
      <div className="today-container" style={{ display: 'flex', justifyContent: 'space-between', gap: '1rem', marginBottom: '1.5rem' }}>
        {/* Time Remaining Block */}
        <div style={{ flex: 1, textAlign: 'center' }}>
          <p>Time remaining</p>
          <h3>13H 45M 22S</h3>
        </div>

        {/* Words for Today Block */}
        <div style={{ flex: 1, textAlign: 'center' }}>
          <p>Words for Today</p>
          <h3>16</h3>
        </div>
      </div>

      <button className="start-task">
        <h6>Start</h6>
      </button>
    </div>
  )
}
  