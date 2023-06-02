import './App.css';


function UserNamecomponentRenderExample(){
  return(
    <h1>My name is sravani</h1>
  )
}

function App() {

  const user = {
    firstName : "sravani",
    lastName : "Maragani"
  };
  return (
    <div className="App">
     {/* <h1>Hello {new Date().toLocaleTimeString()} </h1> */}
     <p>My FullName is :{user.firstName} {user.lastName}</p>
     <UserNamecomponentRenderExample/>
    </div>
  );
}

export default App;
