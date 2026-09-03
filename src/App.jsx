import "./App.css";
import Banner from "./components/Banner/Banner";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="min-h-screen px-3 lg:px-0">
      <Navbar></Navbar>
      <Banner></Banner>
    </div>
  );
}

export default App;
