import { ArrowCircleRight, Menu } from 'heroicons-react';
import Head from 'next/head'
import React from 'react';
import { Button } from '../components/Button';


export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />

        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@400;500;600;700&display=swap" rel="stylesheet"></link>
      </Head>

    <header className="flex justify-between items-center py-2 px-4">
      <div className="flex items-center space-x-2">
        <img src="/logo.png" className="w-12 h-12" />
        <h1 className="text-blueGray-200 text-2xl font-light">ALVR</h1>
      </div>
      <Menu className="w-8 h-8 text-blue-500 hidden" />
    </header>

    <div className="py-16 px-4 flex flex-col items-center">
      <h1 className="text-4xl text-center">
        <span className="text-blueGray-500 font-medium">PC VR</span>
        <br />
        <strong className="text-blueGray-300 font-bold tracking-wide">Without the Wires</strong>
      </h1>

        <a href="https://github.com/alvr-org/alvr#requirements" className="mt-16">
          <Button className="flex items-center space-x-2"><span>Get Started</span><ArrowCircleRight /></Button>
        </a>
    </div>

      
    </div>
  )
}
