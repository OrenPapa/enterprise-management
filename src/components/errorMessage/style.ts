import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';
import { Typography, Box } from '@mui/material';

export const Container = styled(Box)`
  display: flex;
  align-items: center;
`;

export const StyledTypography = styled(Typography)`
  margin: 0;
  line-height: 0;
`;

export const Icon = styled(FontAwesomeIcon)`
  color: #f44336;
  margin: 0 4px 1px 0;
`;
