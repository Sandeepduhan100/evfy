import Footer from "@/components/footer/Footer";
import Hero from "@/components/hero/Hero";
import Image from "next/image";

export default function Home() {
  return (
   <div className="">
   <h1 className="text-3xl font-bold  bg-slate-100">
    <Hero/>
    <Footer/>
</h1></div>
  );
}
