import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">Sam's Dictionary App</header>
        <main>
          <Dictionary />
        </main>
        <footer className="App-footer">Coded by Samantha Smith</footer>
      </div>
    </div>
  );
}
