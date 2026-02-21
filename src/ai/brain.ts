// src/ai/brain.ts

function sigmoid(x: number): number {
  return 1 / (1 + Math.exp(-x));
}

// derivative of sigmoid (important for learning)
function sigmoidDerivative(output: number): number {
  return output * (1 - output);
}

export class Neuron {
  weights: number[];
  bias: number;
  learningRate: number;

  lastInputs: number[] = [];
  lastOutput = 0;

  constructor(inputSize: number, learningRate = 0.1) {
    this.weights = [];
    for (let i = 0; i < inputSize; i++) {
      this.weights.push(Math.random() * 2 - 1);
    }
    this.bias = Math.random() * 2 - 1;
    this.learningRate = learningRate;
  }

  predict(inputs: number[]): number {
    this.lastInputs = inputs;

    let sum = 0;
    for (let i = 0; i < this.weights.length; i++) {
      sum += inputs[i] * this.weights[i];
    }

    this.lastOutput = sigmoid(sum + this.bias);
    return this.lastOutput;
  }

  applyGradient(error: number) {
    const gradient = error * sigmoidDerivative(this.lastOutput);

    for (let i = 0; i < this.weights.length; i++) {
      this.weights[i] += this.learningRate * gradient * this.lastInputs[i];
    }

    this.bias += this.learningRate * gradient;
  }
}


export class Layer {
  neurons: Neuron[];

  constructor(inputSize: number, neuronCount: number, learningRate = 0.1) {
    this.neurons = [];

    for (let i = 0; i < neuronCount; i++) {
      this.neurons.push(new Neuron(inputSize, learningRate));
    }
  }

  forward(inputs: number[]): number[] {
    return this.neurons.map(neuron => neuron.predict(inputs));
  }
}

export class NeuralNetwork {
  hiddenLayer: Layer;
  outputNeuron: Neuron;

  constructor(inputSize: number, hiddenSize: number, learningRate = 0.1) {
    this.hiddenLayer = new Layer(inputSize, hiddenSize, learningRate);
    this.outputNeuron = new Neuron(hiddenSize, learningRate);
  }

  predict(inputs: number[]): number {
    const hiddenOutputs = this.hiddenLayer.forward(inputs);
    return this.outputNeuron.predict(hiddenOutputs);
  }

  train(inputs: number[], target: number) {
    // forward pass
    const hiddenOutputs = this.hiddenLayer.forward(inputs);
    const output = this.outputNeuron.predict(hiddenOutputs);

    // output error
    const outputError = target - output;

    // train output neuron
    this.outputNeuron.applyGradient(outputError);

    // train hidden neurons
    this.hiddenLayer.neurons.forEach((neuron, index) => {
      const propagatedError =
        outputError * this.outputNeuron.weights[index];

      neuron.applyGradient(propagatedError);
    });
  }
}


