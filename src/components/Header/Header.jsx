import ReactImg from "../../assets/react-core-concepts.png";
export const Header = (props) => {
  const reactDescriptions = ["Fundamental", "Crucial", "Core"];
  const randomNumber = reactDescriptions[genRandomInt(2)];
  function genRandomInt(max) {
    return Math.floor(Math.random() * (max + 1));
  }
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
