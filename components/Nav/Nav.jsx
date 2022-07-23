import Link from 'next/link';
import NavStyle from './Nav.module.css';
import {
    useSession, signIn, signOut
  } from 'next-auth/react'
  
  

const Nav = () => {

const {data:session, status} = useSession()

    return (
        <div className="flex justify-evenly items-center w-1/2">         
           
            <Link href='/'>
                <a className="inline-block bg-gray-200 rounded-full px-11 py-5 text-base font-semibold text-gray-700 mr-2 mb-2">
                   Funny Incidents
                </a>
            </Link>
            <Link href='/add'>
                <a className="inline-block bg-gray-200 rounded-full px-11 py-5 text-base font-semibold text-gray-700 mr-2 mb-2">
                    Share your Incident
                </a>
            </Link>
            {!session && <li className="inline-block bg-gray-200 rounded-full px-11 py-5 text-base font-semibold text-gray-700 mr-2 mb-2"> <button onClick={()=> signIn("google")}>Sign in</button>
        
        </li> }
        
        {session && (     
                    <li className="inline-block bg-gray-200 rounded-full px-11 py-5 text-base font-semibold text-gray-700 mr-2 mb-2">
                        <button onClick={() => signOut()}>Sign out <i className="fas fa-sign-out-alt"></i></button>
                    </li>        
        )}     
      </div>
    )
};

export default Nav;