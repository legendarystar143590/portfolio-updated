import Typography from "../Typography";


const Pledge = () => {
  return (
    <div className="flex h-[90vh] bg-slate-800 dark:bg-slate-200 p-10 w-full items-center justify-center">
      <div className="flex flex-col w-4/5 xm:3/5 lg:w-2/5 gap-20 items-center">
        <Typography className="" size="h3">
          Our Pledge to you
        </Typography>
        <Typography size="subtitle-25" className="text-center text-balance">
          We’re not your typical tech company. We won’t sit around throwing buzzwords at you while charging for hours. We’re real, just like you. We understand that sometimes, you’ve got the vision, but need a little help with the execution. That’s where we come in.
        </Typography>
        <Typography size="subtitle-25" className="text-center text-balance">
          Whether you’ve got an idea, a half-built project, or a headspin—let’s chat for 15 minutes. If we can help, we will. If not, we’ll still point you in the right direction. We’ve been in your shoes, and we know the struggles. Our mission is simple: we refine visions, validate ideas, and create workflows that bring success in the digital age
        </Typography>
      </div>
    </div>
  )
}

export default Pledge;