import { useState } from "react";
import Accordion from "./components/Accordion";
import Dropdown from "./components/Dropdown";
import Search from "./components/Search";

function App() {
  const items = [
    {
      title: "What is React?",
      content: "React is a front end javascript Library",
    },
    {
      title: "Why use React?",
      content: "Beacause I love it",
    },
    {
      title: "How do you use React",
      content: "By creating components",
    },
  ];
  const options = [
    {
      label: "The Color Red",
      value: "red",
    },
    {
      label: "The Color Gree",
      value: "green",
    },
    {
      label: "The Color Blue",
      value: "blue",
    },
  ];
  const [selected, setSelected] = useState(options[0]);
  return (
    <div>
      <Dropdown
        options={options}
        selected={selected}
        onSelectedChange={setSelected}
      />
    </div>
  );
}

export default App;
