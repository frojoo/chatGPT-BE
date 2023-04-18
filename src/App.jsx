function App() {
  return (
    <div className="min-h-screen  bg-[rgba(52,53,65)] flex flex-col justify-center items-center">
      <div className="text-gray-200 text-4xl mb-6">ChatGPT</div>
      <form className="flex bg-gray-700 border-gray-900/50 w-1/3 py-3 text-gray-200 rounded-md shadow-md text-xl">
        <input
          className="grow bg-gray-700 focus:outline-none pl-2"
          type="text"
        />
        <input className="pr-2 cursor-pointer" type="submit" value="send" />
      </form>
      <div className="bg-gray-600 mt-10 rounded-md px-3 py-2 text-xl text-gray-300 w-1/2">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat
        tempore, consequatur sed delectus natus, inventore blanditiis non
        consequuntur ipsum perspiciatis sunt. Magni illum labore maiores nihil
        unde delectus minus porro!
      </div>
    </div>
  );
}

export default App;
