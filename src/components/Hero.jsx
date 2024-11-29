const Hero = () => {
  return (
    <header className="flex-grow flex items-center justify-center px-4 md:px-8 mb-14 mt-20 md:mb-20 z-10">
      <div className="text-center">
        <div className="relative mb-10 px-0 lg:px-20">
          <img
            src="./../../public/assets/sparkle.png"
            alt="sparkle image"
            className="absolute -top-10 right-0 md:right-10 w-12 h-12 lg:w-20 md:w-10 lg:h-20 md:h-10"
            width={80}
            height={80}
          />
          <img
            src="./../../public/assets/sparkle.png"
            alt="sparkle image"
            className="absolute -bottom-16 -left-5 md:left-10 w-12 h-12 lg:w-20 md:w-10 lg:h-20 md:h-10 opacity-100"
            width={80}
            height={80}
          />
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-minecraft-bold mb-4">
            Verify your news with UnFake
          </h1>
          <p className="text-xs sm:text-sm md:text-lg lg:text-xl text-gray-600 font-minecraft mb-8">
            Analyze news content and detect whether it&apos;s real or fake with
            confidence. We help you stay informed and avoid misinformation.
          </p>
        </div>
      </div>
    </header>
  );
};

export default Hero;
