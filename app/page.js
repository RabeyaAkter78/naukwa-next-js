import Image from "next/image";
import Banner from "./Components/Banner/Banner";
import Service from "./Components/Service/Service";
import Order from "./Components/Order/Order";

export default function Home() {
  return (
    <main className="">
      <Banner></Banner>
      <Service></Service>
      <Order></Order>
    </main>
  );
}
