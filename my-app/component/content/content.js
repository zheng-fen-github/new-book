import React from 'react'
import User from './user'
import PhotoList from './userphoto'


function Content() {
    return (
        <div className='content'>
            <User/>
            <PhotoList/>
            <style jsx>{`
            .content {
                height:100%;
                width:84.5%;          
                padding:2vh 4vw;
                overflow:hidden;
            }

            `}
            </style>
        </div>
    )
}

export default Content
