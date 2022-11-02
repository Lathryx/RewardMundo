import Head from 'next/head'; 

export default function About() {
    return (
        <div className="min-h-[93vh]">
            <Head>
                <title>About - RewardMundo</title>
                <meta name="description" content="About RewardMundo" /> 
            </Head> 

            <div className="p-20">
                <p className="mb-20 pb-3 max-w-[400px] text-4xl font-bold border-b-2 border-b-gray-200">About RewardMundo</p> 
                <p>Air pollution has greatened with the evolution of machinery, more specifically in transportation with vehicles such as cars, motorcycles, buses, semitrucks, and trains. This contaminated air pollutes busy cities like Mexico City or Tokyo, damaging quality of life and costing our governments nearly $3 trillion (USD) internationally every year! <span className="font-semibold">RewardMundo</span> hopes to motivate the world to use more environmentally conscious means of transportation. </p> 
            </div>
        </div>
    ); 
}