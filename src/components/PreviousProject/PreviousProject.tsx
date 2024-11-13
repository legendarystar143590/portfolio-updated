'use client'
import PreviousCard from "../Card/PreviousCard";
import Typography from "../Typography";

const PreviousProject = () => {
  return (
    <>
      <div id="gallery" className="h-full bg-slate-800 dark:bg-slate-300 text-slate-800 min-h-[60vh] dark:text-white px-0 py-20 xl:px-20 lg:px-10 md:px-0 xm:px-0" >
        <div className="flex justify-center items-center h-full">
          <Typography className="dark:text-slate-800 text-white" size="h3">Some Previous Projects</Typography>
        </div>
        <div className="flex h-[70vh] p-20">
          <PreviousCard />
        </div>
      </div >
    </>
  )
}

export default PreviousProject;