window.onerror = function(message, source, lineno, colno, error) {
  // Handle the exception here
  console.error('Uncaught Exception:', message, error);

  // Prevent the error from being displayed in the console
  return true;
};


function updateTime() {
      // Get the current date and time
      const d = new Date();

      // Get the date components
      const month = d.getMonth() + 1; // January is month 0
      const day = d.getDate();
      const year = d.getFullYear(); // Get the last two digits

      // Get the time components
      const hours = d.getHours();
		let newHours;
		if (hours > 12) {
			newHours = hours - 12;
		}
		else if (hours == 0) {
		newHours = 12;
	   }
	   else {
		   newHours = hours;
	   }
      const minutes = d.getMinutes();
      const seconds = d.getSeconds();

      // Format the date and time strings
      const formattedDate = `${month}/${day}/${year}`;
      const formattedTime = `${newHours}:${minutes}:${seconds}`;

      // Determine AM/PM
      const ampm = hours >= 12 ? 'PM' : 'AM';

      // Update the HTML elements
      document.getElementById('date').textContent = formattedDate;
      document.getElementById('time').textContent = formattedTime;
      document.getElementById('ampm').textContent = ampm;
    }

    // Update the time immediately
    updateTime();

    // Update the time every second
    setInterval(updateTime, 1000);