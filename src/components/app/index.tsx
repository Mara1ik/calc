import { FunctionComponent } from "react";
import { AppWrapper, Result, Task } from "./style";
import Keyboard from "../Keyboard";

interface AppProps {}

const App: FunctionComponent<AppProps> = () => {
  return (
    <AppWrapper>
      <Task>6000/2+3227*2</Task>
      <Result>=12,454</Result>
      <Keyboard>
      </Keyboard>
    </AppWrapper>
  );
};

export default App;
