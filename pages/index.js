import { ColorModeScript } from '@chakra-ui/react';
import React, { StrictMode } from 'react';
import App from '../src/App';

function HomePage() {
  return (
    <StrictMode>
      <ColorModeScript />
      <App />
    </StrictMode>
  );
}

export default HomePage;
