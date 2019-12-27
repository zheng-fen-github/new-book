import React from 'react'
import Searth from '../jizhang/search.js'
import All from '../jizhang/allnumber.js'
import List from '../jizhang/List.js'



function Jizhang() {
    return (
        <div className='jizhang'>
            <Searth/>
            <All motch = {12}/>
            <List />
            <style jsx>{`
              .jizhang {
                  margin:0;
                  padding:0;
                  box-sizing:border-box;
                  width:100vw;
                  height:100vh;
                  background:#eee;
                  overflow:hidden;
              }
            `}
            </style>
        </div>
    )
}

export default Jizhang
