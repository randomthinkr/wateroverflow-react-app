import React, { useEffect, useState }from 'react';
import './App.css';
import Form from './Components/Form/Form';
import GlassStack from './Components/GlassStack/GlassStack';

const App = (props) => {

const [params, setParams] = useState()
const [searchResult, setSearchResult] = useState()
const [isGlassStackVisible, setGlassStackVisible] = useState()

  const searchCriteria = (search) => {
    setParams({
          ...params,
          rows: search.rows,
          row: search.row,
          column: search.column,
          capacity: search.capacity,
          water: search.water
      });
  };

  const handleSearch = async (event) => {
    setGlassStackVisible(false)
    const fetchData = async () => {
       
        const response = await fetch('http://localhost:8080/api/v1/waterflow/stack?rows='+ params.rows 
                    + '&capacity='+ params.capacity+'&millilitersOfWater='+params.water+'')
        
        const glassStackData = await response.json()

        const waterLevelResponse = await fetch('http://localhost:8080/api/v1/waterflow/waterLevel?rows='+ params.rows 
                    + '&row='+ params.row+'&column='+params.column+'&capacity='+ params.capacity+'&millilitersOfWater='+params.water+'')
        
        const waterLevel = await waterLevelResponse.json()
        
        setSearchResult( {
          ...glassStackData,
          waterLevel: waterLevel
        })
        setGlassStackVisible(true)
    }
    fetchData()
   
};

  document.title = 'Wateroverflow';
  return (
    <>
      <div className='row'>
        <div className='col-4'>
          <Form searchCriteria={searchCriteria} handleSearch={handleSearch}/>
        </div>
        <div className='col-8'>
          { isGlassStackVisible &&
          <GlassStack searchResult = {searchResult}/>
         }
        </div>
      </div>
    </>
  );
};

export default App;
