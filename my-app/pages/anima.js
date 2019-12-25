import React,{useState} from 'react'

function Anima() {
    const [id , setId] = useState({
        evebt() {
            console.log('nice')  
            document.querySelector('div#go').classList.toggle('go');
        }
    });
    const qie = () =>{
        const div = document.querySelector('div#go');
        div.removeEventListener('transitionend',id.evebt);
    };
    const scale = (e) => {
        e.target.parentElement.classList.add('go');
        let parent = e.target.parentElement;               
        parent.addEventListener('transitionend',id.evebt);
    }
    return (
        <>
        <div id='go'>
            go
            <button onClick={scale}>ck</button>            
        </div>
        <button onClick={qie}>nice</button>
        <style jsx>{`
               div {
                   width:400px;height:20px;
                   margin:0 auto;
                   margin-top:40vh;
                   background:black;
                   color:white;
                   line-height:20px;
                   text-align:center;
                   transform-origin:right center;
                   transition:transform 1s;
                   transform:scale(1,1);
               }
               .go {
                   transform-origin:left center;
                   transform:scale(0,1);
                   transition:transform 0.5s;
               }
            `}
            </style>
        </>
    )
}

export default Anima
