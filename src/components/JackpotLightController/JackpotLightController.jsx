import React, { useState } from 'react';
import './JackpotLightController.css';

// Total number of slots
const TOTAL_SLOTS = 10;

const JackpotLightController = () => {
    // Initialize the activeSlot state with default value 1
    const [activeSlot, setActiveSlot] = useState(1);

    const handleRotate = () => {
        // Function to move the active slot to the next slot in a clockwise direction
        setActiveSlot(activeSlot + 1);
    };

    return (
        <div className="jackpot-light-controller">
            <div className="slots-container" style={{ transform: `rotate(${-(activeSlot - 1) * 36}deg)` }}>
                {Array.from({ length: TOTAL_SLOTS }, (_, i) => {
                    const slotNumber = i + 1;   // Current slot number
                    const activeSlotNumber = activeSlot % TOTAL_SLOTS || TOTAL_SLOTS; // slot number between 1-10
                    const isActive = activeSlotNumber === slotNumber; // Check is current slot is active or not
                    const rotation = ((i - 2) * 36) - 18; // Rotation of slot container
                    const innerRotation = -(i - activeSlot - 1) * 36 + 18; // Rotation of individual slot

                    return (
                        <div
                            key={slotNumber}
                            className={`slot ${isActive ? 'active' : ''}`}
                            style={{
                                transform: `rotate(${rotation}deg) translate(220%) rotate(${innerRotation}deg)`,
                            }}
                        >
                            {slotNumber}
                        </div>
                    );
                })}
            </div>
            <button onClick={handleRotate} className="rotate-button">
                Rotate
            </button>
        </div>
    );
};

export default JackpotLightController;
