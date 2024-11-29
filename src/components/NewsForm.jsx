import { useState } from "react";
import { analyzeNews } from "./../service/ApiService";
import { Button, Popup, TextArea } from "pixel-retroui";

const NewsForm = () => {
  const [newsInput, setNewsInput] = useState("");
  const [analysisResult, setAnalysisResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [openPopup, setOpenPopup] = useState(false);
  const [openAlertPopup, setOpenAlertPopup] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  const handleAnalyze = async () => {
    if (!newsInput.trim()) {
      setAlertMessage("Please enter some news content to analyze.");
      setOpenAlertPopup(true);
      return;
    }

    setLoading(true);
    try {
      const result = await analyzeNews(newsInput);
      setLoading(false);

      // Check if result is an array and has at least one item
      if (result && Array.isArray(result) && result.length > 0) {
        setAnalysisResult(result[0]); // Set the first prediction as the result
      } else {
        setAnalysisResult({ label: "Unknown", score: 0 });
      }
      setOpenPopup(true);
    } catch (error) {
      setLoading(false);
      setAnalysisResult({
        error: "An error occurred while analyzing the news.",
      });
      setOpenPopup(true);
      console.error(error);
    }
  };

  const closePopup = () => {
    setOpenPopup(false); // Close the popup
  };
  const closeAlertPopup = () => setOpenAlertPopup(false);

  return (
    <div className="md:px-20 lg:px-40 flex flex-col items-center">
      <TextArea
        value={newsInput}
        onChange={(e) => setNewsInput(e.target.value)}
        className="w-full mb-4"
        placeholder="Paste news content here..."
        bg="#fefcd0"
        textColor="black"
        borderColor="black"
      />
      <Button
        onClick={handleAnalyze}
        className=""
        disabled={loading}
        bg="#fefcd0"
        textColor="black"
        borderColor="black"
        shadowColor="#c381b5"
      >
        {loading ? "Analyzing..." : "Analyze"}
      </Button>
      {analysisResult && (
        <Popup
          isOpen={openPopup}
          onClose={closePopup}
          bg="#fefcd0"
          baseBg="#c381b5"
          textColor="black"
          borderColor="black"
        >
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
        </Popup>
      )}
      <Popup isOpen={openAlertPopup} onClose={closeAlertPopup} baseBg="red">
        <div className="p-4 text-center">
          <p className="text-black mb-4">{alertMessage}</p>
        </div>
      </Popup>
    </div>
  );
};

export default NewsForm;
