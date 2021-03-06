import {
    ArrowCircleRight,
    CurrencyDollarOutline,
    Menu,
    SparklesOutline,
    StatusOnlineOutline,
} from "heroicons-react"
import Head from "next/head"
import React from "react"
import { Button } from "../components/Button"
import { Card } from "../components/Card"
import { Banner } from "../components/Banner"

export default function Home() {
    return (
        <div>
            <Head>
                <title>ALVR</title>
                <link rel="icon" href="/favicon.png" />

                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Raleway:wght@400;500;600;700&display=swap"
                    rel="stylesheet"
                ></link>
            </Head>

            <header className="flex justify-between items-center py-2 px-4">
                <div className="flex items-center space-x-2">
                    <img src="/logo.png" className="h-12" />
                </div>
                <Menu className="w-8 h-8 text-blue-500 hidden" />
            </header>

            <div className="py-16 px-4 flex flex-col items-center">
                <h1 className="text-4xl text-center">
                    <span className="text-blueGray-500 font-medium">PC VR</span>
                    <br />
                    <strong className="text-blueGray-300 font-bold tracking-wide">
                        Without the Wires
                    </strong>
                </h1>

                <a href="https://github.com/alvr-org/alvr#requirements" className="mt-16">
                    <Button className="flex items-center space-x-2">
                        <span>Get Started</span>
                        <ArrowCircleRight />
                    </Button>
                </a>
            </div>

            <main className="flex flex-col items-center">
                <div className="p-4 xl:px-0 flex flex-col space-y-8 justify-between items-center md:p-8 lg:items-stretch lg:space-x-8 lg:space-y-0 lg:flex-row max-w-screen-xl">
                    <Card
                        icon={<StatusOnlineOutline className="w-14 h-14" />}
                        label="Truly Wireless"
                        className="max-w-lg bg-gradient-to-br from-orange-500 via-red-500 to-red-600 flex-1"
                    >
                        <p className="opacity-90 text-lg">
                            By streaming games straight from your PC to your headset, ALVR lets you
                            play without a tether. No more tangling and tripping!
                        </p>
                    </Card>
                    <Card
                        icon={<CurrencyDollarOutline className="w-14 h-14" />}
                        label={
                            <div>
                                100% Free
                                <br />& Open Source
                            </div>
                        }
                        className="max-w-lg bg-gradient-to-br from-lime-400 via-green-600 to-green-600 flex-1"
                    >
                        <p className="opacity-90 text-lg">
                            You can’t beat free. Especially when that free is 100% backed by
                            open-source software for the community to contribute to.
                        </p>
                    </Card>
                    <Card
                        icon={<SparklesOutline className="w-14 h-14" />}
                        label={<div>SteamVR Compatible</div>}
                        className="max-w-lg bg-gradient-to-br from-lightBlue-400 via-blue-500 to-blue-600 flex-1"
                    >
                        <p className="opacity-90 text-lg">
                            Play all the latest and greatest PC VR games on your Quest. If you
                            already have VR games in your Steam library, no need to purchase them
                            again!
                        </p>
                    </Card>
                </div>
                <section className="bg-blueGray-600 p-4 text-blueGray-200 my-4 space-y-2 shadow-lg max-w-screen-xl xl:rounded-2xl">
                    <p>ALVR enables you to stream PC VR games over WiFi to your Oculus Quest.</p>
                    <p>
                        Technologies like Asynchronous Timewarp and Fixed Foveated Rendering are
                        used by ALVR for a smoother, more immersive experience. All games that work
                        with an Oculus Rift (s) should be compatible with ALVR.
                    </p>
                    <p className="font-semibold text-lightBlue-500">Truly Wireless PCVR</p>
                </section>
            </main>
            <Banner type="info">
                <p>
                    This website is not finished yet. For more info please see the{" "}
                    <a
                        className="font-bold underline hover:opacity-75"
                        href="https://github.com/alvr-org/alvr#readme"
                    >
                        readme
                    </a>{" "}
                    and the{" "}
                    <a
                        className="font-bold underline hover:opacity-75"
                        href="https://github.com/alvr-org/ALVR/wiki"
                    >
                        wiki
                    </a>
                    .
                </p>
            </Banner>
        </div>
    )
}
