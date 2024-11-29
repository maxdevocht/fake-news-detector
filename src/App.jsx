import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import NewsForm from "./components/NewsForm";

function App() {
  return (
    <div className="relative min-h-screen bg-white bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]">
      <div className="container mx-auto p-4 ">
        <Navbar />
        <Hero />

        <NewsForm />
      </div>
    </div>
  );
}

export default App;
