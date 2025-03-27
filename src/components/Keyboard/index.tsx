import { FunctionComponent, MouseEvent } from "react";
import { SmallStyledButton, StyledButton, Wrapper } from "./style";
import { colors } from "../../globalStyle";

interface keyboardProps {
  addSymbol: (symbol: string) => void;
  deleteSymbol(): void;
  clearTask(): void;
}

const Keyboard: FunctionComponent<keyboardProps> = ({
  addSymbol,
  deleteSymbol,
  clearTask,
}) => {
  function onKeyboardClick(e: any) {
    const symbol = e.target.textContent;
    if (symbol !== "=") addSymbol(symbol);
  }

  return (
    <Wrapper onClick={onKeyboardClick}>
      <SmallStyledButton id="e">e</SmallStyledButton>
      <SmallStyledButton id="u">μ</SmallStyledButton>
      <SmallStyledButton id="sin">sin</SmallStyledButton>
      <SmallStyledButton id="deg">deg</SmallStyledButton>
      <StyledButton
        $buttonColor={colors.grey}
        $textColor={colors.lightGrey}
        id="ac"
        onClick={clearTask}
      >
        Ac
      </StyledButton>
      <StyledButton
        $buttonColor={colors.grey}
        $textColor={colors.lightGrey}
        onClick={deleteSymbol}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M6.53481 3H20.9998C21.265 3 21.5194 3.10536 21.7069 3.29289C21.8945 3.48043 21.9998 3.73478 21.9998 4V20C21.9998 20.2652 21.8945 20.5196 21.7069 20.7071C21.5194 20.8946 21.265 21 20.9998 21H6.53481C6.37022 21 6.20816 20.9594 6.06303 20.8818C5.91789 20.8042 5.79416 20.6919 5.70281 20.555L0.36981 12.555C0.260171 12.3907 0.20166 12.1975 0.20166 12C0.20166 11.8025 0.260171 11.6093 0.36981 11.445L5.70281 3.445C5.79416 3.30808 5.91789 3.19583 6.06303 3.11821C6.20816 3.04058 6.37022 2.99998 6.53481 3ZM7.06981 5L2.40381 12L7.06981 19H19.9998V5H7.06981ZM12.9998 10.586L15.8278 7.757L17.2428 9.172L14.4138 12L17.2428 14.828L15.8278 16.243L12.9998 13.414L10.1718 16.243L8.75681 14.828L11.5858 12L8.75681 9.172L10.1718 7.757L12.9998 10.586Z" />
        </svg>
      </StyledButton>
      <StyledButton $buttonColor={colors.darkBlue} id="dvs">
        <svg
          width="12"
          height="27"
          viewBox="0 0 12 27"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12 0L3.47781 27H0L8.52219 0H12Z" />
        </svg>
      </StyledButton>
      <StyledButton $buttonColor={colors.darkBlue} id="mlt">
        <svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M10.5561 1.81915L12 4.37234L7.60428 6L12 7.59575L10.5241 10.2447L6.86631 7.34043L7.57219 12H4.58824L5.22995 7.34043L1.54011 10.3085L0 7.59575L4.36364 5.96809L0.0320855 4.37234L1.47594 1.78724L5.22995 4.65957L4.55615 0H7.57219L6.86631 4.65957L10.5561 1.81915Z" />
        </svg>
      </StyledButton>
      <StyledButton>7</StyledButton>
      <StyledButton>8</StyledButton>
      <StyledButton>9</StyledButton>
      <StyledButton $buttonColor={colors.darkBlue} id="minus">
        −
      </StyledButton>
      <StyledButton>4</StyledButton>
      <StyledButton>5</StyledButton>
      <StyledButton>6</StyledButton>
      <StyledButton $buttonColor={colors.darkBlue} id="plus">
        +
      </StyledButton>
      <StyledButton id="one">1</StyledButton>
      <StyledButton id="two">2</StyledButton>
      <StyledButton id="three">3</StyledButton>
      <StyledButton
        $buttonColor={colors.blue}
        $textColor={colors.lightBlue}
        id="equals"
      >
        =
      </StyledButton>
      <StyledButton id="zero">0</StyledButton>
      <StyledButton id="point">.</StyledButton>
    </Wrapper>
  );
};

export default Keyboard;
