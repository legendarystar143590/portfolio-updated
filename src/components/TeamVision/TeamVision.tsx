
import Typography from "../Typography";
import Image from "next/image";
import { images } from "@/assets/images";

const TeamVision = () => {
  return (
    <div className="flex  bg-slate-700 dark:bg-slate-200 p-10 " id="team">
      <div className="flex flex-col w-full h-[85vh] xl:h-[80vh] items-center justify-center xl:flex-row gap-10 xl:gap-52">
        <div className="flex flex-col gap-10 w-full xl:w-2/5">
          <Typography size="h3">
            Our Team
          </Typography>
          <Typography size="subtitle-25" className="">
            Meet our team: developers who bring your vision to life with dynamic, high-impact solutions. We have walked the startup path, creating tech that matters and goes beyond the screen. With us, it’s not just code—it’s a partnership. Our blend of precision, passion, and cutting-edge expertise in AI and software development empowers innovation that resonates. Let’s build something extraordinary.
          </Typography>
        </div>
        <Image src={images.teamVision} width={600} height={600} alt="vision" priority className="rounded-xl w-auto h-auto" />

      </div>
    </div>
  )
}

export default TeamVision;