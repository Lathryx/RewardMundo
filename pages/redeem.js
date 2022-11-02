export default function Redeem({ auth }) {
    return (
        <div className="min-h-[93vh]"> 
            { auth.currentUser ? <Rewards /> : <SignInOrSignUp /> } 
        </div>
    ); 
} 

const Rewards = () => {
    return (
        <div className="p-20">
            <p className="mb-3 max-w-[300px] text-6xl font-bold">Redeem</p>
            <p className="my-2 text-3xl font-bold">Gift Cards</p>
            <div className="carousel carousel-center max-w-md p-10 gap-4 bg-gray-200 rounded-box">
                <div className="carousel-item">
                    <div className="relative w-80 flex items-center justify-center bg-base-100 rounded-xl transition-all scale-100 hover:scale-105 hover:shadow-lg">
                        <p className="absolute top-3 left-3 text-3xl font-bold">$25</p>
                        <img src="/amazon_logo.svg" alt="Amazon Gift Card" className="py-14 w-20" /> 
                        <p className="absolute bottom-3 right-3 text-3xl text-secondary font-bold">1200<span className="text-gray-500">pts</span></p>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="relative w-80 flex items-center justify-center bg-base-100 rounded-xl transition-all scale-100 hover:scale-105 hover:shadow-lg">
                        <p className="absolute top-3 left-3 text-3xl font-bold">$10</p>
                        <img src="/target_logo.svg" alt="Target Gift Card" className="py-14 w-20" /> 
                        <p className="absolute bottom-3 right-3 text-3xl text-secondary font-bold">850<span className="text-gray-500">pts</span></p>
                    </div>
                </div>
            </div>

            <p className="my-2 text-3xl font-bold">Exclusive Deals</p>
            <div className="carousel carousel-center max-w-md p-10 gap-4 bg-gray-200 rounded-box">
                <div className="carousel-item">
                    <div className="relative w-80 flex items-center justify-center bg-base-100 rounded-xl transition-all scale-100 hover:scale-105 hover:shadow-lg">
                        <p className="absolute top-3 left-3 text-3xl font-bold">$25</p>
                        <img src="/amazon_logo.svg" alt="Amazon Gift Card" className="py-14 w-20" /> 
                        <p className="absolute bottom-3 right-3 text-3xl text-secondary font-bold">1200<span className="text-gray-500">pts</span></p>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="relative w-80 flex items-center justify-center bg-base-100 rounded-xl transition-all scale-100 hover:scale-105 hover:shadow-lg">
                        <p className="absolute top-3 left-3 text-3xl font-bold">$10</p>
                        <img src="/target_logo.svg" alt="Target Gift Card" className="py-14 w-20" /> 
                        <p className="absolute bottom-3 right-3 text-3xl text-secondary font-bold">850<span className="text-gray-500">pts</span></p>
                    </div>
                </div>
            </div>
        </div>
    ); 
}; 

const SignInOrSignUp = () => {
    return (
        <div className="mt-80 flex items-center justify-center">
            <p className="text-3xl text-gray-500 font-semibold">You must <span className="text-secondary font-bold">sign in</span> or <span className="text-secondary font-bold">create a new account</span> to view reward opportunities.</p>
        </div>
    ); 
}; 