import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import WelcomeMessage from "./components/WelcomeMessage";
import UserProfile from "./components/UserProfile";
import Fruits from "./components/Fruits";

function App() {
  const [count, setCount] = useState(0);

  const persons = [
    {
      name: "Alice",
      age: 25,
      bio: "Loves hiking and photography",
      emoji: "🤦‍♀️",
    },

    {
      name: "John",
      age: 27,
      bio: "Loves Football and photography",
      emoji: "👨",
    },

    {
      name: "Jane",
      age: 22,
      bio: "Loves God and Praying",
      emoji: "👧",
    },
  ];

  return (
    <>
      <main>
        <Header />
        <MainContent />
        <WelcomeMessage />
        <UserProfile persons={persons} />
        <Fruits />
        <Footer />
      </main>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
