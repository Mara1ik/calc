import styled from "styled-components";
import { colors } from "../../globalStyle";

export const Wrapper = styled.div`
  margin-top: 75rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(6, 1fr);
  grid-column-gap: 20rem;

  .div1 {
    grid-area: 6 / 1 / 7 / 3;
  }
  .div2 {
    grid-area: 5 / 4 / 7 / 5;
  }
  .div3 {
    grid-area: 3 / 4 / 5 / 5;
  }
`;
export const StyledButton = styled.button`
  color: ${colors.lightGrey};
  border-radius: 16px;
  width: 100%;
  height: 62rem;
  background-color: ${colors.grey};
`;

export const SmallStyledButton = styled(StyledButton)`
  color: ${colors.blue};
  border-radius: 24px;
  height: 40rem;
  background-color: ${colors.darkGrey};
`;
