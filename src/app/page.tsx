'use client'
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
import { Provider } from "jotai";

export default function Home() {
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setIsLoading(true)
  }, [])
  return (
    <>
      {isLoading ? (
        <div className="bg-slate-800 dark:bg-white text-slate-100 dark:text-slate-800">
          <Provider>
          
          <main className="">
          <Header />
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
          </Provider>
          
        </div>
      ) : (
        <Spinner />
      )}
    </>
  );
}
