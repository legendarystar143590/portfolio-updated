'use client'

import Typography from "../Typography";
import Image from "next/image";
import { images } from "@/assets/images";


const LandingPage = () => {
  return (
    <div className="flex bg-slate-700 dark:bg-slate-200 p-10" id="home">
      <div className="flex flex-col  w-full h-[90vh] items-center justify-center lg:flex-row">
        <div>
          <Typography size="h3" className="text-center lg:text-balance">
            Welcome, to Kaizien
          </Typography>
          <Typography size="paragraph" className="text-center">
            Here We are gonna share all about our professional<br/> life works, projects and all
          </Typography>
        </div>
        <Image src={images.landing_image} className="md:block w-auto h-auto" alt="landing_image"
          priority width="400" height="400" />
      </div>
    </div>
  )
}

export default LandingPage;