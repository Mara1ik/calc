import { FunctionComponent, useState } from "react";
import { AppWrapper, Result, Task } from "./style";
import Keyboard from "../Keyboard";

const App: FunctionComponent = () => {
  const [task, setTask] = useState<string>("");

  function addSymbol(symbol: string) {
    setTask((val) => {
      if (
        symbol.length < 2 &&
        val[val.length] !== "-" &&
        val[val.length] !== "+" &&
        val[val.length] !== "/" &&
        val[val.length] !== "*"
      ) {
        return val + symbol;
      } else {
        return "";
      }
    });
  }

  function deleteSymbol() {
    setTask((val) => val.slice(0, -1));
  }

  function clearTask() {
    setTask((val) => "");
  }

  return (
    <AppWrapper>
      <Task>{task}</Task>
      <Result>=12,454</Result>
      <Keyboard
        addSymbol={addSymbol}
        deleteSymbol={deleteSymbol}
        clearTask={clearTask}
      />
    </AppWrapper>
  );
};

export default App;
