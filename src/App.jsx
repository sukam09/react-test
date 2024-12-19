import { useState, useEffect } from 'react';
import Child from './Child';
import './App.css';

function App() {
  const [chartTrigger, setChartTrigger] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = () => {
    setChartTrigger(chartTrigger + 1);
  };

  const captureImage = () => {
    console.log('image captured!!!!!!!');
  };

  useEffect(() => {
    if (chartTrigger === 0) return;

    console.log('Parent effect called', chartTrigger, isLoading);

    if (!isLoading) {
      captureImage();
    }
  }, [chartTrigger, isLoading]);

  useEffect(() => {
    console.log('isLoading test:', isLoading);
  }, [isLoading]);

  return (
    <Child
      chartTrigger={chartTrigger}
      setIsLoading={setIsLoading}
      onClick={handleClick}
    />
  );
}

export default App;
