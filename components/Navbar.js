import Link from 'next/link'; 

import firebase from 'firebase/compat/app'; 

export default function Navbar({ user, auth }) {
    return (
        <div className="navbar bg-base-100 top-0 sticky b border-b-2 border-b-gray-200 z-10"> 
            <div className="navbar-start">
                <Link className="cursor-pointer mx-3 text-3xl font-bold hidden lg:block" href="/">RewardMundo</Link>
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg> 
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link href="/about">About</Link></li> 
                        <li><Link href="/leaderboard">Leaderboard</Link></li> 
                    </ul>
                </div>
                {/* <a className="btn btn-ghost normal-case text-3xl">RewardMundo</a> */}
            </div>
            <div className="navbar-center">
                <ul className="hidden lg:flex gap-4 menu menu-horizontal p-0">
                    <li><Link href="/about">About</Link></li> 
                    <li><Link href="/leaderboard">Leaderboard</Link></li> 
                </ul>
                <p className="text-3xl font-bold lg:hidden">RewardMundo</p>
            </div>
            <div className="navbar-end">
                { user ? <Profile user={user} auth={auth} /> : <SignIn auth={auth} /> } 
            </div>
        </div>
    ); 
} 

const SignIn = ({ auth }) => {
    const signInWithGoogle = () => {
        const provider = new firebase.auth.GoogleAuthProvider(); 
        auth.signInWithPopup(provider); 
    }; 

    return (
        <button className="mx-5 btn btn-primary" onClick={signInWithGoogle}>Log in</button>
    ); 
}; 

const Profile = ({ user, auth }) => {
    console.log(user); 

    return auth.currentUser && (
        <div className="mx-5 dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                    <img src={user.photoURL} alt="avatar" /> 
                </div>
            </label>
            <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content gap-1 bg-base-100 rounded-box w-52">
                <p className="px-4 py-2 font-bold">{user.displayName}</p>
                <li><a>Profile</a></li>
                <li><a>Settings</a></li>
                <li onClick={() => auth.signOut()}><a className="bg-gray-200 hover:bg-gray-300">Sign out</a></li>
            </ul>
        </div>
    ); 
}; 