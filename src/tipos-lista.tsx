
import React, { useState, useEffect } from 'react';
import NaveDataService from './dataNave';

function TiposNaves(props: { searchTitle: string; title: string})  {
  const [data, setData] = useState({ naves: [] });

  useEffect(() => {
    NaveDataService.get(props.searchTitle)
  .then((response: any) => {
    setData(response);
    console.log(response.data);
  })
  .catch((e: Error) => {
    console.log(e);
  });
  }, []);
  
  return (
    <div>
      <div> {props.title}</div>
      {JSON.stringify(data)}
    </div>
  );
}

export default TiposNaves;

