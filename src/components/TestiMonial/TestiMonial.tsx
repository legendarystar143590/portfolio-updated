
import Typography from "../Typography";
import TestMonialCard from "../Card/TestiMonialCard";

const TestiMonial = () => {
  return (
    <div className="h-full bg-slate-600 dark:bg-slate-50 text-slate-800 min-h-[70vh] dark:text-white px-5 py-20 xl:px-20 lg:px-10 md:px-10 xm:px-10">
      <div className="flex justify-center items-center h-full">
        <Typography className="dark:text-slate-800 text-white" size="h3">Client Testimonials</Typography>
      </div>
      <div className="flex h-[40vh]">
        <TestMonialCard />
      </div>
    </div>
  )
}

export default TestiMonial;