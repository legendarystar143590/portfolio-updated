import { images } from "@/assets/images"
import Typography from "../Typography"
import Image from "next/image"
import Link from "next/link"
// import ThemeImage from "../ThemeImage"

const InforDetail = () => {
  return (
    <>
      <div className="flex w-2/3 lg:w-1/2 pl-20">
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
            {/* <ThemeImage lightSrc={images.facebook} darkSrc={images.facebook_1} className="w-auto h-auto" alt="theme" /> */}
            <Link href="/"><Image src={images.facebook_1} width="40" height="40" className="w-auto h-auto" priority alt="facebook"></Image></Link>
            <Link href="/"><Image src={images.twitter_1} width="40" height="40" className="w-auto h-auto" priority alt="facebook"></Image></Link>
            <Link href="/"><Image src={images.linkedIn_1} width="40" height="40" className="w-auto h-auto" priority alt="facebook"></Image></Link>
            <Link href="/"><Image src={images.instegram_1} width="40" height="40" className="w-auto h-auto" priority alt="facebook"></Image></Link>
          </div >
        </div >

      </div >
    </>
  )
}

export default InforDetail