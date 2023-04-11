function Box({
  as: asProp = "div",
  children,
  backgroundColor,
  border,
  borderRadius,
  color,
  mode = "default",
  overflow,
  fontSize = "1rem",
  fontWeight = 300,
  minHeight,
  margin,
  padding,
  height,
  width,
  maxWidth,
  textAlign,
  style,
  ...props
}) {
  const Component = asProp;

  return (
    <Component
      {...props}
      style={{
        border,
        backgroundColor,
        borderRadius,
        color,
        fontSize,
        fontWeight,
        height,
        overflow,
        minHeight,
        margin,
        maxWidth,
        padding,
        width,
        textAlign,
        ...style,
      }}
    >
      {children}
    </Component>
  );
}

export default Box;
