const InputForm = ({ inputText, setInputText, onAnalyze }) => {
  return (
    <div className="flex flex-col items-center p-4">
      <textarea
        className="w-full p-2 border rounded-lg shadow-sm focus:ring focus:ring-blue-300"
        rows="6"
        placeholder="Paste news content here..."
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
      <button
        onClick={onAnalyze}
        className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600"
      >
        Analyze
      </button>
    </div>
  );
};

export default InputForm;
