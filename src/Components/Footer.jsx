import { FaFacebook } from "react-icons/fa"

const Footer = () => {
  return (
    <div className="bg-[#1F252F] rounded-3xl p-10 p">
        <div className="md:flex justify-between items-center text-white space-y-5 md:space-y-0">
            {/* Talk to Us */}
            <div className="space-y-7">
                <h1 className="font-semibold text-5xl ">Talk to Us</h1>
                <button className="border-2 p-2 rounded-3xl">Contacts ></button>
                <p>c 2024 Spectar All Rights Revserved</p>
            </div>
            {/* others */}
            <div className="space-y-7">
                <ul className="flex space-x-5 text-base">
                    <li>About</li>
                    <li>Services</li>
                    <li>Tour</li>
                    <li>Visa</li>
                </ul>
                <div className="md:text-end text-sm">
                    <p>45 Avenue, Coconut <br /> Street Tema - Accra <br />
                    GP 122-00-335 </p>
                </div>
                {/* Social media */}
                <div className="flex space-x-5">
                    <a href="#" className="rounded-full border border-white p-2"><FaFacebook size={20}/></a>
                    <a href="#" className="rounded-full border border-white p-2"><FaFacebook size={20}/></a>
                    <a href="#" className="rounded-full border border-white p-2"><FaFacebook size={20}/></a>
                    <a href="#" className="rounded-full border border-white p-2"><FaFacebook size={20}/></a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer