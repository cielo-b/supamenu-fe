// src/components/TimePicker.tsx
import { useState } from "react";

interface TimePickerProps {
  time: string;
  setTime: (time: string) => void;
}

export default function TimePicker({ time, setTime }: TimePickerProps) {
  const [showModal, setShowModal] = useState(false);
  const [hours, setHours] = useState(time.split(":")[0]);
  const [minutes, setMinutes] = useState(time.split(":")[1]);

  const handleSave = () => {
    setTime(`${hours.padStart(2, "0")}:${minutes.padStart(2, "0")}`);
    setShowModal(false);
  };

  return (
    <>
      <button
        onClick={() => setShowModal(true)}
        className="p-2 border rounded w-full text-left"
      >
        {time}
      </button>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg w-80">
            <h3 className="font-bold text-center mb-4">Select Time</h3>

            <div className="flex justify-center space-x-4 mb-4">
              <div>
                <label className="block mb-1">Hours</label>
                <input
                  type="number"
                  min="0"
                  max="23"
                  value={hours}
                  onChange={(e) => setHours(e.target.value)}
                  className="w-16 p-2 border rounded text-center"
                />
              </div>
              <div>
                <label className="block mb-1">Minutes</label>
                <input
                  type="number"
                  min="0"
                  max="59"
                  value={minutes}
                  onChange={(e) => setMinutes(e.target.value)}
                  className="w-16 p-2 border rounded text-center"
                />
              </div>
            </div>

            <div className="flex justify-between">
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 bg-gray-200 rounded"
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                className="px-4 py-2 bg-blue-500 text-white rounded"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
