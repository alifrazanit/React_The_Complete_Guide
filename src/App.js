import React, { useState } from "react";
import { HeaderComponent } from "./components/header/HeaderComponent";
import { FormCalculatorComponent } from "./components/formCalculator/FormCalculatorComponent";
import { TableData } from "./components/tableData/TableData";

function App() {
  const [userInput, setUserInput] = useState(null);
  const calculateHandler = (ui) => {
    setUserInput(ui);
  };

  if (userInput) {
    const yearlyData = [];
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

    console.log("yearlyData", yearlyData);
  }

  return (
    <div>
      <HeaderComponent />
      <FormCalculatorComponent onCalculate={calculateHandler} />
      <TableData />
    </div>
  );
}

export default App;
