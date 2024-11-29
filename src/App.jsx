import { useState } from "react";
import { analyzeNews } from "./service/ApiService";
import { Button, TextArea } from "pixel-retroui";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

function App() {
  const [newsInput, setNewsInput] = useState("");
  const [analysisResult, setAnalysisResult] = useState(null);

  const handleAnalyze = async () => {
    if (!newsInput.trim()) {
      alert("Please enter some news content to analyze.");
      return;
    }
    const result = await analyzeNews(newsInput);

    // Check if result is an array and has at least one item
    if (result && Array.isArray(result) && result.length > 0) {
      setAnalysisResult(result[0]);
    } else {
      setAnalysisResult({ label: "Unknown", score: 0 });
    }
  };

  return (
    <div className="relative min-h-screen bg-white bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]">
      <div className="container mx-auto p-4 ">
        <Navbar />
        <Hero />
        <TextArea
          value={newsInput}
          onChange={(e) => setNewsInput(e.target.value)}
          className="w-full mb-4"
          placeholder="Paste news content here..."
        />
        <Button onClick={handleAnalyze} className="">
          Analyze
        </Button>
        {analysisResult && (
          <div className="mt-4">
            <h2 className="text-xl font-bold">Analysis Result:</h2>
            {analysisResult.error ? (
              <p className="text-red-500">{analysisResult.error}</p>
            ) : (
              <p>
                The news is likely:{" "}
                <span className="font-bold">
                  {analysisResult[0].label} (
                  {(analysisResult[0].score * 100).toFixed(0)}%)
                </span>
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
