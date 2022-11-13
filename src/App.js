import Accordion from "./components/Accordion";
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
  return (
    <div>
      <Search />
    </div>
  );
}

export default App;
