'use client'

import FeatureCard from "../Card/FeatureCard"
import Typography from "../Typography"


const Features = () => {

  return (
    <div id="feature" className="h-full bg-slate-600 dark:bg-slate-50 text-slate-800 min-h-[60vh] dark:text-white px-0 py-20 xl:px-20 lg:px-10 md:px-0 xm:px-0">
      <div className="flex justify-center items-center h-full">
        <Typography className="dark:text-slate-800 text-white" size="h3">Team Feature</Typography>
      </div>
      <div className="flex h-[70vh] p-20">
        <FeatureCard />
      </div>
    </div>
  )
}

export default Features