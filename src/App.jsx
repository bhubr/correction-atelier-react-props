import React from 'react';
import Avatar from './components/Avatar';

function App() {
  return (
    <div className="App">
      <Avatar firstName="Homer" lastName="Simpson" age={40} image="https://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png" />
      <Avatar firstName="Marge" lastName="Simpson" age={38} image="https://upload.wikimedia.org/wikipedia/en/0/0b/Marge_Simpson.png" />
      <Avatar firstName="Lisa" lastName="Simpson" age={12} image="https://upload.wikimedia.org/wikipedia/en/thumb/e/ec/Lisa_Simpson.png/220px-Lisa_Simpson.png" />
    </div>
  );
}

export default App;
