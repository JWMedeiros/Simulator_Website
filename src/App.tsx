import React, { useState } from 'react';
import Header from './components//Header/Header';
import Body from './components/Body/Body';
import Footer from './components/Footer/Footer';

const App: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState('');

  const handleItemClick = (item: string) => {
    setSelectedItem(item);
  };

  return (
    <div className="app">
      <Header selectedItem={selectedItem} onItemClick={handleItemClick} />
      <Body selectedItem={selectedItem} />
      <Footer />
    </div>
  );
};

export default App;
