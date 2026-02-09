import { Neuron } from "./ai/brain";
import { useRef, useState } from "react";

type TrainingSample = {
  inputs: number[];
  target: number;
};

function App() {
  const neuronRef = useRef<Neuron | null>(null);
  const [epoch, setEpoch] = useState(0);
  const [output, setOutput] = useState<number | null>(null);

  if (!neuronRef.current) {
    neuronRef.current = new Neuron(2, 0.1);
  }

  const dataset: TrainingSample[] = [
    { inputs: [0, 0], target: 0 },
    { inputs: [0, 1], target: 0 },
    { inputs: [1, 0], target: 0 },
    { inputs: [1, 1], target: 1 },
  ];

  const trainEpoch = () => {
    let totalError = 0;

    dataset.forEach(sample => {
      const error = neuronRef.current!.train(
        sample.inputs,
        sample.target
      );
      totalError += Math.abs(error);
    });

    const testOutput = neuronRef.current!.predict([1, 1]);

    setEpoch(e => e + 1);
    setOutput(testOutput);
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>AI From Scratch</h1>

      <button onClick={trainEpoch}>
        Train One Epoch
      </button>

      <p>Epoch: {epoch}</p>

      {output !== null && (
        <p>Output for [1,1]: {output.toFixed(4)}</p>
      )}
    </div>
  );
}

export default App;
