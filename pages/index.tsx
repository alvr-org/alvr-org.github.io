import { ArrowCircleRight, Menu, Sparkles, StatusOnline } from 'heroicons-react';
import Head from 'next/head'
import React from 'react';
import { Button } from '../components/Button';
import { Card } from '../components/Card';


export default function Home() {
  return (
    <div>
      <Head>
        <title>ALVR</title>
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

    <div className="p-4 flex flex-col space-y-8 justify-around items-center md:p-8 lg:items-stretch lg:space-x-8 lg:space-y-0 lg:flex-row">
      <Card icon={<StatusOnline className="w-14 h-14" />} label="Truly Wireless" className="max-w-lg bg-gradient-to-br from-orange-500 via-red-500 to-red-600 flex-1">
        <p className="opacity-90 text-lg">By streaming games straight from your PC to your headset, ALVR lets you play without a tether. No more tangling and tripping!</p>
      </Card>
      <Card icon={<StatusOnline className="w-14 h-14" />} label={<div>100% Free<br/>& Open Source</div>} className="max-w-lg bg-gradient-to-br from-lime-400 via-green-600 to-green-600 flex-1">
        <p className="opacity-90 text-lg">You can’t beat free. Especially when that free is 100% backed by open-source software for the community to contribute to.</p>
      </Card>
      <Card icon={<Sparkles className="w-14 h-14" />} label={<div>SteamVR Compatible</div>} className="max-w-lg bg-gradient-to-br from-lightBlue-400 via-blue-500 to-blue-600 flex-1">
        <p className="opacity-90 text-lg">Play all the latest and greatest PC VR games on your Quest. If you already have VR games in your Steam library, no need to purchase them again!</p>
      </Card>
    </div>
      
    </div>
  )
}
