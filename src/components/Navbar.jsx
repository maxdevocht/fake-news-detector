const Navbar = () => {
  return (
    <nav className="w-full mb-4 flex items-center justify-between">
      <h1 className="text-xl md:text-2xl font-bold">UnFake</h1>
      <div className="flex items-center gap-4 md:gap-12">
        <img
          src="./src/assets/sun.svg"
          alt="sun icon"
          className="text-xl md:text-2xl font-bold"
          width={32}
          height={32}
        />
        <a
          href="#"
          className="text-xl md:text-2xl font-bold underline hover:no-underline"
        >
          Github
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
