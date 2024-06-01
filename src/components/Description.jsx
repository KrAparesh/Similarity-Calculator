
const Description = () => {
  return (
    <div className="flex justify-center flex-col">
      {/* <span className="flex justify-center font-mono">.</span>  */}
      
      <div className="flex flex-col font-mono justify-center text-center mx-24 border border-gray-300 rounded-lg p-4">
        <h1 className="flex justify-left font-bold text-2xl my-2">Here we are using the inference API offered by HuggingFace</h1>
        <hr />
        <p className="flex flex-col text-left ">
          <br />We input the API key and the two strings whose embeddings we want to compare.
          <br />Once we get the embeddings, we calculate the dot product of the two embeddings and return the result.
          <br />The dot product is a measure of similarity between the two embeddings. A higher dot product indicates higher similarity between the two embeddings.
          <br />Under the hood, the inference API launches a dedicated compute environment to run the model and generate the embeddings. This allows us to offload the compute-intensive task to HuggingFaces infrastructure.
          <br /><span className="font-bold ">Therefore, if its your first time running this code, it may take a few seconds to start the environment.</span> Subsequent runs should be faster as the environment is reused.
        </p>

      </div>
    </div>
  )
}

export default Description;