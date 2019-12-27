import React from 'react'

function List() {
    return (
        <div className='List'>
            <ul>
              <li>
                 <div className='number'>
                    12
                 </div>
                 <div className='date'>
                    26号
                 </div>
                 <div className="setting">
                   <button>查看</button>
                   <button>编辑</button>
                 </div>
              </li>
            </ul>
            <style jsx>{`
               .List {
                   width:90%;
                   margin:0 auto;
               }
               .List ul {
                   list-style:none;
                   margin:0;
                   padding:0;
               }
               .List ul li {
                   height:30vh;
                   width:40vw;
                   background:#FB930B;
                   border-radius:20px;
                   display:flex;
                   flex-direction:column;
                   position:relative;
                   overflow:hidden;
               }
               .List ul li .number {
                   width:100%;
                   font-size:20vw;
                   color:white;
                   text-align:center;
               }
               .List ul li .date {
                width:100%;
                font-size:8vw;
                color:#eee;
                text-align:center;
                }
                .List ul li .setting {
                    width:100%;
                    position:absolute;
                    bottom:8px;
                }
                .List ul li .setting button {
                     border:none;
                     background:white;
                     width:40%;
                     margin-left:7%;
                     border-radius:10px;
                }
            `}
            </style>
        </div>
    )
}

export default List
