'use client'
import Typography from "../Typography"
import { Resend } from "resend"
import { useState } from "react"
import { isValidEmail } from "@/assets/utils/Basic"

const ContactInforForm = () => {

  const resend_API_KEY = process.env.NEXT_PUBLIC_RESEND_API_KEY
  const resend = new Resend(resend_API_KEY);
  const [email, setEmail] = useState("");
  const [emailCheck, setEmailCheck] = useState(false)
  
  const [content, setContent] = useState("");
  const [contentCheck, setContentCheck] = useState(false)

  const ReSendMail = async () => {
    if(email === "" || !isValidEmail(email)){
      setEmailCheck(true)
    } else setEmailCheck(false)
    if(content === ""){
      setContentCheck(true)
    } else setContentCheck(false)

    if(content !== "" && email !== ""){
      const {error} = await resend.emails.send({
        from: 'chubbypanda20000107@gmail.com',
        to: ['ninjacoder0331@gmail.com'],
        subject: 'Hello World',
        html: '<strong>It works!</strong>',
      })

      if(error) console.error({error})

    }
  }
  

  return (
    <div className="flex w-2/3 lg:w-1/2 p-0 lg:p-20 ">
      <div className="flex flex-col gap-5">
        <Typography className="text-indigo-500 w-full items-center pt-10 " size="h3">CONTACT WITH OUR TEAM</Typography>
        <div className="flex flex-col border-2  border-slate-500 gap-5 p-7 rounded-xl shadow-lg shadow-indigo-200 dark:shadow-indigo-400">
          <Typography className="text-[18px]">If you have any questions or concerns, please do not hesitate to contact me. I am open to any work opportunities that align with my skills and interests.
          </Typography>
          <div className="flex flex-col gap-2">
            <Typography size="paragraph">Your Name:</Typography>
            <input className="placeholder:italic text-black text-[13px] block bg-white w-full border border-slate-300 rounded-md py-2 pl-4 pr-4 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-lg"
              type="text" name="search" />
            
          </div>
          <div className="flex flex-col gap-2">
            <Typography size="paragraph">Your Email:</Typography>
            <input className="placeholder:italic text-black text-[13px] block bg-white w-full border border-slate-300 rounded-md py-2 pl-4 pr-4 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-lg"
              type="text" name="search" onChange={(e) => setEmail(e.target.value)} />
            {emailCheck ? <Typography size="paragraph" className="text-red-500">Please enter a valid email address</Typography> : null}
          </div>
          <div className="flex flex-col gap-2">
            <Typography size="paragraph">Your Message:</Typography>
            <textarea className="placeholder:italic h-32 text-black text-[13px] block bg-white w-full border border-slate-300 rounded-md py-2 pl-4 pr-4 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-lg"
              name="search" onChange={(e) => setContent(e.target.value)} />
            {contentCheck ? <Typography size="paragraph" className="text-red-500">Please enter your message</Typography> : null}
          </div>
          <button onClick={ReSendMail} className="border-2 border-slate-400 py-2 text-[22px] rounded-xl mt-5 hover:text-rose-600 hover:border-rose-600 active:text-rose-500">
            Send Email
          </button>
        </div>
      </div>
    </div>
  )
}

export default ContactInforForm