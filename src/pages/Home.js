import * as React from 'react';


export default function Home() {

    const mystyle1 = {
        color: "white",
        backgroundColor: "DodgerBlue",
        padding: "10px",
        fontFamily: "Arial"
      };

     

    return (
        <>
         
            <h1 className='bigblueText'>Welcome</h1>
            
            <div> <h3 className='managerText'>Managers:</h3> </div>
            <div>
             <text className='infoText'>On this web application, managers can add new jobs to a list of jobs, and then view individual jobs.</text>
            </div>
            <div>
            <div> <h3 className='employeeText'>Managers:</h3> </div>
            <text className='infoText'>Managers can access these features by navigating to the Managers tab on the nav bar.</text>
            </div>
           
 
            
        </>
    )
}