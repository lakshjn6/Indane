import Navbar from "./component/navbar";
import Homepage from "./component/homepage";
import About from "./component/about1";
import Booking from "./component/booking";
import Contact from "./component/contact";
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Homepage/>
      <br></br>
      <About/>
      <br></br>
      <br></br>
      <Booking/>
      <br></br>
      <Contact/>
      
   
    </div>
  );
}

export default App;
