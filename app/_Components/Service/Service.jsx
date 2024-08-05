import Image from "next/image";
import React from "react";

export default function Service() {
  return (
    <div className=" bg-[#D4DADA] ">
      <div className="container mx-auto">
        <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-5 justify-center items-center py-20">
          <div>
            <h2 className="text-3xl font-semibold my-4">
              Have your work done by professionals!
            </h2>
            <p className="my-4">
              By entrusting us with the preparation of your diploma or final
              thesis, you can be sure that you will receive professional and
              competent help.
            </p>
            <div className="grid grid-cols-2 gap-10 justify-center items-center my-5">
              <div>
                <h1 className="font-bold text-5xl text-[#334A55]">234</h1>
                <p className="text-[#758888]">Total Providers </p>
              </div>
              <div>
                <h1 className="font-bold text-5xl text-[#334A55]">431</h1>
                <p className="text-[#758888]">Total Customers </p>
              </div>
              <div>
                <h1 className="font-bold text-5xl text-[#334A55]">99.5%</h1>
                <p className="text-[#758888]">
                  Average rating for timely execution of order
                </p>
              </div>
              <div>
                <h1 className="font-bold text-5xl text-[#334A55]">33217</h1>
                <p className="text-[#758888]">
                  Order completed by our provider
                </p>
              </div>
            </div>
          </div>
          <Image
            src="/Frame 1597881058.png"
            alt=""
            height={500}
            width={500}
            className="w-full"
          ></Image>
        </div>
      </div>
    </div>
  );
}
