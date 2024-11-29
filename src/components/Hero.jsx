const Hero = () => {
  return (
    <header className="flex-grow flex items-center justify-center px-8 my-20 z-10">
      <div className="text-center">
        <div className="relative mb-10">
          <img
            src="./src/assets/sparkle.png"
            alt="sparkle image"
            className="absolute -top-10 right-0 md:right-10 w-12 h-12 md:w-20 md:h-20"
            width={80}
            height={80}
          />
          <img
            src="./src/assets/sparkle.png"
            alt="sparkle image"
            className="absolute -bottom-16 -left-5 md:left-10 w-12 h-12 md:w-20 md:h-20 opacity-100"
            width={80}
            height={80}
          />
          <h1 className="text-5xl font-minecraft-bold mb-4 px-20">
            Verify your news with UnFake
          </h1>
          <p className="text-xl text-gray-600 font-minecraft mb-8 px-20">
            Analyze news content and detect whether it&apos;s real or fake with
            confidence. We help you stay informed and avoid misinformation.
          </p>
        </div>
      </div>
    </header>
  );
};

export default Hero;
