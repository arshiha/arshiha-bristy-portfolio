import Navbar from "./Components/Navbar/Navbar.jsx";
import "./App.css";
import Intro from "./Components/Intro/Intro.jsx";
import Services from "./Components/Services/Services.jsx";
import Portfolio from "./Components/Portfolio/Portfolio.jsx";
import Testimonials from "./Components/Testimonials/Testimonials.jsx";
import Contact from "./Components/Contact/Contact.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import About from "./Components/About/About.jsx";
import Blog from "./Components/Blog/Blog.jsx";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Intro></Intro>
      <Services></Services>
      <About></About>
      <Portfolio></Portfolio>
      <Testimonials></Testimonials>
      <Contact></Contact>
      <Blog></Blog>
      <Footer></Footer>
    </div>
  );
}

export default App;
