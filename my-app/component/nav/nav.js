import React from 'react'

function Nav() {
    return (
        <nav>
           <div className="search">
                <svg t="1577168533717" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1293" width="40" height="40"><path d="M952.064 901.39648l-167.40864-167.40864c59.72992-71.15776 95.75424-162.88768 95.75424-263.06048 0-226.1504-183.33184-409.48224-409.48224-409.48224C244.77184 61.44 61.44 244.77184 61.44 470.92224s183.33184 409.48224 409.48224 409.48224c100.1728 0 191.90272-36.0192 263.06048-95.74912l167.40864 167.40864a35.82976 35.82976 0 0 0 50.67264-50.66752zM133.09952 470.92224c0-186.27584 151.54688-337.82272 337.82272-337.82272s337.82272 151.54688 337.82272 337.82272-151.54688 337.82272-337.82272 337.82272-337.82272-151.54688-337.82272-337.82272z" fill="#666666" p-id="1294"></path></svg>
                <input type="text" 
                    placeholder='Search'
                    name="search" 
                    id="search"/>
            </div>
            <style jsx>{`
               nav{                    
                    height:8%;
                    display:flex;
                    justify-content:flex-end;
                    align-items:center;
                    overflow:hidden;

                }
                .search {
                    background:#f0f4f7;
                    height:70%;   
                    margin-right:2vw;
                    border-radius:36px;
                    display:flex;
                    align-items:center;
                }
                .search svg {
                    height:60%;
                    opacity:0.6;
                }
                .search input {
                    height:100%;
                    width:80%;
                    border:none;
                    font-size:100%;
                    vertical-align:center;
                    background:none;
                    opacity:0.6;
                    outline:none;
                }
            `}
            </style>
        </nav>
    )
}

export default Nav
