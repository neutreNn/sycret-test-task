import { CircularProgress } from '@mui/material';
import styled from 'styled-components';

const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
`;

function LoadingComponent() {
  return (
    <LoadingContainer>
      <CircularProgress size='6rem' />
    </LoadingContainer>
  );
}

export default LoadingComponent;
