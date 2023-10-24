import  ReactImg from './assets/react-core-concepts.png';
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
function App() {
  return (
    <div>
      <Header />
      <main>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;
