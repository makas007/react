import './App.css';
import React, { useState } from 'react';


function App() {
  let count4 = 0;
  let refTast6 = React.createRef()
  let refTask7 = React.createRef()
  let refTask8 = React.createRef()
  let refTask9 = React.createRef()
  let refTask10 = React.createRef()
  const [st2, setSt2] = useState(false)
  const [st8, setSt8] = useState()
  const [st9, setSt9] = useState()


  function task1() {
    console.log("task1");
  }
  function task2(e) {
    // console.log(e.target.className);
    // if (e.target.className.indexOf('active') === -1) {
    //   e.target.className += ' active'
    // }
    setSt2(true)
    // 
  }
  function task4() {
    count4++;
    console.log(count4);
  }
  function task5(e) {
    if(e.target.checked) {
      console.log(e.target.value);
    } else {
      console.log(0);
    }
    
  }
  const task6 = () => {
    console.log(refTast6.current.value);
    // console.log(this);
  }
  function randomInt(max) {
    return Math.floor(Math.random() * max)
  }

  function task7() {
    let a = randomInt(255);
    let b = randomInt(255);
    let c = randomInt(255);
    let t = `rgb(${a},${b},${c})`
    refTask7.current.style = `background: ${t}`
  }

  function task8() {
    // console.log(/[0-9]/.test(refTask8.current.value.slice(-1)));
    console.log(st8);
    if(/[0-9]/.test(refTask8.current.value.slice(-1))) {
      setSt8(st8 + '1')
    } else {
      setSt8(st8 + '0')
    }
  }
  function task9() {
    // console.log(refTask9);
    setSt9(refTask9.current.value)
    refTask9.current.value = st9
    console.log(st9);

  }
  let ar10 = [5, 6, 7];
  function task10() {
    ar10.push(refTask10.current.value)
    console.log(ar10);
    refTask10.current.value = ''
  }

  return (
    <>
      <h1>События</h1>
      <section>
        <h2>Task 1</h2>
        <button className="task-1" onClick={task1}>Push</button>
      </section>
      <section>
        <h2>Task 2</h2>
        <div className={`task-2 ${st2 ? 'active' : ''}`} onMouseEnter={task2}></div>
      </section>
      <section>
        <h2>Task 3</h2>
        <input type="text" className="task-3" />
      </section>
      <section>
        <h2>Task 4</h2>
        <button className="task-4" onClick={task4}>Count</button>
      </section>
      <section>
        <h2>Task 5</h2>
        <input type="checkbox" value="55" onChange={ e => task5(e) }/>
        <div className="out-5"></div>
      </section>
      <section>
        <h2>Task 6</h2>
        <select className="task-6" onChange={ () => task6() } ref={refTast6}>
          <option value="7">seven</option>
          <option value="4">four</option>
          <option value="9">nine</option>
          <option value="10">ten</option>
        </select>
      </section>
      <section>
        <h2>Task 7</h2>
        <div className="block-7" ref={refTask7}></div>
        <button className="task-7" onClick={task7} >Color</button>
      </section>
      <section>
        <h2>Task 8</h2>
        <input type="text" className="task-8" onKeyPress={task8} ref={refTask8}></input>
        <div className="out-8"></div>
      </section>
      <section>
        <h2>Task 9</h2>
        <input type="range" className="task-9" onInput={task9} ref={refTask9}></input>
        <div className="out-9"></div>
      </section>
      <section>
        <h2>Task 10</h2>
        <input type="number" className="i-10" ref={refTask10} ></input>
        <button className="task-10" onClick={task10}>Push</button>
      </section>
    </>
  );
}

export default App;
