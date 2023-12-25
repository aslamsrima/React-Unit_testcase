# Jackpot Light Controller

This is a simple React component that simulates a jackpot light controller. The component displays a circle divided into 10 equal segments or slots, with one slot lit up at a time. Users can rotate the lit slot in a clockwise direction by clicking the "Rotate" button.

## Features

- Visual representation of a circle with 10 slots.
- Only one slot is active at a time and is visually distinct.
- Rotation of the active slot in a clockwise direction.
- User-friendly "Rotate" button to trigger the rotation.
- Proper styling and responsiveness.

## Prerequisites

- Node.js: Make sure you have Node.js installed. You can download it from [nodejs.org](https://nodejs.org/).

## Getting Started

To get started with this project, you can follow these steps:

1. Install the required dependencies:

   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm start
   ```
3. Open your web browser and visit:
   ```bash
   http://localhost:3000
   ```

## Running Tests

You can run tests for this project to ensure that the application functions as expected. We use React Testing Library for testing.

1. Run the tests using the following command:
   ```bash
   npm test
   ```
   
The tests include:

1. Rendering the initial state of the JackpotLightController component.
1. Verifying that the slots rotate when the "Rotate" button is clicked.
1. Ensuring that the slots wrap around after rotating through all slots.

## Usage

- The page loads with the first slot active.
- Click the "Rotate" button to move the active slot to the next slot in a clockwise direction.
- The highlighted slot at the top is the active slot.

## Acknowledgments

- Created with React.js.
- CSS transitions and animations for a smooth user experience
