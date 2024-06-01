import { HfInference } from '@huggingface/inference'

async function compareEmbeddingInferenceAPI(api_key: string, s1: string, s2: string) {

    // console.log(api_key, s1, s2)

    const hf = new HfInference(api_key);

    const vector_s1 = await hf.featureExtraction({
        model: 'intfloat/e5-small-v2',
        inputs: s1
    });

    const vector_s2 = await hf.featureExtraction({
        model: 'intfloat/e5-small-v2',
        inputs: s2
    });
    
    if (!Array.isArray(vector_s1) || !Array.isArray(vector_s2)) {
        throw new Error('Invalid vector');
    }

    const dotProduct = (vector_s1 as number[]).reduce((acc, val, index) => acc + val * (vector_s2 as number[])[index], 0);

    console.log(dotProduct);
    return dotProduct;

}

export default compareEmbeddingInferenceAPI


// NOTES:
// Here we are using the inference API offered by HuggingFace. We input the API key and the two strings whose embeddings we want to compare.
// Once we get the embeddings, we calculate the dot product of the two embeddings and return the result.
// The dot product is a measure of similarity between the two embeddings. A higher dot product indicates higher similarity between the two embeddings.
// Under the hood, the inference API launches a dedicated compute environment to run the model and generate the embeddings. This allows us to offload the compute-intensive task to HuggingFace's infrastructure.
// Therefore, if it's your first time running this code, it may take a few seconds to start the environment. Subsequent runs should be faster as the environment is reused.