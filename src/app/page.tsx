import Image from "next/image";
import Navbar from "@/components/Navbar/navbar";
import ConnectWallet from "@/components/Button/connectWallet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Home() {
  return (
    <div>
      <Navbar />
      {/* Hero section */}
      <div className="w-[85%] max-w-[1500px] pt-[200px] mx-auto m-0 relative">
        {/* Yellow Ball */}
        <div className="absolute top-[80px] right-0 w-[300px] h-[300px] ">
          <Image
            src="/images/Circle.png"
            alt="yellow ball"
            fill
            className="object-cover"
          />
        </div>
        <h1 className="text-7xl neueMachina font-bold">
          Trusted Multi-Chain
          <br /> DEX Platform
        </h1>
        <p className="text-2xl text-[#9e9e9e] mt-6 neueMachina">
          Trade earn and own crypt on the all-in-one multi-chain DEX
        </p>
        <p className="flex gap-4 mt-5">
          <ConnectWallet />
          <button className="py-3 px-5 font-bold border border-[#e4b40d] bg-transparent text-[#e4b40d] rounded-[30px] text-sm">
            {" "}
            Trade Crypto
          </button>
        </p>
      </div>
      {/* Why Moonex Section */}
      <div className="w-[87%] max-w-[1500px] pt-[200px] mx-auto m-0 relative">
        <h1 className="ml-[30px] text-4xl neueMachina font-bold text-left">
          Why <span className="text-[#e4b40d]">MoonEX</span> ?
        </h1>
        <div className="glass-background">
          <div className="grid grid-cols-12 grid-rows-5 neueMachina">
            <div className="col-span-4 neueMachina text-3xl text-[#e4b40d] border-r border-b border-slate-400/25 text-center font-bold grid place-content-center">
              Comparison
            </div>
            <div className="col-span-4 text-center grid place-content-center border-b border-slate-400/25">
              <Image
                src="/images/why-logo-1.png"
                width={200}
                height={30}
                alt="Moonex Logo"
              ></Image>
            </div>
            <div className="col-span-4 text-center grid place-content-center border-l border-b border-slate-400/25">
              <Image
                src="/images/why-logo-2.png"
                width={200}
                height={30}
                alt="Moonex competitor Logo"
              ></Image>
            </div>
            <div className=" text-[#adb1b4] border-r border-b border-slate-400/25 pl-5 col-span-4 flex items-center">
              1. Point no one{" "}
            </div>
            <div className="col-span-4 grid place-content-center border-r border-b border-slate-400/25">
              <Image
                src="/images/check-mark.png"
                width={60}
                height={30}
                alt="check-mark"
              />
            </div>
            <div className="col-span-4 grid place-content-center border-b border-slate-400/25">
              <Image
                src="/images/x-mark.png"
                width={60}
                height={30}
                alt="check-mark"
              />
            </div>

            <div className=" text-[#adb1b4] border-r border-b border-slate-400/25 pl-5 col-span-4 flex items-center">
              1. Point no two this{" "}
            </div>
            <div className="col-span-4 grid place-content-center border-r border-b border-slate-400/25">
              <Image
                src="/images/check-mark.png"
                width={60}
                height={30}
                alt="check-mark"
              />
            </div>
            <div className="col-span-4 grid place-content-center border-b border-slate-400/25">
              <Image
                src="/images/x-mark.png"
                width={60}
                height={30}
                alt="check-mark"
              />
            </div>
            <div className=" text-[#adb1b4] border-r border-b border-slate-400/25 pl-5 col-span-4 flex items-center">
              1. Point no two this{" "}
            </div>
            <div className="col-span-4 grid place-content-center border-r border-b border-slate-400/25">
              <Image
                src="/images/check-mark.png"
                width={60}
                height={30}
                alt="check-mark"
              />
            </div>
            <div className="col-span-4 grid place-content-center border-b border-slate-400/25">
              <Image
                src="/images/x-mark.png"
                width={60}
                height={30}
                alt="check-mark"
              />
            </div>
            <div className=" text-[#adb1b4] pl-5 border-r border-b border-slate-400/25 col-span-4 flex items-center">
              1. Point no two this{" "}
            </div>
            <div className="col-span-4 grid place-content-center border-r border-b border-slate-400/25">
              <Image
                src="/images/check-mark.png"
                width={60}
                height={30}
                alt="check-mark"
              />
            </div>
            <div className="col-span-4 grid place-content-center border-b border-slate-400/25">
              <Image
                src="/images/x-mark.png"
                width={60}
                height={30}
                alt="check-mark"
              />{" "}
            </div>

            <div className=" text-[#adb1b4] pl-5 border-r border-b border-slate-400/25 col-span-4 flex items-center">
              1. Point no two this{" "}
            </div>
            <div className="col-span-4 grid place-content-center border-r border-b border-slate-400/25">
              <Image
                src="/images/check-mark.png"
                width={60}
                height={30}
                alt="check-mark"
              />
            </div>
            <div className="col-span-4 grid place-content-center border-b border-slate-400/25">
              <Image
                src="/images/x-mark.png"
                width={60}
                height={30}
                alt="check-mark"
              />{" "}
            </div>
          </div>
        </div>
      </div>
      {/* Our Features */}
      <div className="w-[87%] max-w-[1500px] pt-7 mx-auto m-0 relative">
        <h1 className="neueMachina text-3xl font-bold text-center">
          Our <span className="text-[#e4b40d]">Features</span>
        </h1>
        <div className="grid mt-7 grid-cols-4 gap-[40px] auto-rows-auto">
          <div className="rounded glass-background2 grid">
            <div className="mb-[40px]">
              <div className="p-5 glass-background3 w-max rounded-[50%]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-dollar-sign"
                >
                  <line x1="12" x2="12" y1="2" y2="22" />
                  <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                </svg>
              </div>
            </div>
            <h1 className="raleway font-semibold mb-3">Cheapest TXs</h1>
            <p className="raleway">
              Exchange digital currencies at the cheapest possible transaction
              price
            </p>
          </div>
          <div className="rounded glass-background2 grid ">
            <div className="mb-[40px]">
              <div className="p-5 glass-background3 w-max rounded-[50%]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-shield-check"
                >
                  <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
                  <path d="m9 12 2 2 4-4" />
                </svg>
              </div>
            </div>

            <h1 className="raleway font-semibold mb-3">CerTIK</h1>
            <p className="raleway">
              Exchange digital currencies at the cheapest possible transaction
              price
            </p>
          </div>
          <div className="rounded glass-background2 grid ">
            <div className="mb-[40px]">
              <div className="p-5 glass-background3 w-max rounded-[50%]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-phone-off"
                >
                  <path d="M10.68 13.31a16 16 0 0 0 3.41 2.6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7 2 2 0 0 1 1.72 2v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.42 19.42 0 0 1-3.33-2.67m-2.67-3.34a19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91" />
                  <line x1="22" x2="2" y1="2" y2="22" />
                </svg>
              </div>
            </div>

            <h1 className="raleway font-semibold mb-3">No Contract Sells</h1>
            <p className="raleway">
              No contract sells to fund the marketing wallets
            </p>
          </div>
          <div className="rounded glass-background2 grid">
            <div className="mb-[40px]">
              <div className="p-5 glass-background3 w-max rounded-[50%]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-sliders-horizontal"
                >
                  <line x1="21" x2="14" y1="4" y2="4" />
                  <line x1="10" x2="3" y1="4" y2="4" />
                  <line x1="21" x2="12" y1="12" y2="12" />
                  <line x1="8" x2="3" y1="12" y2="12" />
                  <line x1="21" x2="16" y1="20" y2="20" />
                  <line x1="12" x2="3" y1="20" y2="20" />
                  <line x1="14" x2="14" y1="2" y2="6" />
                  <line x1="8" x2="8" y1="10" y2="14" />
                  <line x1="16" x2="16" y1="18" y2="22" />
                </svg>
              </div>
            </div>
            <h1 className="raleway font-semibold mb-3">CrossDex support</h1>
            <p className="raleway">
              Exchanging popular digital currencies at the cheapest possible
              transaction price
            </p>
          </div>
        </div>
      </div>
      {/* FAQs */}
      <div className="w-[87%] max-w-[1500px] pt-7 mx-auto m-0 relative">
        <div className="glass-background2">
          <h1 className="font-bold text-2xl text-center text-[#e4b40d] neueMachina">
            FAQs
          </h1>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>Is it accessible?</AccordionTrigger>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Is it styled?</AccordionTrigger>
              <AccordionContent>
                Yes. It comes with default styles that matches the other
                components&apos; aesthetic.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Is it animated?</AccordionTrigger>
              <AccordionContent>
                Yes. It&apos;s animated by default, but you can disable it if
                you prefer.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
      {/* Footer */}
      <div className="bg-[#051422] flex px-10 justify-between py-[100px] items-center raleway font-bold">
        <Image
          src="/images/Logo-2.png"
          width={90}
          height={30}
          alt="askdj"
        ></Image>
        <div className="flex gap-16">
          <span>About</span> <span>Roadmap</span> <span>Faqs</span>{" "}
          <span>Contact Us</span>
        </div>
        <div className="flex flex-col">
          <h1 className="text-4xl">
            Contact <span>Us</span>
          </h1>
          <div className="flex justify-between">
            <Image
              src="/images/telegram-black-icon.webp"
              width={30}
              height={30}
              alt="telegram"
              className="bg-white rounded-[50%]"
            ></Image>
            <Image
              src="/images/reddit-social-media-design-icon-symbol-logo-illustration-free-vector.jpg"
              width={30}
              height={30}
              alt="telegram"
              className="object-cover rounded-[50%]"
            ></Image>
            <Image
              src="/images/images.png"
              width={35}
              height={30}
              alt="telegram"
              className="object-cover"
            ></Image>
          </div>
        </div>
      </div>
    </div>
  );
}
