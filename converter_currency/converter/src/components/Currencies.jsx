import React from "react";
import { useSelector } from 'react-redux'

function Currencies() {
  let a = 'https://docs.openexchangerates.org/docs/latest-json'
  const allCurrencies = useSelector(state => state.storeData.allCurrencies);
  console.log(allCurrencies, 'allDATA');



   return (
    <div className="currencies">
      <div className="current-option">
        <select name="currencies" className="dd-currencies">
          <option value="UAH">UAH</option>
        </select>
      </div>
      <div className="current-list">
        <ul>
          {Object.entries(allCurrencies).map(([key, value]) => (
            <>
              <div>{key}</div>
              <div>{value}</div>
            </>
           
          ))}
        </ul>
      </div>
    </div>
  )
}
export default Currencies;