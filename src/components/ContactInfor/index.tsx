import ContactInforForm from "./ContactInforForm"
import InforDetail from "./InforDetail"


const ContactInfo = () => {
  return (
    <div id="contact">
      <div className="flex">
        <div className="flex flex-col w-full min-h-[90vh] bg-slate-800 dark:bg-slate-200 p-0 gap-20 items-center lg:flex-row" >
          <ContactInforForm />
          <InforDetail />
        </div>
      </div>
    </div>
  )
}

export default ContactInfo