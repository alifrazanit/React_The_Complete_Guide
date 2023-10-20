import React, { useState } from "react";
import { HeaderComponent } from "./components/header/HeaderComponent";
import { FormCalculatorComponent } from "./components/formCalculator/FormCalculatorComponent";
import { TableData } from "./components/tableData/TableData";

function App() {
  const [userInput, setUserInput] = useState(null);
  const calculateHandler = (ui) => {
    setUserInput(ui);
  };
  const yearlyData = [];
  if (userInput) {
   
    let currentSavings = +userInput["currentSaving"];
    const yearlyContribution = +userInput["yearlyContribution"];
    const expectedReturn = +userInput["expectedReturn"] / 100;
    const duration = +userInput["duration"];

    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }
  }

  return (
    <div>
      <HeaderComponent />
      <FormCalculatorComponent onCalculate={calculateHandler} />
      {userInput === null ? <p>No investment</p> : <TableData data={yearlyData} initialInvesment={+userInput['currentSaving']}/>}
    </div>
  );
}

export default App;
