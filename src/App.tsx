import { NeuralNetwork } from "./ai/brain";
import { useRef, useState } from "react";

type Sample = {
  inputs: number[];
  target: number;
};

function App() {
  const networkRef = useRef<NeuralNetwork | null>(null);
  const [epoch, setEpoch] = useState(0);
  const [output, setOutput] = useState<number | null>(null);

  if (!networkRef.current) {
    networkRef.current = new NeuralNetwork(2, 2, 0.1);
  }

  const dataset: Sample[] = [
    { inputs: [0, 0], target: 0 },
    { inputs: [0, 1], target: 1 },
    { inputs: [1, 0], target: 1 },
    { inputs: [1, 1], target: 0 },
  ];

  const trainEpoch = () => {
    dataset.forEach(sample => {
      networkRef.current!.train(sample.inputs, sample.target);
    });

    const test = networkRef.current!.predict([1, 0]);

    setEpoch(e => e + 1);
    setOutput(test);
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>AI From Scratch</h1>

      <button onClick={trainEpoch}>
        Train One Epoch
      </button>

      <p>Epoch: {epoch}</p>

      {output !== null && (
        <p>Output for [1,0]: {output.toFixed(4)}</p>
      )}
    </div>
  );
}

export default App;
