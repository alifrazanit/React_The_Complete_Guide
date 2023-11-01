import componentsImg from "./assets/components.png";
import propsImg from "./assets/config.png";
import jsxImg from "./assets/jsx-ui.png";
import stateImg from "./assets/state-mgmt.png";

import { Header } from "./components/Header/Header";
import { CoreConcepts } from "./components/CoreConcepts/CoreConcepts";
import { Examples } from "./components/Examples/Example";

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
  return (
    <div>
      <Header />
      <main>
        <CoreConcepts coreConcept={CORE_CONCEPTS}/>
        <Examples/>
      </main>
    </div>
  );
}

export default App;
