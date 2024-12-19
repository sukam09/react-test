import { useEffect } from 'react';

function Child({ chartTrigger, setIsLoading, onClick }) {
  const fetchDiagramList = async () => {
    console.log('fetching start...');
    await new Promise(resolve => {
      setTimeout(() => {
        console.log('fetching end.');
        resolve();
      }, 3000);
    });
  };

  useEffect(() => {
    const refetchDiagramList = async () => {
      setIsLoading(true);
      await fetchDiagramList();
      setIsLoading(false);
    };
    refetchDiagramList();
  }, [chartTrigger]);

  return <button onClick={onClick}>Chart Trigger Test</button>;
}

export default Child;
