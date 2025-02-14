import React from 'react';
import Slots from '../components/Slots';

const SlotPage = () => {
  return (
    <div className="container mx-auto p-4">
      {/* <h1 className="text-2xl font-bold text-center mb-6">
        Select a Time Slot
      </h1> */}
      <Slots />
    </div>
  );
};

export default SlotPage;