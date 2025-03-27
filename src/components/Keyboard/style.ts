import styled from "styled-components";
import { colors } from "../../globalStyle";

export const Wrapper = styled.div`
  margin-top: 75rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0 20rem;

  #plus {
    height: 96rem;
    position: relative;
    top: 6rem;
  }

  #ac {
    font-size: 24rem;
    margin-bottom: 20rem;
  }

  #equals {
    height: 96rem;
    position: relative;
    top: 20rem;
  }

  #one,
  #two,
  #three {
    position: relative;
    top: -36rem;
  }

  #zero,
  #point {
    position: relative;
    top: -56rem;
  }

  #zero {
    width: 144rem;
  }
`;
export const StyledButton = styled.button<{
  $buttonColor?: string;
  $textColor?: string;
}>`
  width: 61.5rem;
  height: 60rem;
  color: ${(props) => props.$textColor || colors.blue};
  border-radius: 16px;
  background-color: ${(props) => props.$buttonColor || colors.darkGrey};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 16rem;
  svg {
    fill: ${(props) => props.$textColor || colors.blue};
  }
`;

export const SmallStyledButton = styled(StyledButton)`
  height: 40rem;
  border-radius: 24px;
  font-size: 24rem;
`;
