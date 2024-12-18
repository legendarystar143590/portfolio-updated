import Link from "next/link";
import Typography from "../Typography";
import Image from "next/image";
import { images } from "@/assets/images";
import ThemeImage from "../ThemeImage";
import { useAtom } from "jotai";
import { darkAtom } from "@/lib/darkAtom";
import { useEffect } from "react";

interface MemberCardProps {
  item: {
    introduction: string
    name: string
    role: string
    linkedIn: string
    instegram : string
    twitter:string
    Img: unknown
  }
}
const MemberCard = ({ item }: MemberCardProps) => {
  const [darkStatus ] = useAtom(darkAtom)
  useEffect(()=>{
    // console.log(darkStatus)
  } , [darkStatus])
  return (
    <div className="flex flex-col gap-5 justify-between overflow-hidden rounded-2xl">
      <Typography className="h-[250] overflow-x-auto text-justify text-lg" size="subtitle-25">{item.introduction}</Typography>
      <div className="flex justify-between">
        <div className="flex-row justify-between overflow-hidden items-center align-middle">
            <Link href={item.linkedIn}><Typography className="text-balance  hover:text-slate-500 dark:hover:text-slate-200" size="h4">{item.name}</Typography></Link>
            <div className="flex flex-row gap-7 items-center">
              <Typography className="text-balance" size="paragraph">
                {item.role}
              </Typography>

              {!item.linkedIn ? "" : (<a href={item.linkedIn} target="blank"><ThemeImage lightSrc={images.linkedIn} darkSrc={images.linkedIn_1} className="w-auto h-auto" alt="theme" darkStatus = {darkStatus} height="30" width="30" /></a>)}
              {!item.instegram ? "" : (<a href={item.instegram} target="blank"><ThemeImage lightSrc={images.instegram} darkSrc={images.instegram_1} className="w-auto h-auto" alt="theme" darkStatus = {darkStatus}  height="30" width="30" /></a>)}
              {!item.twitter ? "" : (<a href={item.twitter} target="blank"><ThemeImage lightSrc={images.twitter} darkSrc={images.twitter_1} className="w-auto h-auto" alt="theme" darkStatus = {darkStatus}  height="30" width="30" /></a>)}

            </div>
        </div>
        <div>
          <Image src={item.Img as string} alt={item.name} width="300" height="300" priority className="w-20 h-20 rounded-full" />
        </div>
      </div>
    </div>
  )
}
export default MemberCard;