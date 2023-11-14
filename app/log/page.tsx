'use client'
import { useState } from 'react';
import Modal from 'react-modal';

const LogTimePage: React.FC = () => {
  const [startTime, setStartTime] = useState<string>('');
  const [endTime, setEndTime] = useState<string>('');
  const [selectedLocation, setSelectedLocation] = useState<string>('Location A');
  const [loggedTime, setLoggedTime] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const locations = ['Location A', 'Location B', 'Location C', 'Location D', 'Location E'];

  const handleLogTime = () => {
    // Add logic to calculate and store the logged time
    if (startTime && endTime) {
      const start = new Date(startTime);
      const end = new Date(endTime);

      if (!isNaN(start.getTime()) && !isNaN(end.getTime()) && start < end) {
        const diffInMillis = end.getTime() - start.getTime();
        const hours = Math.floor(diffInMillis / (1000 * 60 * 60));
        const minutes = Math.floor((diffInMillis % (1000 * 60 * 60)) / (1000 * 60));
        const loggedTimeString = `${hours} hours and ${minutes} minutes at ${selectedLocation}`;
        setLoggedTime(loggedTimeString);
        openModal();
      } else {
        setLoggedTime(null);
      }
    }
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    // Add logic to refresh the page
    window.location.reload();
  };

  return (
    <div>
      <h1>Log Your Time</h1>
      <label>
        Start Time:
        <input type="datetime-local" value={startTime} onChange={(e) => setStartTime(e.target.value)} />
      </label>
      <br />
      <label>
        End Time:
        <input type="datetime-local" value={endTime} onChange={(e) => setEndTime(e.target.value)} />
      </label>
      <br />
      <label>
        Location:
        <select value={selectedLocation} onChange={(e) => setSelectedLocation(e.target.value)}>
          {locations.map((location) => (
            <option key={location} value={location}>
              {location}
            </option>
          ))}
        </select>
      </label>
      <br />
      <button onClick={handleLogTime}>Log Time</button>

      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Logged Time Modal"
      >
        <h2>Time Logged</h2>
        {loggedTime && <p>{loggedTime}</p>}
        <button onClick={closeModal}>Close</button>
      </Modal>
    </div>
  );
};

export default LogTimePage;
