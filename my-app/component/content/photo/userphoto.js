import React from 'react'
import Mero from './mero.js'
function Photo() {
    return (
        <div className='photoContainer'>
            <ul className='photoList'>
              <li className='one'>
                <img src='/big.jpg'></img>
              </li>
              <li>
                <img src='/min-1.jpg'></img>
              </li>
              <li>
                <img src='/min-2.jpg'></img>
              </li>   
              <Mero/>     
            </ul>
            
            <style jsx>{`
                .photoContainer {
                    height:36.8vh;
                    margin-bottom:2vh;
                }
                .photoContainer ul {
                    list-style:none;
                    height:100%;
                    margin-top:1vh;
                    display:flex;
                    flex-direction:column;
                    flex-wrap:wrap;
                    align-content:flex-start;
                }

                .photoContainer .one {
                    height:36.8vh;
                    width:36.8vh;
                    background:yellow;
                    margin:0;
                }
                .photoContainer li {
                   margin-left:1vh;
                   margin-bottom:1vh;
                   height:17.9vh;
                   width:17.9vh;
                   background:black;
                   overflow:hidden;
                   display:flex;
                   align-items:center;
                 }
                 .photoContainer li:hover {        
                    box-shadow:0 0 6px #888;                
                 }
                 .photoContainer li:nth-child(2n+1) {
                    margin-bottom:0;
                 }
                 .photoContainer li img {
                     width:100%;
                     height:auto;
                 }
            `}
            </style>
        </div>
    )
}

export default Photo
