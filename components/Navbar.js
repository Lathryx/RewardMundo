import { useState, useEffect } from 'react'; 

import Link from 'next/link'; 
import SignUpModal from './SignUpModal'; 
import ProfileModal from './ProfileModal'; 

import firebase from 'firebase/compat/app'; 
import { signInWithEmailAndPassword } from 'firebase/auth';


export default function Navbar({ user, userData, auth, firestore, setUserData }) {    
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
                <Link className="cursor-pointer text-3xl font-bold lg:hidden" href="/">RewardMundo</Link>
            </div>
            <div className="navbar-end">
                { user ? <Profile user={user} userData={userData} auth={auth} firestore={firestore} /> : <SignIn user={user} auth={auth} firestore={firestore} setUserData={setUserData} /> } 
            </div>
            <SignUpModal auth={auth} firestore={firestore} setUserData={setUserData} /> 
        </div>
    ); 
} 

const SignIn = ({ auth, firestore, setUserData }) => {
    const [emailVal, setEmailVal] = useState(''); 
    const [passwordVal, setPasswordVal] = useState(''); 

    const signInWithGoogle = async () => {
        const provider = new firebase.auth.GoogleAuthProvider(); 
        await auth.signInWithPopup(provider); 

        const userData = await firestore.collection('users').doc(auth.currentUser.uid).get(); 
        setUserData(userData.data()); 
    }; 

    const handleSignInWithEmailAndPassword = async () => {
        if (!emailVal || !passwordVal) return; 
        
        try {
            const user = await signInWithEmailAndPassword(auth, emailVal, passwordVal); 
            console.log(user); 
            const userData = await firestore.collection('users').doc(user.user.uid).get(); 
            // console.log(userData.data()); 
            setUserData(userData.data()); 
        } catch (err) {
            console.log(err); 
        }

        setEmailVal(''); 
        setPasswordVal(''); 
    }; 

    return (
        <div className="dropdown dropdown-end">
            <label tabIndex={0} className="lg:mx-5 btn btn-sm lg:btn-md btn-primary hover:text-base-100">Sign in</label>
            <ul tabIndex={0} className="dropdown-content menu p-3 shadow bg-base-100 rounded-box w-64">
                <input className="mb-3 input bg-gray-100 hover:bg-gray-200 focus:bg-gray-200 w-full max-w-xs" type="text" placeholder="Email" value={emailVal} onChange={e => setEmailVal(e.target.value)} />
                <input className="mb-4 input bg-gray-100 hover:bg-gray-200 focus:bg-gray-200 w-full max-w-xs" type="password" placeholder="Password" value={passwordVal} onChange={e => setPasswordVal(e.target.value)} />
                <button className="btn btn-primary w-full max-w-xs normal-case hover:text-base-100" onClick={handleSignInWithEmailAndPassword}>Sign in</button> 
                <div className="divider">or</div>
                <button className="mb-2 btn btn-ghost normal-case" onClick={signInWithGoogle}><img src="/google_icon.png" className="mr-2 w-5 h-5" /> Sign in with Google</button>
                <p className="my-2 text-xs text-center text-gray-500">New to <span className="font-semibold">RewardMundo</span>? <label className="text-secondary hover:underline cursor-pointer" htmlFor="sign-up-modal">Sign up.</label></p>
            </ul>
        </div>
    ); 
}; 

const Profile = ({ user, auth, firestore, userData }) => {
    return auth.currentUser && (
        <div className="mx-5 dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                    <img src={userData?.imgURL} alt="avatar" /> 
                </div>
            </label>
            <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content gap-1 bg-base-100 rounded-box w-52">
                <li>
                    <label htmlFor="profile-modal">
                        <div className="flex items-center gap-2">
                            <div className="avatar">
                                <div className="w-10 rounded-full">
                                    <img src={userData?.imgURL} alt="avatar" /> 
                                </div> 
                            </div> 
                            <div>
                                <p className="text-lg font-bold">{userData?.username}</p>
                                <p className="text-sm font-bold text-secondary">{userData?.points}<span className="text-gray-500">pts</span></p>
                            </div>
                        </div>
                    </label>
                </li>
                <li><Link className="text-base-100 bg-primary hover:bg-secondary hover:drop-shadow-lg" href="/redeem">Redeem</Link></li>
                <li><a>Settings</a></li>
                <li onClick={() => auth.signOut()}><a className="bg-gray-200 hover:bg-gray-300">Sign out</a></li>
            </ul>

            <ProfileModal user={user} firestore={firestore} userData={userData} /> 
        </div>
    ); 
}; 