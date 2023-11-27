import { useState } from "react";
import { CORE_CONCEPTS } from "./data";
import { EXAMPLES } from "./data";
import Header from "./components/Header/Header.jsx";
import CoreConcept from "./components/CoreConcept";
import TabButton from "./components/TabButton.jsx";

function App() {
  const [selectedText, setSelectedText] = useState();

  function handleSelect(text) {
    setSelectedText(text);
  }

  let tabcontent = <h4>Please Select a Topic</h4>;
  if (selectedText) {
    tabcontent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedText].title}</h3>
        <p>{EXAMPLES[selectedText].description}</p>
        <pre>
          <code>{EXAMPLES[selectedText].code}</code>
        </pre>
      </div>
    );
  }

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((item) => (
              <CoreConcept key={item.title} {...item} />
            ))}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton
              isActive={selectedText === "components"}
              onSelect={() => handleSelect("components")}
            >
              Components
            </TabButton>
            <TabButton
              isActive={selectedText === "jsx"}
              onSelect={() => handleSelect("jsx")}
            >
              JSX
            </TabButton>
            <TabButton
              isActive={selectedText === "props"}
              onSelect={() => handleSelect("props")}
            >
              Props
            </TabButton>
            <TabButton
              isActive={selectedText === "state"}
              onSelect={() => handleSelect("state")}
            >
              State
            </TabButton>
          </menu>
          {tabcontent}
        </section>
      </main>
    </div>
  );
}

export default App;
