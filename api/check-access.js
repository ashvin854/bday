module.exports = (req, res) => {
  const targetDate = new Date('2025-07-24T00:00:00+05:30');
  const currentDate = new Date();
  
  if (currentDate >= targetDate) {
    res.status(200).json({ accessGranted: true });
  } else {
    const timeRemaining = targetDate - currentDate;
    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
    
    res.status(200).json({ 
      accessGranted: false,
      message: 'Access denied. Content will be available on July 24, 2025 at 12:00 AM.',
      timeRemaining: { days, hours, minutes, seconds }
    });
  }
};
