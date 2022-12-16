import { useState } from 'react'; 

export default function ProfileModal({ user, firestore, userData, setUserData }) {
    const [editProfile, setEditProfile] = useState(false); 

    const handleSetEditProfile = (e, val) => {
        e.preventDefault(); 
        setEditProfile(val); 
    }


    return (
        <div>
            <input className="modal-toggle" type="checkbox" id="profile-modal" /> 
            <label className="modal cursor-pointer" htmlFor="profile-modal">
                <label className="modal-box relative" htmlFor="">
                    <label className="btn btn-sm btn-square btn-ghost absolute right-2 top-2  border-none" htmlFor="profile-modal">&times;</label> 
                    <p className="mb-5 text-4xl font-bold">Perfil</p> 
                    {/* <p className="pt-3 pb-3 text-sm">Create a new account for RewardMundo using the form below.</p> */}
                    {editProfile ? <EditProfile user={user} userData={userData} firestore={firestore}  setUserData={setUserData} handleSetEditProfile={handleSetEditProfile} /> : <ViewProfile userData={userData} handleSetEditProfile={handleSetEditProfile} />} 
                </label>
            </label>
        </div>
    ); 
}

const ViewProfile = ({ userData, handleSetEditProfile }) => {
    return (
        <div>
            <div className="flex flex-col items-start justify-center">
                <div className="flex items-center gap-2">
                    <div className="avatar">
                        <div className="w-52 rounded-full">
                            <img src={userData?.imgURL} alt="avatar" /> 
                        </div>
                    </div>
                    <div>
                        <p className="text-4xl font-bold">{userData?.username}</p>
                        <p className="text-lg font-bold text-secondary">{userData?.points}<span className="text-gray-500">/{userData?.totalPoints}pts total</span></p>
                <p className="pt-3 pb-3 font-bold">Email: <span className="text-gray-500 font-semibold">{userData?.email}</span></p> 
                    </div>
                </div>
            </div>
            <div className="p-5 flex items-center justify-end gap-2"> 
                <button className="btn btn-primary hover:text-base-100" onClick={e => handleSetEditProfile(e, true)}>Editar</button> 
                <label className="btn text-neutral bg-gray-200 hover:bg-gray-300 border-none" htmlFor="profile-modal">Cerrar</label> 
            </div>
        </div>
    ); 
}

const EditProfile = ({ user, firestore, userData, handleSetEditProfile }) => {
    const [imgURL, setImgURL] = useState(null); 
    const [username, setUsername] = useState(userData?.username); 
    const [email, setEmail] = useState(userData?.email); 

    
    const handleFileChange = e => {
        const fr = new FileReader(); 
        fr.onload = () => {
            setImgURL(fr.result); 
        } 
        fr.readAsDataURL(e.target.files[0]); 
    }; 

    const saveProfile = async e => {
        const newData = {
            username: username, 
            // imgURL: imgURL || userData.imgURL 
        }; 
        
        await firestore.collection('users').doc(user.uid).update(newData); 
        // console.log(newUserData); 
        // setUserData(newUserData).data(); 
        handleSetEditProfile(e, false); 
    }; 

    // console.log(imgFile); 
    return (
        <div>
            <div className="p-5 flex flex-col items-start justify-center">
                <div className="mx-auto avatar">
                    <div className="w-52 rounded-full">
                        <img src={imgURL || userData?.imgURL} alt="avatar" /> 
                    </div>
                </div>
                <input className="mx-auto file-input file-input-sm file-input-ghost" type="file" accept="image/*" onChange={handleFileChange} /> 
                <label className="label"><span className="label-text font-semibold">Usuario</span></label>
                <input className="py-4 input input-primary input-sm w-full madx-w-xs border-2" type="text" placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} /> 
                <label className="label"><span className="label-text font-semibold">Email</span></label>
                {/* <p>Email</p> */}
                <input className="input input-disabled input-sm py-4 bg-gray-200 w-full madx-w-xs border-2" type="text" placeholder="Email" disabled value={email} onChange={e => setEmail(e.target.value)} /> 
            </div>
            <div className="p-5 flex items-center justify-end gap-2"> 
                <button className="btn btn-primary hover:text-base-100" onClick={saveProfile}>Save</button> 
                <button className="btn text-neutral bg-gray-200 hover:bg-gray-300 border-none" onClick={e => handleSetEditProfile(e, false)}>Cancel</button> 
            </div>
        </div>
    ); 
}; 