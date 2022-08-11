import React from 'react';
import BlurCard from './components/BlurCard/BlurCard';

function App() {
  return (
    <BlurCard imageURL={window.location.origin + "/images/dope-labs-podcast-logo.jpg"} />
  );
}

export default App;
