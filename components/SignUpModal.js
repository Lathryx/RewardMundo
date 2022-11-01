import { useState } from 'react'; 
import firebase from 'firebase/compat/app'; 

export default function SignUpModal({ auth, firestore, setUserData }) {
    const [name, setName] = useState(''); 
    const [email, setEmail] = useState(''); 
    const [password, setPassword] = useState(''); 
    const [passwordConfirm, setPasswordConfirm] = useState(''); 

    const signInWithGoogle = async () => {
        const provider = new firebase.auth.GoogleAuthProvider(); 
        await auth.signInWithPopup(provider); 

        const userData = await firestore.collection('users').doc(auth.currentUser.uid).get(); 
        setUserData(userData.data()); 
    }

    const signUp = async () => {
        if (!name || !email || !password || !passwordConfirm) return; 
        if (password !== passwordConfirm) return; 

        try {
            const newUser = await auth.createUserWithEmailAndPassword(email, password);  
            const newUserData = {
                createdAt: firebase.firestore.FieldValue.serverTimestamp(), 
                imgURL: '/profile_icon.svg', 
                email: email, 
                username: name, 
                points: 500, 
                totalPoints: 500 
            }; 

            // console.log("newUser: ", newUser); 
            await firestore.collection('users').doc(newUser.user.uid).set(newUserData); 
            const userData = await firestore.collection('users').doc(newUser.user.uid).get(); 
            setUserData(userData.data()); 
            // console.log("userData: ", userData.data()); 

            setName(''); 
            setEmail(''); 
            setPassword(''); 
            setPasswordConfirm('');     
        } catch (err) {
            switch (err.code) {
                case 'auth/email-already-in-use': 
                    console.log(`Email address ${email} is already in use.`); 
                    break; 
                case 'auth/invalid-email': 
                    console.log(`Email address ${email} is invalid.`); 
                    break; 
                case 'auth/operation-not-allowed': 
                    console.log('Error during sign-up process.'); 
                    console.log(err); 
                    break; 
                case 'auth/weak-password': 
                    console.log('Password is not strong enough. Add additional characters including special characters and numbers.'); 
                    break; 
                default: 
                    console.log(err.message); 
            } 
        }
    }; 

    return (
        <div>
            <input className="modal-toggle" type="checkbox" id="sign-up-modal" /> 
            <label className="modal cursor-pointer" htmlFor="sign-up-modal">
                <label className="modal-box relative" htmlFor="">
                    <label className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2  border-none" htmlFor="sign-up-modal">&times;</label> 
                    <p className="text-4xl font-bold">Sign Up</p> 
                    <p className="pt-3 pb-3 text-sm">Create a new account for RewardMundo using the form below.</p>
                    <div className="p-5 flex flex-col items-center justify-center gap-3 bg-gray-100 rounded-lg">
                        {/* <label className="label"><span className="label-text font-semibold">Full Name</span></label> */}
                        <input className="input input-sm py-4 bg-gray-200 hover:bg-base-100 focus:bg-base-100 w-full madx-w-xs border-2" type="text" placeholder="Full Name" value={name} onChange={e => setName(e.target.value)} /> 
                        {/* <label className="label"><span className="label-text font-semibold">Email</span></label> */}
                        <input className="input input-sm py-4 bg-gray-200 hover:bg-base-100 focus:bg-base-100 w-full madx-w-xs border-2" type="text" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} /> 
                        {/* <label className="label"><span className="label-text font-semibold">Password</span></label>  */}
                        <input className="input input-sm py-4 bg-gray-200 hover:bg-base-100 focus:bg-base-100 w-full madx-w-xs border-2" type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} /> 
                        {/* <label className="label"><span className="label-text font-semibold">Confirm Password</span></label>  */}
                        <input className="input input-sm py-4 bg-gray-200 hover:bg-base-100 focus:bg-base-100 w-full madx-w-xs border-2" type="password" placeholder="Confirm Password" value={passwordConfirm} onChange={e => setPasswordConfirm(e.target.value)} /> 
                        <button className="mt-3 btn btn-primary btn-block hover:text-base-100" onClick={signUp}>Sign Up</button> 
                    </div>
                    <div className="divider">or</div> 
                    <button className="mb-2 w-full btn btn-ghost normal-case" onClick={signInWithGoogle}><img src="/google_icon.png" className="mr-2 w-5 h-5" /> Sign in with Google</button>
                    <label className="w-full btn text-neutral bg-gray-200 hover:bg-gray-300 border-none" htmlFor="sign-up-modal">Cancel</label> 
                </label>
            </label>
        </div>
    ); 
}