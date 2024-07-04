import React from 'react';
import { faWarning } from '@fortawesome/free-solid-svg-icons';
import { Icon, Container, StyledTypography } from './style';

interface Props {
  message: string;
  icon?: boolean;
}

const ErrorMessage: React.FC<Props> = ({ message, icon = false }) => {
  if (!message) return;

  return (
    <Container>
      {icon && <Icon icon={faWarning} color="error" />}
      <StyledTypography color={'error'} variant="body1">
        {message}
      </StyledTypography>
    </Container>
  );
};

export default ErrorMessage;
