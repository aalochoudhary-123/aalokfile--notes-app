import React, { useState } from 'react';
import './App.css'; 

function App() {
  const [colors, setColors] = useState(Array(9).fill('white'));
  const [clickedOrder, setClickedOrder] = useState([]);

  const handleClick = (index) => {
   
    if (!clickedOrder.includes(index)) {
      const newColors = [...colors];
      newColors[index] = 'green'; 
      setColors(newColors);

      const newOrder = [...clickedOrder, index];
      setClickedOrder(newOrder);

  
      if (index === 8) {
        changeToOrange(newOrder);
      }
    }
  };


  const changeToOrange = (order) => {
    order.forEach((idx, i) => {
      setTimeout(() => {
        const newColors = [...colors];
        newColors[idx] = 'orange'; 
        setColors([...newColors]);
      }, i * 500); 
    });
  };

  return (
    <div style={styles.container}>
      {colors.map((color, index) => (
        <div
          key={index}
          onClick={() => handleClick(index)}
          style={{ ...styles.box, backgroundColor: color }}
        >
          {index + 1}
        </div>
      ))}
    </div>
  );
}

const styles = {
  container: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 100px)',
    gap: '10px',
    justifyContent: 'center',
    marginTop: '50px',
  },
  box: {
    width: '100px',
    height: '100px',
    border: '2px solid #333',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    fontSize: '24px',
    fontWeight: 'bold',
  },
};

export default App;