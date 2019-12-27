import React from 'react'

function User() {
    return (
        <div className='user'>
            <div className="title">
               <h4>My and she one day</h4>
            </div>
            <div className="photomessage">
               <h5 className='time'>2019/12/24 -</h5>
               <h5 className='number'> -   6 Photos</h5>
               <h5>man and girl</h5>
            </div>            
            <style jsx>{`
                .user {
                  
                   color:#3b3e43;        
                }
                .user>div{
                 margin-bottom:0.2vh;
                }
               .title {
                   color:blue;
                   font-size:1.4rem;
               }

               .time,.number {
                   display:inline-block;
               }
            `}
            </style>
        </div>
    )
}

export default User
