import React from "react";
import { useState, useEffect } from "react";
import axios from 'axios';
import { getAllRates } from "../store/storeData";
import { useDispatch, useSelector } from "react-redux"


function Main() {
  const [inputValue, setInputValue] = useState();
  // const [currencies, setCurrencies] = useState();
  const [convertResult, setConvertResult] = useState();
  const [isOk, setIsOk] = useState(false);
  const [objWithParam, setObjWithParam] = useState();
  const dispatch = useDispatch();
  const allCurrencies = useSelector(state => state.storeData.allCurrencies)


  useEffect(() => {
    // getCurrecyReq();
    dispatch(getAllRates())
  },[dispatch])

  function getResult(e){
    
    if(e.key === 'Enter'){
      let numPattern  = /(\b\d+\.\d+\b)|\d+/g;
      let num = inputValue.match(numPattern)
      let numFrom = num[0].length
      let numTo = inputValue.indexOf('in') + 2;
      let params = {
        value: num[0],
        from: inputValue.substr(numFrom, 4).trim().toUpperCase(),
        to: inputValue.substr(numTo, 4).trim().toUpperCase()
      }
      console.log(params);
      setObjWithParam(params)
  
      if(params.from === 'RUB' || params.to === 'RUB'){
        convertWithRub(params);
      } else {
        convertWithoutRub(params);
      }
      setIsOk(true)
    }
  }
  function convertWithRub(obj) {
    if(obj.from === 'RUB'){
      let a = obj.value * allCurrencies[obj.to]
      console.log(a, 'aa');
      setConvertResult(a.toFixed(2))
    }
    if(obj.to === 'RUB'){
      let b = obj.value / allCurrencies[obj.from]
      console.log(b, 'bb');
      setConvertResult(b.toFixed(2))
    }
  }

  function convertWithoutRub(obj){
    let num = obj.value / allCurrencies[obj.from] * allCurrencies[obj.to];
    console.log(num, 'num');
    setConvertResult(num.toFixed(2))
  }

  // function getCurrecyReq(){
  //   axios.get('https://www.cbr-xml-daily.ru/latest.js').then((responce) => {
  //     setCurrencies(responce.data.rates)
  //   })
  //   console.log('request');
  // }



   return (
     <div className="wrapper-main">
      <p>Enter request for example: <i>100 usd <b>in</b> eur</i></p>
      <div className="main">
        <input type="text" placeholder="Enter your request" className="main-input" onChange={e => setInputValue(e.target.value)} onKeyPress={getResult}/>
        <button className="btn" onClick={getResult} >GO</button>

      </div>
      <div className="view-currency">
        {isOk && 
          <h2>{objWithParam.value} {objWithParam.from} = {convertResult} {objWithParam.to} </h2>
        }
      </div>
     </div>
    
  )
}
export default Main;