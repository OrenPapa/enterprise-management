import { Box } from '@mui/material';
import styled from 'styled-components';

export const FullHeightContainer = styled(Box)`
  height: 100vh;
  display: flex;
  flex-direction: row;
`;

export const LeftContainer = styled(Box)`
  background-color: white;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #eeeeee;
`;

export const RightContainer = styled(Box)`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 1200px) {
    display: none;
  }
`;

export const Image = styled.img`
  max-width: 100%;
  object-fit: contain;
`;
