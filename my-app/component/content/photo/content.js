import React from 'react'
import ContentList from './contentList'


function Content() {
    return (
        <div className='content'>
             <ContentList/>
             <ContentList/>
             <style jsx>{`
             .content {
                height:100%;
                width:84.5%;          
                padding:2vh 4vw;
                overflow:auto;
             }
            `}
            </style>
        </div>
    )
}

export default Content
