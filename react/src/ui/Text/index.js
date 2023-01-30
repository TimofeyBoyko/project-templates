import React from "react";
import PropTypes from "prop-types";
import StyledText from "./text.styled";

const Text = ({
  id,
  className,
  style,
  color,
  backgroundColor,
  display,
  fontSize,
  title,
  lineHeight,
  fontWeight,
  isBold,
  isItalic,
  noSelect,
  truncate,
  children,
  ...rest
}) => {
  return (
    <StyledText
      id={id}
      className={className}
      style={style}
      color={color}
      backgroundColor={backgroundColor}
      display={display}
      fontSize={fontSize}
      fontWeight={fontWeight}
      title={title}
      lineHeight={lineHeight}
      isBold={isBold}
      isItalic={isItalic}
      noSelect={noSelect}
      truncate={truncate}
      {...rest}
    >
      {children}
    </StyledText>
  );
};

Text.propTypes = {
  /** Used as HTML `id` property */
  id: PropTypes.string,
  /** Used as HTML `className` property */
  className: PropTypes.string,
  /** Used as HTML `style` property */
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  /** Used as CSS `color` property */
  color: PropTypes.string,
  /** Used as CSS `backgroundColor` property */
  backgroundColor: PropTypes.string,
  /** Used as CSS `display` property */
  display: PropTypes.string,
  /** Used as CSS `fontSize` property */
  fontSize: PropTypes.string,
  /** Used as HTML `title` property */
  title: PropTypes.string,
  /** Used as CSS `lineHeight` property */
  lineHeight: PropTypes.string,
  /** Used as CSS `fontWeight` property */
  fontWeight: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  /** Set CSS `fontWeight` property as 600 */
  isBold: PropTypes.bool,
  /** Set CSS `fontStyle` property as italic */
  isItalic: PropTypes.bool,
  /** Disable user select */
  noSelect: PropTypes.bool,
  /** Disable word wrapping */
  truncate: PropTypes.bool,
  /** Pass text content */
  children: PropTypes.node,
};

export default Text;
