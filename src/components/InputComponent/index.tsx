import { ChangeEvent } from "react"

interface props {
  className?: string
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void
  placeholder?: string
  label?: string
  value?: string
  type?: string
}

const InputComponent = ({ className, onChange, placeholder, label, value, type }: props) => {
  return (
    <div className="flex flex-col w-full gap-5">
      <label className="text-slate-400">{label}</label>
      <input type={type ? type : "text"} className={className + " text-slate-900 block bg-white w-full border border-slate-300 rounded-md py-4 px-3 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-lg"}
        placeholder={placeholder} onChange={onChange} value={value} />
    </div>
  )
}

export default InputComponent