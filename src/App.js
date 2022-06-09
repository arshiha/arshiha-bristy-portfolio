import Navbar from "./Components/Navbar/Navbar.jsx";
import "./App.css";
import Intro from "./Components/Intro/Intro.jsx";
import Services from "./Components/Services/Services.jsx";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Intro></Intro>
      <Services></Services>
    </div>
  );
}

export default App;
