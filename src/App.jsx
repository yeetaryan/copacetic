import Layout from "./components/layouts/Layout"
import Welcome from "./components/layouts/Welcome"
import Dashboard from "./components/layouts/Dashboard"
import Challenge from "./components/layouts/Challenge"
import {useState,useEffect} from "react"
import WORDS from './utils/VOCAB.json'
import {countdownIn24Hours, getWordByIndex, PLAN } from "./utils"
function App() {
  const [selectedPage,setSelectedPage]=useState(0)
//const selectedpage=2 //zero is for welcome,1 is for dashboard ,2 is for challenge
const[name,setName]=useState('')
const[day,setDay]=useState(1)
const[datetime,setDatetime]=useState(null)
const [history,setHistory]=useState({})
//whatever goes down it will be added in the value array.
const [attempts,setAttempts]=useState(0)
const daysWords=PLAN[day].map((idx)=>{
 return getWordByIndex(WORDS,idx).word
})
console.log(daysWords)
function handleChangePage(pageIndex){
  setSelectedPage(pageIndex)
}
function handleCreateAccount(){
  if(!name){return}
  localStorage.setItem('username',name)
  handleChangePage(1)
}


const pages= {
0:<Welcome handleCreateAccount={handleCreateAccount}username="hello world" name={name}
setName={setName}/>,


1:<Dashboard history={history} name={name} attempts={attempts} PLAN={PLAN} day={day} handleChangePage={handleChangePage} daysWords={daysWords} datetime={datetime}/>, 
2:<Challenge day={day} dayWords={daysWords} handleChangePage={handleChangePage} handleIncrementAttempts={handleIncrementAttempts} handleCompleteDay={handleCompleteDay} PLAN={PLAN}/>
/*conditional rendering*/
}
function handleCompleteDay(){
  const newDay=day+1
  const newDatetime=Date.now()
  setDay(newDay)
  setDatetime(newDatetime)
  localStorage.setItem('day',JSON.stringify({
    day:newDay,
    datetime:newDatetime
  }))
  setSelectedPage(1)
}
function handleIncrementAttempts(){
  const newRecord=attempts+1
localStorage.setItem('attempts',newRecord)  
setAttempts(newRecord)
}
useEffect(()=>{
//this callback function is triggered on pageload
if (!localStorage){return}
//if we don't have the access to the DB,then exit the callback function
if(localStorage.getItem('username')){
  setName(localStorage.getItem('username'))
  //we have a name 
  setSelectedPage(1)
}
if(localStorage.getItem('attempts')){
  setAttempts(parseInt(localStorage.getItem('attempts')))
}
if(localStorage.getItem('history')){
  setHistory(JSON.parse(localStorage.getItem('history')))
}
if(localStorage.getItem('day')){
  const {day:d,datetime:dt}=JSON.parse(localStorage.getItem('day'))
  setDatetime(dt)
  setDay(d)
if(d>1 && dt){
  const diff=countdownIn24Hours(dt)
  console.log(diff)
  if(diff<0){
    console.log('Failed challenge')
    let newHistory={...history}
    const timestamp=new Date(dt)
    const formattedTimestamp=timestamp.toISOString().split(' ').slice(1,4).join(' ')
  newHistory[formattedTimestamp]=d
  setHistory(newHistory)
  setDay(1)
  setDatetime(null)
  setAttempts(0)
  localStorage.setItem('attempts',0)
  localStorage.setItem('history',JSON.stringify(newHistory))
  localStorage.setItem('day',JSON.stringify({day:1,datetime:null}))

  }
}
}
},[])
  
return ( 
<Layout>
 {pages[selectedPage]}
</Layout>
   
  )
}

export default App
