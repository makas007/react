import React from "react";
import { useSelector, useDispatch } from 'react-redux'
import { getAllRates } from "../store/storeData";
import { useEffect, useState } from 'react';

function Currencies() {
  const allCurrencies = useSelector(state => state.storeData.allCurrencies);
  const selectedDefault = useSelector(state => state.storeData.selectedDefault);
  console.log(allCurrencies, 'allDATA');
  const dispatch = useDispatch();
  const [nameCurrency, setNameCurrency] = useState('UAH');
  const [viewCurrencies, setViewCurrencies] = useState([]);


  useEffect(() => {
    convert(selectedDefault)
    console.log('useeffect');
  },[])



  function convert(name){
    let arr = []
    for(let item in allCurrencies){
      if(item !== name) {
        arr.push({
          name: item,
          value: (1 / allCurrencies[item] * allCurrencies[name]).toFixed(3)
        })
      }
    }
    console.log(arr);
    setViewCurrencies(arr)
  }

  function handleChangeCurrency(e){
    setNameCurrency(e.target.value)
    convert(e.target.value)
    console.log('qqq');
    console.log(selectedDefault);

  }

   return (
    <div className="currencies">
      <div className="current-option">
        <select name="currencies" className="dd-currencies" 
        onChange={handleChangeCurrency} defaultValue={nameCurrency}>
          {Object.entries(allCurrencies).map(([key,value]) => (
            <option value={key}>{key}</option>
          ))}
        </select>
      </div>
      <div className="current-list">
        <ul>
          {viewCurrencies.map((item) => (
            <div className="name-rate">
              <div className="name">1 {item.name} = </div>
              <div className="rate">{item.value} {nameCurrency}</div>
            </div>
           
          ))}
          {/* {viewCurrencies.map((item) => (
            <div>{item.name}</div>
          ))} */}
        </ul>
      </div>
    </div>
  )
}
export default Currencies;