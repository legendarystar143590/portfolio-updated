'use client'
import Image from "next/image";
import Header from "@/components/Header";
import LandingPage from "@/components/LandingPage/LandingPage";
import PreviousProject from "@/components/PreviousProject/PreviousProject";
import TeamMembers from "@/components/TeamMembers/TeamMembers";
import Features from "@/components/Features/Features";
import { useEffect, useState } from "react";
import Spinner from "@/components/Spinner/Spinner";
import Service from "@/components/Service/Service";
import IntroService from "@/components/IntroService/IntroService";
import TeamVision from "@/components/TeamVision/TeamVision";
import Pledge from "@/components/Pledge/Pledge";
import TestiMonial from "@/components/TestiMonial/TestiMonial";
import ContactInfo from "@/components/ContactInfor";

export default function Home() {
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setIsLoading(true)
  }, [])
  return (
    <>
      {isLoading ? (
        <div className="bg-slate-800 dark:bg-white dark:text-slate-800">
          <Header />
          <main className="">

            <LandingPage />
            <Service />
            <IntroService />
            <PreviousProject />
            <TeamVision />
            <TeamMembers />
            <Features />
            <Pledge />
            <TestiMonial />
            <ContactInfo />
          </main>
          <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
            <a
              className="flex items-center gap-2 hover:underline hover:underline-offset-4"
              href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                aria-hidden
                src="/file.svg"
                alt="File icon"
                width={16}
                height={16}
              />
              Learn
            </a>
            <a
              className="flex items-center gap-2 hover:underline hover:underline-offset-4"
              href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                aria-hidden
                src="/window.svg"
                alt="Window icon"
                width={16}
                height={16}
              />
              Examples
            </a>
            <a
              className="flex items-center gap-2 hover:underline hover:underline-offset-4"
              href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                aria-hidden
                src="/globe.svg"
                alt="Globe icon"
                width={16}
                height={16}
              />
              Go to nextjs.org →
            </a>
          </footer>
        </div>
      ) : (
        <Spinner />
      )}
    </>
  );
}
