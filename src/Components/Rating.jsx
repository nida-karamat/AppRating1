import React, { useState } from "react";
import Feedback from "./Feedback";

const Rating = () => {
  const [selectedRating, setSelectedRating] = useState(5);
  const [showFeedback, setShowFeedback] = useState(false);

  const handleRatingClick = (rating) => {
    setSelectedRating(rating);
  };

  const handleSubmit = () => {
    setShowFeedback(true);
  };

  return (
    <div className="flex items-center justify-center w-full h-screen bg-gray-900">
      <div className="w-80 p-6 rounded-lg bg-gray-800 text-white shadow-lg">
        <div className="flex mb-4">
          <span className="text-orange-500">★</span>
        </div>
        <h2 className="text-xl font-semibold mb-2">How did we do?</h2>
        <p className="text-sm text-gray-400 mb-6">
          Please let us know how we did with your support request. All feedback
          is appreciated to help us improve our offering!
        </p>
        <div className="flex justify-between mb-6">
          {[1, 2, 3, 4, 5].map((rating) => (
            <button
              key={rating}
              onClick={() => handleRatingClick(rating)}
              className={`w-10 h-10 rounded-full flex items-center justify-center ${
                selectedRating === rating
                  ? "bg-orange-500 text-white"
                  : "bg-gray-700 text-gray-400 hover:bg-gray-600"
              }`}
            >
              {rating}
            </button>
          ))}
        </div>

        <button
          onClick={handleSubmit}
          className="w-full py-3 rounded-full bg-orange-500 text-white uppercase tracking-widest text-sm font-medium hover:bg-orange-400 transition-colors"
        >
          SUBMIT
        </button>
      </div>
      {showFeedback && <Feedback />}
    </div>
  );
};

export default Rating;
