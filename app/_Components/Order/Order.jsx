import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

export default function Order() {
  return (
    <div className="container mx-auto my-20">
      <div className="text-center  mb-10">
        <h2 className="font-semibold text-2xl mb-4">
          What does the process of writing a job <br /> with editors.com look
          like?
        </h2>
        <p>6 simple steps to complete your order</p>
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-center ityems-center">
        <Card className="flex gap-4 p-5 justif items-center">
          <div>
            <Image src="/Order.png" alt="" width={400} height={400}></Image>
          </div>
          <div>
            <CardHeader>
              <CardTitle>Submit your order</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Fill out the form on the website. Our offer preparation is free
                of charge.
              </p>
            </CardContent>
          </div>
        </Card>
        <Card className="flex gap-4 p-5 justif items-center">
          <div>
            <Image
              src="/wait for Offer.png"
              alt=""
              width={400}
              height={400}
            ></Image>
          </div>
          <div>
            <CardHeader>
              <CardTitle>Wait for offer</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Sit back and relax. The editors will contact you themselves.
              </p>
            </CardContent>
          </div>
        </Card>
        <Card className="flex gap-4 p-5 justif items-center">
          <div>
            <Image src="/Disscuss.png" alt="" width={400} height={400}></Image>
          </div>
          <div>
            <CardHeader>
              <CardTitle>Discuss the details</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Conduct talks, determine the price, deadline and substantive
                aspects of the study.
              </p>
            </CardContent>
          </div>
        </Card>
        <Card className="flex gap-4 p-5 justif items-center">
          <div>
            <Image src="/Select.png" alt="" width={400} height={400}></Image>
          </div>
          <div>
            <CardHeader>
              <CardTitle>Select an editor</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Assign the job to an editor who meets your requirements.</p>
            </CardContent>
          </div>
        </Card>
        <Card className="flex gap-4 p-5 justif items-center">
          <div>
            <Image
              src="/payment(1).png"
              alt=""
              width={400}
              height={400}
            ></Image>
          </div>
          <div>
            <CardHeader>
              <CardTitle>Pay safely</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Transfer money to the portal account. When you receive the job,
                you will release the payment from the system to the editors
                account.
              </p>
            </CardContent>
          </div>
        </Card>
        <Card className="flex gap-4 p-5 justif items-center">
          <div>
            <Image src="/payment.png" alt="" width={400} height={400}></Image>
          </div>
          <div>
            <CardHeader>
              <CardTitle>Collect your order</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Collect the study, release the payment to the editor and share
                your opinion about the received work with others
              </p>
            </CardContent>
          </div>
        </Card>
      </div>
    </div>
  );
}
