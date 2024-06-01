import { useState } from "react";
import { pipeline } from '../../node_modules/@xenova/transformers/dist/transformers.min.js';
import compareEmbeddingsInferenceAPI from './../backend/embeddings-huggingface';
// import compareEmbeddingTransformers from  './../backend/embeddings-transformers';

// eslint-disable-next-line react/prop-types
const Card = ({ title, id }) => {
    const [similarity, setSimilarity] = useState(null);
    const [button, setButton] = useState("Compare");
    const [executionTime, setexecutionTime] = useState(0);

    


    const handleHuggingFace = async () => {
        const date = new Date();
        const start = date.getTime();
        setButton("Loading...");
        const input1 = document.getElementById("input1").value;
        const input2 = document.getElementById("input2").value;
        // const input1 = "I am happy";
        // const input2 = "I am a panda";
        const similarity = await compareEmbeddingsInferenceAPI(import.meta.env.VITE_HF_TOKEN, input1, input2);
        setSimilarity(similarity);
        setButton("Compare");
        const currentTime = new Date().getTime();
        const difference = (currentTime - start) / 1000; // difference in seconds
        setexecutionTime(difference);
    }

    const handleTransformers = async () => {
        // Under construction:

        const generateEmbeddings = async () => {
            const model = await window.pipeline.load('feature-extraction', '');
            console.log(model);
            const output = await model('Hey! I am a giraffe.', { pooling: 'mean', normalize: true });
            console.log(output);
        }
        await generateEmbeddings();
    }

return (
    <div className="bg-white rounded-lg shadow-lg p-4 flex flex-col min-w-40 max-w-60 ring-1 ring-offset-slate-400">
        <h1 className="text-2xl font-bold mb-4 text-center">{title}</h1>
        <hr className="mb-6" />
        <input
            className="border border-gray-300 rounded-lg px-4 py-2 my-2"
            type="text"
            name=""
            id="input1"
            placeholder="I am happy"
        />
        <input
            className="border border-gray-300 rounded-lg px-4 py-2 my-2"
            type="text"
            name=""
            id="input2"
            placeholder="I am in a mood of joy!"
        />
        <button 
            className={"bg-blue-500 text-white rounded-lg px-3 py-2 my-2 hover:bg-blue-600 " + (button === 'Loading...' ? " cursor-not-allowed" : "cursor-pointer") }
            onClick={async () => {
                if(id == "1") {
                    handleHuggingFace();
                } else if (id == "2") {
                    handleTransformers();   
                } 
            }}
        >     
        {button}

        </button>
        { similarity ? (
            <div className="grid grid-cols-2">
                <div key={id} className={"bg-gray-200 rounded-lg px-4 py-2 flex col-span-2/3 justify-center"}>
                    {similarity.toFixed(2)}
                </div>
                <div className="flex flex-row items-center justify-end p-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentcolor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                    <p className="mx-2">{executionTime}s</p>
                </div>
            </div>
        ) : null
        }
    </div>
);

}


export default Card