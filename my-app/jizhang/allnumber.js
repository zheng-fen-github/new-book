import React from 'react'

function All({motch}) {
    return (
        <div className='all'>
            <div className='number'>
              <h1>
                255 金额
              </h1>
            </div>
            <div className="motch">
              <h2>
                {motch}月
              </h2>
            </div>            
            <style jsx> {`
              .all {
                  margin:4vh 0 0 11%;
                  font-size:1rem;
              }
              .number {
                  line-height:1rem;
              }
              .motch {
                  margin:0;
                  font-size:0.8rem;
                  line-height:0.8rem;
              }
            `}
            </style>
        </div>
    )
}

export default All
