import Link from 'next/link';
import React from 'react';




export default function Header( ){
    
    const font = 'Intern'; // Define font variable inside the function

    const style = {
      fontFamily: font,
    };
   
    return(
        <>
        <div className='inter' >
            <ul>
                <li className="link" ><Link href="" >Work</Link></li>
                <li className="link" ><Link href="" >Blog</Link></li>
                <li className="link" ><Link href="" >Contact</Link></li>
            </ul>
        </div>
        </>
    )
}