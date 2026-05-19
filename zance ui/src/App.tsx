import "./App.css";
import ScrollText from "./Components/ ScrollText/ ScrollText";
import HoverMe from "./Components/HoverMe/HoverMe";

function App() {
  return (
    <>
      <ScrollText key={1}/>
      <HoverMe />
      <ScrollText key={2}/>
    </>
  );
}

export default App;
