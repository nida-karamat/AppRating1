import React from "react";

const Feedback = ({rating}) => {
  return (
    <div className="flex items-center justify-center w-full h-screen bg-gray-900">
      <div className="w-80 p-6 rounded-lg bg-gray-800 text-white shadow-lg">
        <div className="flex justify-center mb-6">
          <div className="text-center mb-4">
            <p className="text-orange-500 text-sm mb-3">
              You Selected {rating} out of 5
            </p>
            <h2 className="text-2xl font-bold mb-3">Thank you!</h2>
            <p className="text-sm text-gray-400">
              We appreciate you taking the time to give a rating. If you ever
              need more support, don't hesitate to get in touch!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
