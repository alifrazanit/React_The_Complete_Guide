import { CoreConcept } from "../CoreConcept/CoreConcept";

export const CoreConcepts = (props) => {
  return (
    <section id="core-concepts">
      <h2>Core Concept</h2>
      <ul>
        {props.coreConcept &&
          props.coreConcept.map((data) => <CoreConcept {...data} />)}
      </ul>
    </section>
  );
};
