const OutputDisplay = ({ result }) => {
  return (
    <div className="mt-4 p-4 bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-lg font-semibold">Prediction: {result.label}</h2>
      <p>Confidence: {(result.score * 100).toFixed(2)}%</p>
    </div>
  );
};

export default OutputDisplay;
