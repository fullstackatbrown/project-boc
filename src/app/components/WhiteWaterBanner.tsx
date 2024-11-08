"use client";

function WhiteWaterBanner(props: { text: string}) {
  const { text } = props;
  
  return (
    <div style={{ 
      position: 'relative', // Set relative positioning for the parent div
      minHeight: '75vh' // Sets the height for the background area
    }}>
        <div style={{ 
            backgroundImage: "url('/images/about/WhiteWaterRafting.jpeg')",
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            opacity: 0.8, // 80% opacity
            position: 'absolute', // Overlay the background pseudo-element
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: -1 // Place it behind the content
        }} />
        <div className="flex flex-col items-center justify-center h-[75vh] bg-beige mx-auto max-w-8xl px-16 py-12 text-center">
        <div className="text-9xl font-bold tracking-wide" style={{ color: 'rgba(255, 255, 204, 0.7)' }}>
            {text}
        </div>
        </div>
    </div>
  );
}
export default WhiteWaterBanner; // Make sure to export the component
