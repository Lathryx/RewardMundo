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
    <div className="min-h-[93vh]">
      <Head> 
        <title>RewardMundo</title>
        <meta name="description" content="RewardMundo" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="pt-20 lg:pt-0 h-screen flex flex-col items-center lg:items-start justify-start lg:justify-center">
        <div className="m-8 lg:m-14">
          <p className="mb-4 lg:mb-2 text-4xl lg:text-7xl font-black">RewardMundo</p> 
          <p className="text-2xl lg:text-4xl font-semibold">Protect our <span className="text-sucdcess font-extrdabold">planet</span>,</p>
          <p className="text-2xl lg:text-4xl text-success font-extrabold">earn <span className="text-sduccess font-extrdabold">rewards</span>.</p>
        </div>
      </div> 
    </div> 
  )
}
