import Image from "next/image";
import Banner from "./_Components/Banner/Banner";
import Service from "./_Components/Service/Service";
import Order from "./_Components/Order/Order";

export default function Home() {
  return (
    <main className="">
      <Banner></Banner>
      <Service></Service>
      <Order></Order>
    </main>
  );
}
