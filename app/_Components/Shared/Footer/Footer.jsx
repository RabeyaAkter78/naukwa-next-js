import Image from "next/image";
import React from "react";
import { CiInstagram } from "react-icons/ci";
import { CiFacebook } from "react-icons/ci";
import { TiSocialTwitterCircular } from "react-icons/ti";
export default function Footer() {
  return (
    <div className="bg-[#232323]">
      <div className="container mx-auto">
        <div className="py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-24 justify-center items-center text-white">
          <div>
            <div className="flex gap-2 justify-start items-center mb-5">
              <Image src="/logo.png" alt="" height={50} width={50}></Image>
              <p className="text-xl ">Redakcja Naukowa</p>
            </div>
            <p className="">
              Order academic works online, connect with specialized editors, and
              track progress conveniently through our platforms interactive
              features.
            </p>
          </div>
          <div>
            <p className="mb-5">
              Subscribe to stay tuned for new web design and latest updates.
              Lets do it!
            </p>
            <div className="flex gap-2">
              <p className="bg-white p-2">biuro@redakcjanaukowa.pl</p>
              <button className="bg-[#758888] p-2 border">Email Us</button>
            </div>
          </div>
          <div className="flex gap-5 justify-center items-center">
            <div>
              <p className="mb-5">Follow us</p>
              <div className="flex gap-2 justify-start items-center">
                <CiInstagram />
                <CiFacebook />
                <TiSocialTwitterCircular />
              </div>
            </div>
            <div>
              <p className="mb-5">Call us</p>
              <p>+48 661 120 494</p>
            </div>
          </div>
        </div>
        <hr />
        <div className="flex justify-between items-center gap-5 text-white border-base-300 border-t py-4 pb-10">
          <div className="flex gap-2 justify-center items-center">
            <Image src="/Group 94.png" alt="" height={50} width={50}></Image>{" "}
            <p>Design & Developed by Sparktech Agency </p>
          </div>
          <div className="justify-end">
            <div className="flex flex-col md:flex-row  gap-4">
              <p>Privacy Policy</p>
              <p>Terms of Use</p>
              <p>How to order?</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
