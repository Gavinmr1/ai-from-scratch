import testBrain from "./ai/brain";

function App() {
  return (
    <div style={{ padding: 20 }}>
      <h1>AI From Scratch</h1>
      <button onClick={() => alert(testBrain())}>
        Run AI
      </button>
    </div>
  );
}

export default App;