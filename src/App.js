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
        <footer className="App-footer">
          This page is coded by{" "}
          <a
            href="https://www.linkedin.com/in/samantha-smith-5014424b/"
            target="_blank"
            rel="noreferrer"
          >
            Samantha Smith
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/SamSmith21/dictionary-app"
            target="_blank"
            rel="noreferrer"
          >
            open sourced on Github
          </a>
        </footer>
      </div>
    </div>
  );
}
