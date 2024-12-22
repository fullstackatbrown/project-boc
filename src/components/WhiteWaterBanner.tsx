"use client";
import background from "@/assets/images/WhiteWaterRafting.jpeg";

function WhiteWaterBanner(props: { text: string }) {
  const { text } = props;

  return (
    <div className="relative h-[25em]">
      <div
        className="absolute top-5 left-12 right-12 bottom-5 bg-cover bg-center opacity-70 -z-10 rounded-[3em]"
        style={{
          backgroundImage: `url(${background.src})`,
        }}
      />
      <div
        className="absolute top-5 left-12 right-12 bottom-5 bg-[#000000] bg-cover bg-center opacity-10 -z-10 rounded-[3em]"
      />
      <div className="flex flex-col items-center justify-center h-[100%] bg-beige mx-auto max-w-8xl px-16 py-12 text-center">
        <div className="text-9xl font-bold tracking-wide text-yellow-100/90">
          {text}
        </div>
      </div>
    </div>
  );
}
export default WhiteWaterBanner; // Make sure to export the component
