import React, { useEffect, useState } from 'react';

const ApiData = () => {
  const [apiData, setApiData] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/v1/data')
      .then((response) => response.json())
      .then((data) => {
        setApiData(data.message);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      {loading ? (
        <div data-testid="loading">Loading...</div>
      ) : (
        <div data-testid="api-data">{apiData}</div>
      )}
    </div>
  );
};

export default ApiData;
