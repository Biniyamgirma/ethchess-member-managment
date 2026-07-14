import  {InputForm} from '@/components/member-registration-form'
import Image from 'next/image'
import ethchess_logo from '@/public/ETHCHESS.jpg'
export default function page() {
  return (
    <div className="mx-0 px-0 md:flex  md:flex-1  pt-0 md:w-screen  md:justify-between md:items-center md:h-screen ">
    <div className="hidden md:flex items-center justify-center h-screen w-0 md:w-2/5 ">
        <Image src={ethchess_logo} alt="ETHCHESS" loading="eager" className="h-full w-full object-cover" />
    </div>
    <div className="flex items-center justify-center h-screen  md:w-3/5 overflow-y-auto py-4">
    <div className="my-6 " />
    <div className=" ">
    <h1>Welcome to ETHCHESS</h1>
    <h3>Chess Training Platform Please Fill below form </h3>
      <InputForm />
    </div>
    </div>
    
    </div>
  )
}
