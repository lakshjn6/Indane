import Navbar from "./component/navbar";
import Homepage from "./component/homepage";
import About from "./component/about1";
import Booking from "./component/booking";
import Contact from "./component/contact";
import Footer from "./component/footer";
import Feedback from "./component/feedback.js";

function App() {
  return (
    <div className="App">
      <section id="home">
      <Navbar/>
      <Homepage/>
      </section>
      <br></br>
      <section id="about">
      <About/>
      </section>
      <br></br>
      <br></br>
      <section id="booking">
      <Booking/>
      </section>
      <br></br>
      <section id="contact">
      <Contact/>
      </section>
      <Feedback/>
      <br></br>
      <Footer/>
   
    </div>
  );
}

export default App;
