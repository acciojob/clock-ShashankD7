function updateTime() {
      // Get the current date and time
      const d = new Date();

      // Get the date components
      const month = d.getMonth() + 1; // January is month 0
      const day = d.getDate();
      const year = d.getFullYear().toString(); // Get the last two digits

      // Get the time components
      const hours = d.getHours();
		let newHours;
		if (hours > 12) {
			newHours = hours - 12;
		}
		else if (hours == 0) {
		newHours = 12;
	}
      const minutes = d.getMinutes();
      const seconds = d.getSeconds();

      // Format the date and time strings
      const formattedDate = `${month.toString().padStart(2, '0')}/${day.toString().padStart(2, '0')}/${year}`;
      const formattedTime = `${newHours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

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