import { FunctionComponent } from "react";
import { SmallStyledButton, StyledButton, Wrapper } from "./style";

interface keyboardProps {}

const Keyboard: FunctionComponent<keyboardProps> = () => {
  return (
    <Wrapper>
      <SmallStyledButton>e</SmallStyledButton>
      <SmallStyledButton>μ</SmallStyledButton>
      <SmallStyledButton>sin</SmallStyledButton>
      <SmallStyledButton>deg</SmallStyledButton>
      <StyledButton>Ac</StyledButton>
    </Wrapper>
  );
};

export default Keyboard;
