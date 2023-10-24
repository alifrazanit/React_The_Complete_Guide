import ReactImg from "./assets/react-core-concepts.png";
import componentsImg from "./assets/components.png";
import propsImg from "./assets/config.png";
import jsxImg from "./assets/jsx-ui.png";
import stateImg from "./assets/state-mgmt.png";

const reactDescriptions = ["Fundamental", "Crucial", "Core"];

export const CORE_CONCEPTS = [
  {
    image: componentsImg,
    title: "Components",
    description:
      "The core UI building block - compose the user interface by combining multiple components.",
  },
  {
    image: jsxImg,
    title: "JSX",
    description:
      "Return (potentially dynamic) HTML(ish) code to define the actual markup that will be rendered.",
  },
  {
    image: propsImg,
    title: "Props",
    description:
      "Make components configurable (and therefore reusable) by passing input data to them.",
  },
  {
    image: stateImg,
    title: "State",
    description:
      "React-managed data which, when changed, causes the component to re-render & the UI to update.",
  },
];

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

const Header = (props) => {
  const randomNumber = reactDescriptions[genRandomInt(2)];
  return (
    <header>
      <img src={ReactImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {randomNumber} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
};

const CoreConcept = ({image, title, description}) => {
  return (
    <li>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
};

function App() {
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concept</h2>
          <ul>
            {CORE_CONCEPTS &&
              CORE_CONCEPTS.map((data) => (
                // <CoreConcept
                //   title={data.title}
                //   description={data.description}
                //   image={data.image}
                // />
                  <CoreConcept
                  {...data}
                />
              ))}
          </ul>
        </section>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;
