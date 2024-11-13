'use client'

import { MemberData } from "@/assets/data/MemberData";
import MemberCard from "../Card/MemberCard";
import Typography from "../Typography";

const TeamMembers = () => {
  return (
    <div className="flex  bg-slate-800 dark:bg-slate-300 pt-32 pb-20 md:px-10 lg:px-15 xl:px-20 h-[90vh]">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <Typography className="bg-transparent" size="h3">Team Members</Typography>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 xl:grid-cols-3 md:gap-5 lg:gap-8 xl:gap-10 min-h-[55vh] items-center p-5">
          {
            MemberData.map((item, key) => (
              <div key={key} className="text-slate-800 rounded-lg p-6 pt-10 flex justify-between gap-2 bg-white h-[400px] dark:bg-slate-600">
                <MemberCard item={item} />
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default TeamMembers;