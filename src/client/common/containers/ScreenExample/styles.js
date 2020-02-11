import styled from '@emotion/styled';
import { space } from 'common/styles/spacing';
import screen from 'common/styles/screen';

export const Screen = styled.div`
  padding: ${space.x2} ${space.x15};
  max-width: 300px;
  @media screen and (max-width: ${screen.s}) {
    padding: ${space.x15} ${space.x025};
  }
`;
