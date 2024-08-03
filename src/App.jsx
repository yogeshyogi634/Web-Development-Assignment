import "./App.scss";
import Heading from "./components/heading/Heading";
import MainSections from "./components/mainSections.jsx/MainSections";
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";

function App() {
  return (
    <div>
      <Navbar />
      <section>
        <Sidebar />
        {/* <div style={{ width: "100%", padding: "30px" }}> */}
        <div className="mainSections">
          <Heading />
          <MainSections />
        </div>
      </section>
    </div>
  );
}

export default App;
