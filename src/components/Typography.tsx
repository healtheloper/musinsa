import styled from 'styled-components';

import {
  fontSizes,
  fontWeights,
  fontLineHeights,
  typographys,
} from '@constants/fonts';

type TypographyVariants = 'h5' | 'h6' | 'body1' | 'body2' | 'body3' | 'body4';

type TypographyType = {
  variant: TypographyVariants;
  children: React.ReactNode;
};

const TypographyText = styled.span`
  font-size: ${({ variant }) => fontSizes[typographys[variant].fontSize]};
  font-weight: ${({ variant }) => fontWeights[typographys[variant].fontWeight]};
  line-height: ${({ variant }) =>
    fontLineHeights[typographys[variant].lineHeight]};
`;

const Typography: React.FC<TypographyType> = ({ variant, children }) => (
  <TypographyText variant={variant}>{children}</TypographyText>
);

export default Typography;
