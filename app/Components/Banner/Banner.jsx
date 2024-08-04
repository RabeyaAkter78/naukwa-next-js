import React from "react";
import img from "../../../public/image 12.png";
import Image from "next/image";
export default function Banner() {
  return (
    <div className="bg-[#334A55] ">
      <div className=" container mx-auto bg-bannerBg pt-56 pb-60">
        <div className="flex gap-5 justify-center items-center w-full">
          <div className="w-1/2">
            <h1 className="text-6xl text-white font-bold mb-3">
              WRITING <br />
              <span className="font-semibold"> Commissioned Works</span>
            </h1>
            <h3 className="text-[#8ABA51] text-2xl my-6">
              Professional Editors
            </h3>
            <h4 className="text-xl text-[#DBEAC9]">
              We will write a good job for you
            </h4>
            <p className="text-[#C6C8CA] my-4">
              You take control of selecting the editor for your diploma thesis
              and decide the payment terms. By completing the form, you await
              offers from editors, choosing the most suitable one.
              Correspondence with the chosen editor allows you to track the
              progress of your thesis. Upon completion, you collect your work,
              make the payment, and leave a review.
            </p>
          </div>
          <div className="">
            <Image
              src="/frame1.png"
              alt=""
              height={500}
              width={500}
              className="w-full"
            ></Image>
          </div>
        </div>
      </div>
    </div>
  );
}
