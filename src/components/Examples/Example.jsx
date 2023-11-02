import { TabButton } from "../../components/TabButton/TabButton";
import { useState } from "react";
import { data } from "../../mocks/data";
import { Section } from "../Section/Section";
import { Tabs } from "../Tabs/Tabs";

export const Examples = (props) => {
  const [topik, setTopik] = useState(null);
  const onClickHandler = (e) => {
    setTopik(e);
  };

  let topikContent = <p>Please select the topik</p>;
  if (topik) {
    topikContent = (
      <div id="tab-content">
        <h3>{data[topik].title}</h3>
        <p>{data[topik].description}</p>
        <pre>
          <code>{data[topik].code}</code>
        </pre>
      </div>
    );
  }

  return (
    <Section title="Examples" id="examples">
      <Tabs
      ButtonContainer="menu"
        buttons={
          <>
            <TabButton
              isSelected={topik === "components"}
              onClick={() => onClickHandler("components")}
            >
              Components
            </TabButton>
            <TabButton
              isSelected={topik === "jsx"}
              onClick={() => onClickHandler("jsx")}
            >
              JSX
            </TabButton>
            <TabButton
              isSelected={topik === "props"}
              onClick={() => onClickHandler("props")}
            >
              Props
            </TabButton>
            <TabButton
              isSelected={topik === "state"}
              onClick={() => onClickHandler("state")}
            >
              State
            </TabButton>
          </>
        }
      >
        {topikContent}
      </Tabs>
    </Section>
  );
};
