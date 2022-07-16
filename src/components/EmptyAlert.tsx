import React from 'react';
import styled from 'styled-components';

import Typography from '@components/Typography';
import colors from '@constants/colors';
import EmptyIcon from '@icons/EmptyIcon';

const Wrapper: React.FC<{ children: React.ReactNode }> = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${colors.grey6};
`;

const EmptyAlert: React.FC = () => (
  <Wrapper>
    <EmptyIcon />
    <Typography variant="body2">검색 결과 없음</Typography>
  </Wrapper>
);

export default EmptyAlert;
