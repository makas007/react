import React, { useMemo } from "react";
import { useState, useEffect } from "react";
import { getAllRates } from "../store/storeData";
import { useDispatch, useSelector } from "react-redux"


let d = null;


function Main() {
  const [inputValue, setInputValue] = useState('');
  const [example, setExample] = useState(false)
  const [convertResult, setConvertResult] = useState();
  const [isOk, setIsOk] = useState(false);
  const [objWithParam, setObjWithParam] = useState();
  const dispatch = useDispatch();
  const allCurrencies = useSelector(state => state.storeData.allCurrencies)



  useEffect(() => {
    dispatch(getAllRates())
  },[dispatch])




  const getResult = () => {
    setExample(false)
    let numPattern  = /(\b\d+\.\d+\b)|\d+/g;
    let num = inputValue.match(numPattern)
    console.log(parseInt(num));
    if(!parseInt(num)) {
      setExample(true)
      return false
    } 
    let numFrom = num[0].length
    let numTo = inputValue.indexOf('in') + 2;


    let params = {
      value: num[0],
      from: inputValue.substr(numFrom, 4).trim().toUpperCase(),
      to: inputValue.substr(numTo, 4).trim().toUpperCase()
    }

    if(!Object.keys(allCurrencies).includes(params.from) || !Object.keys(allCurrencies).includes(params.to)){
      console.log('ifka ');
      setExample(true)
      return false;
    };
    console.log(params);
    setObjWithParam(params)

    if(params.from === 'RUB' || params.to === 'RUB'){
      convertWithRub(params);
    } else {
      convertWithoutRub(params);
    }
    setIsOk(true)
    
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


  
  const myDebounce = useMemo(() => {
    if(inputValue) {
      clearTimeout(d);
      d = setTimeout(() => {
        getResult();
    }, 1000)
    }
  }, [inputValue])






   return (
     <div className="wrapper-main">
      <p>Enter request for example: <i>100 usd <b>in</b> eur</i></p>
      <div className="main">
        <div className={'main-for-btn'}>
          <input type="text" placeholder="Enter your request" className="main-input" onChange={(e) => {

            setInputValue(e.target.value);
          }}/> 
          <button className={`btn ${inputValue.length > 3? 'btnActive' : ''}`} onClick={getResult} >GO</button>
        </div>

      </div>
      <div className="error">
        {example && 
          <h2>Incorrect entered data</h2>
        }
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