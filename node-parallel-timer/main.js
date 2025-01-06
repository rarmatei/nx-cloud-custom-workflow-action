let count = 0;
const timer = setInterval(() => {
    const now = new Date();
    const time = now.toLocaleTimeString('en-US', {
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    });
    console.log(time);

    count++;
    if (count >= 10) {
        clearInterval(timer);
    }
}, 1000);