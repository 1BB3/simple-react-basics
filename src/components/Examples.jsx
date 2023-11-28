import { useState } from "react";
import { EXAMPLES } from "../data";
import TabButton from "./TabButton.jsx";
import Section from "./Section.jsx";
import Tabs from "./Tabs.jsx";

export default function Examples() {
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
    <Section id="examples" title="Examples">
      <Tabs
        buttons={
          <>
            <TabButton
              isActive={selectedText === "components"}
              onClick={() => handleSelect("components")}
            >
              Components
            </TabButton>
            <TabButton
              isActive={selectedText === "jsx"}
              onClick={() => handleSelect("jsx")}
            >
              JSX
            </TabButton>
            <TabButton
              isActive={selectedText === "props"}
              onClick={() => handleSelect("props")}
            >
              Props
            </TabButton>
            <TabButton
              isActive={selectedText === "state"}
              onClick={() => handleSelect("state")}
            >
              State
            </TabButton>
          </>
        }
      >
        {tabcontent}
      </Tabs>
    </Section>
  );
}
