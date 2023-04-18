import { useState } from "react";
import axios from "axios";

function App() {
  const [content, setContent] = useState("send a message...");
  const [result, setResult] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const onFocus = () => {
    setContent("");
  };

  const onBlur = () => {
    setContent("send a message...");
  };

  const onSubmitContent = async (e) => {
    try {
      e.preventDefault();

      if (!content) return;

      setIsLoading(true);

      const response = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/chat`,
        {
          content,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.REACT_APP_PUBLIC_KEY}`,
          },
        }
      );

      setResult(response.data.result);
      setIsLoading(false);
      setContent("send a message...");
    } catch (error) {
      console.error(error);

      setIsLoading(false);
    }
  };
  return (
    <div className="min-h-screen  bg-[rgba(52,53,65)] flex flex-col justify-center items-center">
      <div className="text-gray-200 text-4xl mb-6">ChatGPT</div>
      <form
        className={`flex bg-gray-700 border-gray-900/50 w-1/2 py-3 text-gray-200 rounded-md shadow-md text-xl ${
          isLoading && "bg-slate-600"
        }`}
        onSubmit={onSubmitContent}
      >
        <input
          className={`grow bg-gray-700 border-none focus:outline-none pl-2 ${
            isLoading && "bg-slate-600"
          }`}
          type="text"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          onFocus={onFocus}
          onBlur={onBlur}
          disabled={isLoading}
        />
        <input
          className="pr-2 cursor-pointer hover:text-gray-400"
          type="submit"
          value={isLoading ? "sending..." : "send"}
          disabled={isLoading}
        />
      </form>
      {result && (
        <div className="bg-gray-600 mt-6 rounded-md px-3 py-2 text-xl text-gray-300 w-1/2">
          {result}
        </div>
      )}
    </div>
  );
}

export default App;
