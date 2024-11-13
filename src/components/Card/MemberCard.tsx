import Typography from "../Typography";
import Image from "next/image";

interface MemberCardProps {
  item: {
    introduction: string
    name: string
    role: string
    Img: unknown
  }
}
const MemberCard = ({ item }: MemberCardProps) => {
  return (
    <div className="flex flex-col gap-5 justify-between overflow-hidden dark:text-white">
      <Typography className="h-[250] overflow-x-auto text-justify text-lg" size="subtitle-25">{item.introduction}</Typography>
      <div className="flex justify-between">
        <div className="flex-row justify-between overflow-hidden ">
          <div>
            <Typography className="text-balance" size="h4">{item.name}</Typography>
            <Typography className="text-balance" size="paragraph">{item.role}</Typography>
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