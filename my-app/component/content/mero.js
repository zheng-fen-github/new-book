import React from 'react'

function merobu() {
    return (
        <div className='mero'>
            <div className="photonumber">
                <p>24</p>
                <button>
                  <svg t="1577351436751" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2375" width="50" height="50"><path d="M906.56 421.44L214.4 44.48A102.08 102.08 0 0 0 64 135.04v753.92a102.08 102.08 0 0 0 150.4 90.56l692.16-376.96a103.36 103.36 0 0 0 0-181.12z" fill="#364F6B" p-id="2376"></path></svg>
                </button>
            </div>             
            <div className="title">
              <h3>More photos</h3>
            </div>
            <style jsx>{`
                .mero  {
                    width:15%;
                    height:100%;
                    margin-left:1vh;
                    border:2px #eee solid;  
                    display:flex;
                    flex-direction:column;  
                    justify-content:center;
                    align-items:center;            
                }
                .mero:hover {
                    box-shadow:0 0 10px #eee;
                }
                .mero:hover button{
                  margin-left:4vh;
                }
                .mero:hover .title{
                    opacity:1;
                  }
                .photonumber {
                    width:100%;
                    display:flex;
                    justify-content:center;
                }
                .photonumber p {
                    font-size:6vh;
                }
                .photonumber button {
                    background:none;
                    border:none;
                    outline:none;
                    margin-left:2vh;
                    transition:margin 0.3s;
                }
                .photonumber svg {
                    height:2vh;
                    width:2vh;
                }
                .mero .title {
                    text-align:center;
                    margin-top:2vh;
                    opacity:0.5;
                }
            `}
            </style>
        </div>
    )
}

export default merobu
