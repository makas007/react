import './App.css';
import React, { createRef } from 'react';
import { useState } from 'react';


const App  = () => {


  let [st1, setSt1] = useState('')
  let refka1 = createRef()

  let [st2, setSt2] = useState(0)
  let [st3, setSt3] = useState()
  let [st4, setSt4] = useState(0)
  let [st5, setSt5] = useState(0)
  let [st6, setSt6] = useState()
  let [st7, setSt7] = useState()
  const [st8, setSt8] = useState(0)

  let refTask7 = createRef()
 



  React.useEffect(() => {
    console.log(st6); 
  }, [st6]);

  function task1() {
    setSt1(refka1.current.value)
    console.log(refka1);
  }
  function task2() {
    
    // let count = st2
    // count++
    // setSt2(count)
    setSt2(++st2)
    console.log(st2);
  }
  function task3(e) {
    setSt3(e.target.value) 
  }
  function task4() {
    setSt4(++st4)
    console.log(st4);

  }
  function task5(e) {
    if(e.target.checked) {
      console.log(st5);
      setSt5(e.target.value)
    } else {
      console.log(st5);
      setSt5(0)

    }
  }
  function task6(e) {
    
    console.log(e);
    setSt6(e.target.value)
  }

  function randomInt(max) {
    return Math.floor(Math.random() * max)
  }

  function task7(e) {
    let a = randomInt(255);
    let b = randomInt(255);
    let c = randomInt(255);
    setSt7(`rgb(${a},${b},${c})`);
    refTask7.current.style = `background: ${st7}` 
  }
  function task8(e) {
    console.log(st8);
    if(/[0-9]/.test(e.target.value.slice(-1))) {
      setSt8(st8 + '1')
    } else {
      setSt8(st8 + '0')
    }
  }
  // function task9() {

  // }
  // function task10() {

  // }

  return (
    <>
      <h1>События</h1>
      <section>
        <h2>Task 1</h2>
		<input type="text"  ref={refka1} />
        <button className="task-1" onClick={task1}>Push</button>
        <div>{st1}</div>
      </section>
         <section>
        <h2>Task 2</h2>
        <div className="task-2" onMouseEnter={task2}></div>
        <div>{st2}</div>
      </section>
      <section>
        <h2>Task 3</h2>
        <input type="text" className="task-3" onInput={task3} />
        <div>{st3}</div>
      </section>
      <section>
        <h2>Task 4</h2>
        <button className="task-4" onClick={task4}>Count</button>
        <div>{st4}</div>
      </section>
      <section>
        <h2>Task 5</h2>
        <input type="checkbox" currentValue="55" onChange={task5}/>
        <div>{st5}</div>
      </section>
      <section>
        <h2>Task 6</h2>
        <select className="task-6" onChange={task6}>
          <option value="7">seven</option>
          <option value="4">four</option>
          <option value="9">nine</option>
          <option value="10">ten</option>
        </select>
        <div>{st6}</div>
      </section>
      <section>
        <h2>Task 7</h2>
        <div className="block-7" ref={refTask7}></div>
        <button className="task-7" onClick={task7}>Color</button>
        <div>{st7}</div>
      </section>
      <section>
        <h2>Task 8</h2>
        <input type="text" className="task-8" onKeyPress={task8}></input>
        <div>{st8}</div>
      </section>

    </>
  );
}

export default App;
