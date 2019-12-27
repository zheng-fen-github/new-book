import React from 'react'

function Noteslist() {
    return (
        <div className='notecontent'>
            <ul>
                <li> yellow </li>
                <li> blue </li>
                <li> red</li>
            </ul>
            <style jsx>{`
               .notecontent {                
                    height:100%;
                    width:60%;
                    display:flex;
                    justify-content:center;
                    align-items:center;
                    box-shadow: 0 0 6px #eee;
               }
               ul {
                   width:88%;
                   height:88%;
                   background:white;
                   list-style:none;
               }
               li {
                   width:100%;
                   height:30%;
                   margin-bottom:2vh;
                   background:#DC5EAC;
                   color:white;
                   font-size:4rem;
                   display:flex;
                   align-items:center;
                   justify-content:center;

               }
               li:hover {
                   box-shadow: 0 0 6px #666;
               }
               li:active {
                box-shadow: 0 0 0;
                }
               li:nth-child(2n+0) {
                 background:#391AF2;
               }
               li:nth-child(3n+0) {
                background:#F3A08D;
              }
            `}
            </style>
        </div>
    )
}

export default Noteslist
