import componentsImg from "./assets/components.png";
import propsImg from "./assets/config.png";
import jsxImg from "./assets/jsx-ui.png";
import stateImg from "./assets/state-mgmt.png";

import { Header } from "./components/Header/Header";
import { CoreConcept } from "./components/CoreConcept/CoreConcept";
import { TabButton } from "./components/TabButton/TabButton";
import { useState } from "react";
import { data } from "./mocks/data";

export const CORE_CONCEPTS = [
  {
    image: componentsImg,
    title: 'Components',
    description:
      'The core UI building block - compose the user interface by combining multiple components.',
  },
  {
    image: jsxImg,
    title: 'JSX',
    description:
      'Return (potentially dynamic) HTML(ish) code to define the actual markup that will be rendered.',
  },
  {
    image: propsImg,
    title: 'Props',
    description:
      'Make components configurable (and therefore reusable) by passing input data to them.',
  },
  {
    image: stateImg,
    title: 'State',
    description:
      'React-managed data which, when changed, causes the component to re-render & the UI to update.',
  },
];

function App() {
  const [topik, setTopik] = useState(null);
  const onClickHandler = (e) => {
    setTopik(e);
  };

  let topikContent = <p>Please select the topik</p>;
  if(topik){
    topikContent = (<div id="tab-content">
    <h3>{data[topik].title}</h3>
    <p>{data[topik].description}</p>
    <pre>
      <code>{data[topik].code}</code>
    </pre>
  </div>)
  }

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concept</h2>
          <ul>
            {CORE_CONCEPTS &&
              CORE_CONCEPTS.map((data) => <CoreConcept {...data} />)}
          </ul>
        </section>
        <section id="examples">
          <menu>
            <TabButton isSelected={topik === "components"} onClick={() => onClickHandler("components")}>
              Components
            </TabButton>
            <TabButton isSelected={topik === "jsx"} onClick={() => onClickHandler("jsx")}>JSX</TabButton>
            <TabButton isSelected={topik === "props"} onClick={() => onClickHandler("props")}>Props</TabButton>
            <TabButton isSelected={topik === "state"} onClick={() => onClickHandler("state")}>State</TabButton>
          </menu>
          {topikContent}
        </section>
      </main>
    </div>
  );
}

export default App;
