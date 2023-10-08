function startTimer(reminderId) {
    const timerElement = document.getElementById(`${reminderId}-timer`);
    const endTime = new Date();
    endTime.setMinutes(endTime.getMinutes() + 15); // Set a 15-minute timer

    const interval = setInterval(function () {
        const currentTime = new Date();
        const remainingTime = new Date(endTime - currentTime);

        const minutes = remainingTime.getMinutes();
        const seconds = remainingTime.getSeconds();

        const formattedTime = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        timerElement.textContent = formattedTime;

        if (remainingTime <= 0) {
            clearInterval(interval);
            timerElement.textContent = "Time's up!";
            alert(`It's time for your ${reminderId} reminder.`);
        }
    }, 1000);
}
