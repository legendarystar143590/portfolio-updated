import { images } from "@/assets/images";
import Typography from "../Typography";
import Image from "next/image";

const IntroService = () => {
  return (
    <div className="flex  bg-slate-700 dark:bg-slate-200 p-10 xl">
      <div className="flex flex-col w-full h-[85vh] xl:h-[80vh] items-center justify-center xl:flex-row gap-10 xl:gap-52">
        <div className="flex flex-col gap-10 w-full xl:w-2/5">
          <Typography size="h3">
            Opportunity doesn’t pause, so why should you?
          </Typography>
          <Typography size="subtitle-25" className="">
            Your vision deserves to thrive, and we’re the team to make it happen. Our agile approach combines cutting-edge AI and deep technical expertise, transforming ideas into impactful, innovative solutions. We’re not just builders; we’re your partners in creating dynamic, high-quality projects that set you apart. Ready to shape the future? Let’s make your vision a reality.
          </Typography>
        </div>
        <Image src={images.vision} width={600} height={600} alt="vision" className="rounded-xl" />

      </div>
    </div>
  )
}

export default IntroService;