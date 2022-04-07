import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { GithubIcon } from '../components/icon/github'
import { VideoPreview } from '../components/video/video'

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>Kaldiras, a video player for ReactJS.</title>
        <meta name="description" content="Kaldiras, a video player for ReactJS." />
        <meta name="author" content="Yudha Pratama Wicaksana" />

        <meta property="og:title" content="Kaldiras, a video player for ReactJS." />
        <meta property="og:site_name" content="Kaldiras" />
        <meta property="og:url" content="https://plyr.io" />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@LordAur" />
        <meta name="twitter:creator" content="@LordAur" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="w-full min-h-screen bg-slate-100 text-slate-700">
        <div className="lg:grid lg:grid-cols-2 gap-5 antialiased">
          <div className="lg:h-screen h-max mx-auto pt-[50%] px-10 py-10">
            <h1 className="font-bold text-4xl text-left">Kaldiras</h1>
            <p className="text-xl">Video player for ReactJS. Simple, accessible, and easy to customize.</p>

            <div className="flex gap-5 mt-5">
              <Link href="https://github.com/KodepandaID/kaldiras" passHref>
                <button className="w-full flex items-center justify-center gap-x-2 bg-blue-500 hover:bg-blue-500/80 text-white text-sm rounded-lg px-5 py-2 shadow-lg shadow-blue-600/50 hover:shadow-blue-600/40">
                  <GithubIcon className="fill-white h-6" />
                  Github
                </button>
              </Link>
            </div>
            <p className="text-xs text-center mt-3">Created by <a className="text-blue-500" href="https://twitter.com/LordAur">Yudha Pratama</a></p>
          </div>

          <div className="lg:h-screen h-max mx-auto pt-[30%] px-10 py-10">
            <div className="w-full lg:h-[480px] h-[480px] rounded-lg">
              <VideoPreview />
            </div>
            <p className="text-xs text-center my-5">Sintel © <a className="text-blue-500" href="https://studio.blender.org/films/sintel/">Blender</a></p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
