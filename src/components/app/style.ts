import styled from "styled-components";
import { colors } from "../../globalStyle";

export const AppWrapper = styled.div`
  box-sizing: border-box;
  border-radius: 39px;
  width: 375rem;
  height: 812rem;
  background-color: ${colors.black};
  padding: 40rem 34rem;
`;

export const Task = styled.div`
  font-size: 24rem;
  font-weight: 400;
  color: ${colors.lightGrey};
  margin-top: 98rem;
  display: flex;
  justify-content: end;
`;

export const Result = styled.div`
  font-style: 48rem;
  color: ${colors.white};
  margin-top: 20rem;
  display: flex;
  justify-content: end;
`;
