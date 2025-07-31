import Layout from "./components/layouts/Layout"
import Welcome from "./components/layouts/Welcome"
import Dashboard from "./components/layouts/Dashboard"
import Challenge from "./components/layouts/Challenge"
function App() {
const selectedpage=2 //zero is for welcome,1 is for dashboard ,2 is for challenge
const pages= {
0:<Welcome/>,
1:<Dashboard/>, 
2:<Challenge/>
/*conditional rendering*/
}

  return (
 
<Layout>
 {pages[selectedpage]}
</Layout>
   
  )
}

export default App
