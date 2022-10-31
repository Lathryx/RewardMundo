import Head from 'next/head'; 

export default function Leaderboard() {
    return (
        <div className="min-h-[93vh]">
            <Head>
                <title>Leaderboard - RewardMundo</title>
                <meta name="description" content="About RewardMundo" /> 
            </Head> 

            <div className="p-20">
                <p className="pb-3 max-w-[300px] text-4xl font-bold border-b-2 border-b-gray-200">Leaderboard</p> 
            </div>
        </div>
    ); 
}