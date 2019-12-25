import React from 'react'
import Select from './lookselect.js'
function Sidebar() {
    return (
        <div className='sidebar'>
            <div className="addnew">
               <h3>Add New</h3>
               <div className="photo">
                 <svg t="1577171979216" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2656" ><path d="M902.343 570.936h-331.78v331.833c0 32.337-26.226 58.537-58.564 58.537-32.337 0-58.563-26.2-58.563-58.537V570.936H121.654c-32.364 0-58.564-26.2-58.564-58.538 0-32.325 26.203-58.537 58.564-58.537h331.78V122.028c0-32.325 26.226-58.537 58.563-58.537 32.338 0 58.564 26.213 58.564 58.537v331.834h331.78c32.364 0 58.565 26.211 58.565 58.535-0.001 32.337-26.2 58.536-58.565 58.536z" p-id="2657"></path></svg>
                 <h4>Photo</h4>                 
               </div>
               <div className="notes">
                 <svg t="1577171979216" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2656" ><path d="M902.343 570.936h-331.78v331.833c0 32.337-26.226 58.537-58.564 58.537-32.337 0-58.563-26.2-58.563-58.537V570.936H121.654c-32.364 0-58.564-26.2-58.564-58.538 0-32.325 26.203-58.537 58.564-58.537h331.78V122.028c0-32.325 26.226-58.537 58.563-58.537 32.338 0 58.564 26.213 58.564 58.537v331.834h331.78c32.364 0 58.565 26.211 58.565 58.535-0.001 32.337-26.2 58.536-58.565 58.536z" p-id="2657"></path></svg>
                 <h4>Notes</h4>
               </div>
               <div className="video">
                 <svg t="1577171979216" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2656" ><path d="M902.343 570.936h-331.78v331.833c0 32.337-26.226 58.537-58.564 58.537-32.337 0-58.563-26.2-58.563-58.537V570.936H121.654c-32.364 0-58.564-26.2-58.564-58.538 0-32.325 26.203-58.537 58.564-58.537h331.78V122.028c0-32.325 26.226-58.537 58.563-58.537 32.338 0 58.564 26.213 58.564 58.537v331.834h331.78c32.364 0 58.565 26.211 58.565 58.535-0.001 32.337-26.2 58.536-58.565 58.536z" p-id="2657"></path></svg>
                 <h4>Video</h4>
               </div>               
            </div> 
            <Select/>           
            <style jsx>{`
            .sidebar {
              height:100%;
              width:15.5%;
              color:#96a3ac;
              display:flex;
              flex-direction:column;
              align-items:center;
            }
            .sidebar h3 {
              color:black;
            }
            .sidebar .addnew {
              width:80%;
              border-bottom:2px #f0f4f7 solid;
              margin-top:4vh;
              padding-bottom:2vh;
            }
            .sidebar .addnew div {
              margin-top:2vh;
              display:flex;
              align-items:center;
            }
            .sidebar .addnew div svg {
              height:2vh;
              opacity:0.5;
              margin:0 0.8vw;
            }
            `}
            </style>
        </div>
    )
}

export default Sidebar
