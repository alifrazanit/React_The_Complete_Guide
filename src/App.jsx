import  ReactImg from './assets/react-core-concepts.png';
import imageComponent from './assets/components.png';

const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

const Header = props => {
  const randomNumber = reactDescriptions[genRandomInt(2)]
  return (
    <header>
        <img src={ReactImg} alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>
          {randomNumber} React concepts you will need for almost any app you are
          going to build!
        </p>
      </header>
  )
}

const CoreConcept = props => {
  return (
    <li>
      <img src={props.image} alt={props.title} />
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </li>
  )
}

function App() {
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concept</h2>
          <ul>
            <CoreConcept 
              title="Components"
              description="The core UI building block"
              image={imageComponent}
            />
          </ul>
        </section>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;
