import React from "react";
import './index.css';


function Header() {
    return (
      <React.Fragment>
        <h1>Hello World</h1>
        <nav>
          <p>I am a Nav with a paragraph element inside</p>
        </nav>
        <main>Main</main>
        <footer>footer</footer>
      </React.Fragment>
    )
}

function App() {
    return <Header />;
}

export default App;
