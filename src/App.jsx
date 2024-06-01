import {Card, Description} from './components/index';
function App() {

  return (
    <div>
      <h1 className="text-center font-mono text-3xl m-24 ">Similarity Calculator</h1>
      <div className="flex justify-around items-center gap-10 max-[760px]:flex-col">
        <Card title="Inference API 🤗" id="1"/>
      </div>
      <hr className="my-12 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:via-neutral-400" />
      <Description />
      <footer className="text-center text-gray-500 text-sm mt-10"></footer>

      
    </div>
  );
}

export default App
