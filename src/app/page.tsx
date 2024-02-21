import DropFileZone from "@/components/DropFileZone";
import Image from "next/image";

export default function Home() {
  return (
    <main className=" space-y-16 pb-8">
      <div className="space-y-6">
        <h1 className=" text-3xl md:text-5xl font-medium text-center">
          Free Unlimited Converter
        </h1>
        <p className=" text-gray-400 text-md md:text-lg text-center md:px-24 xl:px-44 2xl:px-52">
          Unlock the power of seamless file conversion with SwiftConvert! Our free online file converter
          effortlessly transforms documents, images, audio, and more, so you can work with your files in
          any format. No downloads, no hassle – just swift, reliable conversions at your fingertips.
          Experience the freedom to convert and share files effortlessly. Try SwiftConvert today and
          elevate your file conversion experience
        </p>
        <DropFileZone />
      </div>
    </main>
  );
}
