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

  constructor(inputSize: number, learningRate = 0.1) {
    this.weights = [];
    for (let i = 0; i < inputSize; i++) {
      this.weights.push(Math.random() * 2 - 1);
    }
    this.bias = Math.random() * 2 - 1;
    this.learningRate = learningRate;
  }

  predict(inputs: number[]): number {
    let sum = 0;
    for (let i = 0; i < this.weights.length; i++) {
      sum += inputs[i] * this.weights[i];
    }
    return sigmoid(sum + this.bias);
  }

  train(inputs: number[], target: number): number {
    const output = this.predict(inputs);
    const error = target - output;

    // gradient
    const gradient = error * sigmoidDerivative(output);

    // update weights
    for (let i = 0; i < this.weights.length; i++) {
      this.weights[i] += this.learningRate * gradient * inputs[i];
    }

    // update bias
    this.bias += this.learningRate * gradient;

    return error;
  }
}
