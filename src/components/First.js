import React from 'react'
import { useState, useEffect } from 'react'
import CheckValue from './CheckValue'
import Counter from './Counter'

function First() {
    var [current, changeNumber] = useState(0)
    const randnum = 7
    var flag=3
//     function incr(num) {
//         num = num + 1
//     }
//     function WARNING(flag) {
//         if(flag>2){
//             window.location.reload(false)
//             alert("You have exceeded maximum number of tries. Game has been reloaded.")
//         }
    // }
       return (
        <div class="border border-danger border-5 rounded w-50 position-absolute top-50 start-50 translate-middle">
            
            <div class="border border-info border-5 w-40">
                
            
            {/* <h3 onLo={randnum = Math.floor(Math.random()*10)}></h3> */}
            {/* <h3 onLoad={randnum = 10}></h3> */}
            {/* <h3> Randnum {randnum}</h3> */}
            
            <h1>Welcome to the Guessing Game</h1>
            {/* <div class="spinner-grow" role="status">
  <span class="visually-hidden"></span>
</div> */}
            <h4>Make a guess between 1 and 10</h4>
            <div class="input-group mb-3">
  <span class="input-group-text" id="basic-addon1"></span>
  <input class="form-control  col-10" aria-label="Username" aria-describedby="basic-addon1" type="text" maxLength="2" value={current} onChange={(a) => {changeNumber(Number(a.target.value));} }></input>
</div>
           
            
            <h3>You have Entered {current}</h3>
            </div>
            {/* <Counter current={current} updateHandler={updatecurrent}></Counter> */}
            {/* <h1>Current First {current}</h1> */}

            <CheckValue current={current} randnum={randnum}></CheckValue>
            
            <div>
                <button class="btn btn-secondary btn-danger btn-sm" onClick={() => {changeNumber(current - 1); flag+=1}}>    -    </button>
                <button class="btn btn-secondary btn-success btn-sm" onClick={() => {changeNumber(current + 1); flag+=1}}>    +    </button>
                {/* <div onLoad={() => updateHandler()}></div> */}
            </div>
            {/* <div>
               {() => WARNING({flag})}
            </div> */}
            <h5>USE BUTTONS TO <br/>INCREMENT/DECREMENT VALUE BY ONE</h5>
            
        </div>
    )
}

export default First
