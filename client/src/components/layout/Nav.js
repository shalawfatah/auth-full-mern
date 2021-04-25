import React, { useContext } from 'react'
import {Link} from 'react-router-dom'
import AuthContext from '../../context/AuthContext'
import LogOutBtn from '../auth/logOut'

const Nav = () => {
    const {loggedIn} = useContext(AuthContext)
    console.log(loggedIn)
    return (
        <div>
            <Link to='/'>Home </Link>
            {
                loggedIn === true && (
                <>
                <Link to='/customers'>Customers</Link>
                <LogOutBtn />
                </>
                ) 
            }
            { loggedIn === false && (
                <>
                <Link to='/register'>Register</Link>
                <Link to='/login'>Login</Link>
                </> 
                )
            }
            
        </div>
    )
}

export default Nav




// import React, { useContext } from "react";
// import { Link } from "react-router-dom";
// import AuthContext from "../../context/AuthContext";
// import LogOutBtn from "../auth/LogOutBtn";

// function Navbar() {
//   const { loggedIn } = useContext(AuthContext);

//   return (
//     <div>
//       <Link to="/">Home</Link>
//       {loggedIn === false && (
//         <>
//           <Link to="/register">Register</Link>
//           <Link to="/login">Log in</Link>
//         </>
//       )}
//       {loggedIn === true && (
//         <>
//           <Link to="/customer">Customers</Link>
//           <LogOutBtn />
//         </>
//       )}
//     </div>
//   );
// }

// export default Navbar;