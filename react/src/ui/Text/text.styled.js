import styled, { css } from "styled-components";

const StyledText = styled.p`
  color: ${(props) => (props.color ? props.color : "#333333")};

  display: ${(props) => (props.display ? props.display : "inline")};

  font-style: ${(props) => (props.isItalic ? "italic" : "normal")};
  font-size: ${(props) => (props.fontSize ? props.fontSize : "13px")};
  font-weight: ${(props) =>
    props.isBold ? "600" : props.fontWeight ? props.fontWeight : "400"};
  line-height: ${(props) => (props.lineHeight ? props.lineHeight : "20px")};

  margin: 0;
  outline: 0;

  ${(props) =>
    props.backgroundColor &&
    css`
      background-color: ${props.backgroundColor};
    `};

  ${(props) =>
    props.noSelect &&
    css`
      user-select: none;
    `}

  ${(props) =>
    props.truncate &&
    css`
      display: block;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    `}
`;

export default StyledText;
