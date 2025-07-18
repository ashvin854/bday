module.exports = (req, res) => {
  try {
    // Enable CORS
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET');
    
    if (req.method === 'OPTIONS') {
      // Handle preflight request
      res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
      return res.status(200).end();
    }

    const targetDate = new Date('2025-07-24T00:00:00+05:30');
    const currentDate = new Date();
    
    if (currentDate >= targetDate) {
      console.log('Access granted - current date is after target date');
      return res.status(200).json({ 
        accessGranted: true,
        currentTime: currentDate.toISOString(),
        targetTime: targetDate.toISOString()
      });
    } 
    
    const timeRemaining = targetDate - currentDate;
    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
    
    console.log('Access denied - time remaining:', { days, hours, minutes, seconds });
    
    res.status(200).json({ 
      accessGranted: false,
      message: 'Access denied. Content will be available on July 24, 2025 at 12:00 AM.',
      timeRemaining: { days, hours, minutes, seconds },
      currentTime: currentDate.toISOString(),
      targetTime: targetDate.toISOString()
    });
    
  } catch (error) {
    console.error('Error in check-access API:', error);
    res.status(500).json({ 
      error: 'Internal server error',
      message: error.message,
      stack: process.env.NODE_ENV === 'development' ? error.stack : undefined
    });
  }
};
