import "./App.css";
import Banner from "./components/Banner/Banner";
import MainSection from "./components/MainSection/MainSection";
import Navbar from "./components/Navbar/Navbar";

const fetchTickets = async () => {
  const res = await fetch("data.json");
  const data = await res.json();

  return data;
};

const ticketsPromise = fetchTickets();

function App() {
  return (
    <div className="min-h-screen px-3 lg:px-0">
      <Navbar></Navbar>
      <Banner></Banner>
      <MainSection ticketsPromise={ticketsPromise}></MainSection>
    </div>
  );
}

export default App;
