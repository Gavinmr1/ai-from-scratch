## AI From Scratch

### Goal
Build a learning decision-making AI from first principles, then wire it into a React UI.

By the end, you will have:
- A neural network written in plain JavaScript
- Training logic you fully understand
- A React UI to interact with the model
- A foundation you can adapt to games, agents, and other AI projects

Think of it as a small brain engine you can see, control, and extend.

### What We Are Building
The AI will:
- Take numeric inputs
- Make predictions / decisions
- Learn from mistakes over time
- Keep memory across steps
- Be visualized and controlled from React

### Architecture
React UI
- Controls (train, reset, test)
- Visualization (weights, outputs, loss)

AI Engine (pure JS)
- Neuron
- Layer
- NeuralNetwork
- Trainer (learning)
- Memory

React never thinks.
The AI never renders.
Clean separation.

## Phases

### Phase 0 - Environment & Structure (done / quick)
Goal: Stable foundation.

Checklist:
- React app created
- [src/ai](src/ai) folder exists
- Brain module connected to React

### Phase 1 - Single Neuron (understanding intelligence)
Goal: Understand what "thinking" really is.

You will build:
- A neuron from scratch
- Weighted inputs
- Bias
- Activation function

Skills you learn:
- Why AI is math
- Why weights matter
- How output changes with input

Deliverable:
- A neuron that outputs a number between 0 and 1
- React button to run it

### Phase 2 - Multiple Neurons & Layers
Goal: Go from "calculator" to "pattern recognizer".

You will build:
- A layer of neurons
- A full neural network class
- Forward propagation

Skills:
- Abstraction
- Matrix-like thinking (without libraries)
- Why layers create intelligence

Deliverable:
- A network that can solve simple problems (AND / OR logic)

### Phase 3 - Learning (backpropagation)
Goal: Make it actually learn.

You will build:
- Error calculation
- Gradient descent
- Weight updates
- Training loop

Skills:
- Why AI improves
- How learning rate works
- Why models fail

Deliverable:
- Network improves over time
- Loss decreases visibly

### Phase 4 - Memory & State
Goal: Make it stateful (agent-like).

You will add:
- Short-term memory
- Previous outputs as inputs
- Stateful predictions

Skills:
- How agents work
- Why memory matters
- Foundations of RNNs (without calling it that)

Deliverable:
- AI behavior changes based on history

### Phase 5 - Decision Engine
Goal: Turn outputs into choices.

You will build:
- Scoring system
- Thresholds
- Action selection

Skills:
- AI is not chat
- How game AIs think
- How agents act

Deliverable:
- AI chooses between actions (A / B / C)

### Phase 6 - React Control Panel
Goal: Make it interactive and visual.

You will build:
- Train button
- Reset button
- Live outputs
- Loss graph (simple)

Skills:
- AI debugging
- Observability
- Real-world tooling mindset

Deliverable:
- You can see the brain thinking

### Phase 7 - Polish & Extend
Goal: Make it yours.

Options:
- Evolutionary mutations
- Reinforcement learning
- Text token inputs
- Game agent
- Multi-agent system

This is where you stop following and start inventing.

## Execution Rules
We will:
- Write small files
- Test every step in React
- Never add complexity early
- Never hide math
- Never "just trust me"
- Pause and unpack anything fuzzy

## Next Step
Before we write another line of code, pick the AI's first learning task:

1) Logical patterns (AND / OR / XOR)
2) Simple numeric prediction
3) Game-style decision making
4) Surprise me, but teach me deeply

Reply with the number.
