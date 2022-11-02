import Head from 'next/head'; 
import Image from 'next/image'; 
import styles from '../styles/Home.module.css'; 

import firebase from 'firebase/app'; 
import 'firebase/firestore'; 
import 'firebase/auth'; 

import { useAuthState } from 'react-firebase-hooks/auth'; 
import { useCollectionData } from 'react-firebase-hooks/firestore'; 

export default function Home({ user }) {
  return (
    <div className="min-h-ddfd[93vh]">
      <Head> 
        <title>RewardMundo</title>
        <meta name="description" content="RewardMundo" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="landing pt-20 lg:pt-36 h-[150vh] items-center lg:items-start justify-start lg:justify-center">
        <div className="m-8 lg:m-14">
          <p className="mb-4 lg:mb-2 text-4xl lg:text-7xl font-black">RewardMundo</p> 
          <p className="text-2xl lg:text-4xl font-semibold">Protect our <span className="text-sucdcess font-extrdabold">planet</span>,</p>
          <p className="text-2xl lg:text-4xl text-success font-extrabold">earn <span className="text-sduccess font-extrdabold">rewards</span>.</p>
        </div>

        <div className="m-8 lg:m-14">
          <p className="mb-4 lg:mb-2 text-2xl lg:text-4xl font-semibold">Join the <span className="text-success font-extrabold">movement</span>.</p> 
        </div>

        <div className="mt-80 ml-auto m-10 p-5 lg:w-1/2 rounded-xl">
          <p className="mb-8 text-4xl font-bold">Purpose</p> 
            <div className="p-5 bg-gray-100 rounded-lg">
              <p>Earn exclusive deals from your favorite brands, redeem points for gift cards, and more! </p> 
            </div>
        </div>
      </div> 

    </div> 
  )
}
