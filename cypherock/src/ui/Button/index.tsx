import styled, { css, DefaultTheme } from "styled-components";

import { Image } from "ui";

const variantStyles = (theme: DefaultTheme, variant = "primary", color: string) =>
  ({
    primary: css`
      color: #f5cea3;
      background: #785b3c;
    `,
    secondary: css`
      background: rgba(255, 255, 255, 0.06);
      color: #beb4a8;
    `,
    link: css`
      background: transparent;
      color: ${color || '#f5cea3'}
    `
  }[variant]);

const StyledButton = styled.button`
  padding: 0.5rem 1.5rem;
  border: none;
  border-radius: 0.25rem;
  font-size: 0.875rem;
  line-height: 1rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  ${({ theme, variant, color }) => variantStyles(theme, variant, color)};
  img {
    margin-right: 0.5rem
  }
`;

function Button({ onClick, icon, variant, children, ...props }: any) {
  return (
    <StyledButton variant={variant} onClick={onClick} {...props}>
      {icon && <Image src={icon} />}
      {children}
    </StyledButton>
  );
}

export default Button;
