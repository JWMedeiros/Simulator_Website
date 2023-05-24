import React from 'react';

const Body: React.FC<{ selectedItem: string }> = ({ selectedItem }) => {
  if (selectedItem === 'Item 1') {
    return <div>Content for Item 1</div>;
  } else if (selectedItem === 'Item 2') {
    return <div>Content for Item 2</div>;
  } else if (selectedItem === 'Item 3') {
    return <div>Content for Item 3</div>;
  } else {
    return <div>Please select an item from the header</div>;
  }
};

export default Body;
