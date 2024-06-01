// We will be using NodeJs to generate the embeddings locally and then compare them.
// Under the hood, we use the ONNX runtime to run the model and generate the embeddings. This allows us to run the model locally without the need for an internet connection.

import { pipeline } from '@xenova/transformers';

async function compareEmbeddingTransformers() {
    let generateEmbeddings = await pipeline('feature-extraction', 'Xenova/all-MiniLM-L6-v2');
    console.log("Pipeline created successfully");
    let output = await generateEmbeddings('Hey! I am a giraffe.', { pooling: 'mean', normalize: true }); 
    console.log(output);
}

export default compareEmbeddingTransformers;
