export default function LogoTicker() {
  return (
    <div className="relative w-full h-[132px] flex justify-center items-center overflow-hidden bg-white">
      {/* Logos */}
      <div className="flex items-center gap-8 md:gap-12 lg:gap-[58px] px-6">
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/3cf7969833ce23e0e65c3b1fd2a8c3a14e822478?width=253"
          alt="Talos Logo"
          className="h-16 md:h-20 lg:h-[93px] w-auto object-contain"
        />
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/99806ad1623bf54d5983b21c9a79673a6777029b?width=322"
          alt="OpenPOWER Logo"
          className="h-10 md:h-12 lg:h-[49px] w-auto object-contain"
        />
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/5dec9afba0e05603b08e16ba93643a83922c6772?width=427"
          alt="Raptor Computing Systems Logo"
          className="h-10 md:h-12 lg:h-[49.94px] w-auto object-contain"
        />
      </div>

      {/* Gradient Overlay - Fade to white on edges */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'linear-gradient(90deg, #FFF 0%, rgba(255, 255, 255, 0.00) 49.92%, #FFF 100%)'
        }}
      />
    </div>
  );
}
