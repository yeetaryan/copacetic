//for a consistent header or footer
//we can write a layout once and use it in multiple ways
export default function Layout(props) {
console.log(props) 
const {children}=props
   return (
     <>
   <header>
   <h1 className="text-gradient">Copacetic</h1>   
   </header>
      <main>
       {children}
      </main>    
    <footer>
    <small>Created By</small> 
    <a target="_blank" href="https://github.com/yeetaryan">
    <img alt="pfp" src="https://avatars.githubusercontent.com/u/192481049?v=4"/>
    <p>@yeetaryan</p>
     <i className="fa-brands fa-github"></i>
    </a>
  
    </footer>
      </>     
   
     
      
   )
 
   
}