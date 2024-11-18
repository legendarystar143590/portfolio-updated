import { images } from "@/assets/images"
import Typography from "../Typography"
import Image from "next/image"
import { useAtom } from "jotai"
import { darkAtom } from "@/lib/darkAtom"
import { useEffect } from "react"
import ThemeImage from "../ThemeImage"

const InforDetail = () => {
  const [darkStatus ] = useAtom(darkAtom)
  useEffect(()=>{
    // console.log(darkStatus)
  } , [darkStatus])

  return (
    <>
      <div className="flex w-2/3 lg:w-1/2 lg:pl-20">
        <div className="flex flex-col gap-20 ">
          <div className="flex flex-col gap-10">
            <div className="flex flex-row gap-10">
              <Image src={images.email} alt="email" width="40" height="20" priority className="w-auto h-auto" />
              <Typography size="subtitle-25">jacob143590@gmail.com</Typography>
            </div>
            <div className="flex flex-row gap-10">
              <Image src={images.phone} alt="email" width="40" height="20" priority className="w-auto h-auto" />
              <Typography size="subtitle-25">+1 814 467 2733</Typography>
            </div>
            <div className="flex flex-row gap-10">
              <Image src={images.placeholder} alt="email" width="40" height="20" priority className="w-auto h-auto" />
              <Typography size="subtitle-25">Singapore Singapore</Typography>
            </div>
          </div>
          <div className="flex flex-row gap-8">
            <ThemeImage lightSrc={images.facebook_1} darkSrc={images.facebook} className="w-auto h-auto" alt="theme" darkStatus = {darkStatus} height="40" width="40" />
            <ThemeImage lightSrc={images.twitter_1} darkSrc={images.twitter} className="w-auto h-auto" alt="theme" darkStatus = {darkStatus} height="40" width="40" />
            <ThemeImage lightSrc={images.linkedIn_1} darkSrc={images.linkedIn} className="w-auto h-auto" alt="theme" darkStatus = {darkStatus} height="40" width="40" />
            <ThemeImage lightSrc={images.instegram_1} darkSrc={images.instegram} className="w-auto h-auto" alt="theme" darkStatus = {darkStatus} height="40" width="40" />
          </div >
        </div >

      </div >
    </>
  )
}

export default InforDetail