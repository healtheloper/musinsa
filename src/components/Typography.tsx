import styled from 'styled-components';

import {
  fontSizes,
  fontWeights,
  fontLineHeights,
  typographys,
} from '@constants/fonts';

type TypographyVariants =
  | 'h5'
  | 'h6'
  | 'body0'
  | 'body1'
  | 'body2'
  | 'body3'
  | 'body4';

type TypographyType = {
  variant: TypographyVariants;
  color?: string;
  textDecoration?: string;
  children: React.ReactNode;
};

const TypographyText = styled.span`
  font-size: ${({ variant }) => fontSizes[typographys[variant].fontSize]};
  font-weight: ${({ variant }) => fontWeights[typographys[variant].fontWeight]};
  line-height: ${({ variant }) =>
    fontLineHeights[typographys[variant].lineHeight]};
  ${({ color }) => (color ? `color: ${color};` : '')}
  ${({ textDecoration }) =>
    textDecoration ? `text-decoration: ${textDecoration};` : ''}
`;

const Typography: React.FC<TypographyType> = ({
  variant,
  children,
  color,
  textDecoration,
}) => (
  <TypographyText
    variant={variant}
    color={color}
    textDecoration={textDecoration}
  >
    {children}
  </TypographyText>
);

export default Typography;
