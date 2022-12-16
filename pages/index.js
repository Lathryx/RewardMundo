import Head from 'next/head'; 
import Image from 'next/image'; 
import styles from '../styles/Home.module.css'; 

import firebase from 'firebase/app'; 
import 'firebase/firestore'; 
import 'firebase/auth'; 

import { useAuthState } from 'react-firebase-hooks/auth'; 
import { useCollectionData } from 'react-firebase-hooks/firestore'; 

export default function Home({ appLang, user }) {
  const pageTranslations = {
    en: {
      header1: "Protect our planet"
    }, 
    es: {} 
  }; 

  return (
    <div className="min-h-ddfd[93vh]">
      <Head> 
        <title>RewardMundo</title>
        <meta name="description" content="RewardMundo" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="landing pt-20 lg:pt-36 min-h-[150vh] items-center lg:items-start justify-start lg:justify-center">
        <div className="m-8 lg:m-14">
          <p className="mb-4 lg:mb-2 text-4xl lg:text-7xl font-black">RewardMundo</p> 
          <p className="text-2xl lg:text-4xl font-semibold">Proteger nuestro <span className="text-sucdcess font-extrdabold">planeta</span>,</p>
          <p className="text-2xl lg:text-4xl text-success font-extrabold">obtener <span className="text-sduccess font-extrdabold">recompensas</span>.</p>
        </div>

        <div className="m-8 lg:m-14">
          <p className="mb-4 lg:mb-2 text-2xl lg:text-4xl font-semibold">Únete al <span className="text-success font-extrabold">movimiento</span>.</p> 
        </div>

        <div className="mt-80 ml-auto m-10 p-5 md:w-1/2 rounded-xl">
          <p className="mb-8 text-4xl font-bold">Propósito</p> 
          <div className="p-5 bg-gray-100 rounded-lg">
            <p>RewardMundo fue creado con el objetivo de incentivar el uso de los medios del transporte más consciente del medio ambiente, para (con suerte) reducir el uso de estos tipos de vehículos, efectivamente mejorando la calidad del aire en todo el mundo. </p> 
          </div>
        </div>

        <div className="mx-auto mt-32 flex flex-col justify-center items-center">
          <p className="mb-8 text-4xl font-bold">Cómo funciona</p> 
          <ul className="steps steps-vertical md:steps-horizontal">
            <li className="mx-2 step step-secondary">
              <div className="p-5 w-52 bg-gray-100 rounded-lg">
                <div className="mx-auto mb-3 p-2 max-w-fit bg-gray-200 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-14 h-14">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
                  </svg>
                </div> 
                <p>Utilizar medios de transporte más seguro para el medio ambiente. </p> 
              </div>
            </li>  
            <li className="mx-2 step step-secondary">
              <div className="p-5 w-52 bg-gray-100 rounded-lg">
                <div className="mx-auto mb-3 p-2 max-w-fit bg-gray-200 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-14 h-14">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 11.25v8.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 109.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1114.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
                  </svg>
                </div> 
                <p>Obtener recompensas. </p> 
              </div>
            </li> 
            <li className="mx-2 step step-secondary">
              <div className="p-5 w-52 bg-gray-100 rounded-lg">
                <div className="mx-auto mb-3 p-2 max-w-fit bg-gray-200 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-14 h-14">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.115 5.19l.319 1.913A6 6 0 008.11 10.36L9.75 12l-.387.775c-.217.433-.132.956.21 1.298l1.348 1.348c.21.21.329.497.329.795v1.089c0 .426.24.815.622 1.006l.153.076c.433.217.956.132 1.298-.21l.723-.723a8.7 8.7 0 002.288-4.042 1.087 1.087 0 00-.358-1.099l-1.33-1.108c-.251-.21-.582-.299-.905-.245l-1.17.195a1.125 1.125 0 01-.98-.314l-.295-.295a1.125 1.125 0 010-1.591l.13-.132a1.125 1.125 0 011.3-.21l.603.302a.809.809 0 001.086-1.086L14.25 7.5l1.256-.837a4.5 4.5 0 001.528-1.732l.146-.292M6.115 5.19A9 9 0 1017.18 4.64M6.115 5.19A8.965 8.965 0 0112 3c1.929 0 3.716.607 5.18 1.64" />
                  </svg>
                </div> 
                <p>¡Salva el planeta!</p> 
              </div>
            </li> 
          </ul> 
        </div>

        <div className="m-20 text-center">
          <label className="btn btn-lg text-base-100 bg-secondary bg-opacity-90 hover:bg-opacity-100 hover:bg-secondary border-none hover:drop-shadow-xl" htmlFor="sign-up-modal">Unirse Ahora</label> 
        </div>
      </div> 

    </div> 
  )
}
