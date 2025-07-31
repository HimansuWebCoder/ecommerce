import React, { useState, useEffect } from 'react';
function FlashSalesTimer() {
    const deadline = new Date('July 23 2025');
    const [days, setDays] = useState(0);
    const [timer, setTimer] = useState({
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    const TimeBox = ({ label, value }) => (
    <div className="w-24 h-auto bg-red rounded-xl flex flex-col items-start md:items-center justify-end">
        <p className="text-center text-sm text-yellow font-bold font-poppins">{label}</p>
        <p className="text-center font-bold text-2xl text-black font-inter">{value}</p>
    </div>
);

    useEffect(() => {
    const calculateTimeLeft = () => {
        const currentDate = new Date();
        const timeLeft = deadline.getTime() - currentDate.getTime();

        const days = Math.floor(timeLeft / (24 * 60 * 60 * 1000));
        const hours = 23 - currentDate.getHours();
        const minutes = 59 - currentDate.getMinutes();
        const seconds = 59 - currentDate.getSeconds();

        setDays(days);
        setTimer({ hours, minutes, seconds });
    };

    calculateTimeLeft();
    const intervalId = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(intervalId);
}, [deadline]);

return (
    <div className='grid grid-cols-1 place-content-center mt-2 '>
            <div className="max-w-full flex text-black items-center">
                <TimeBox label="Days" value={days} />
                <TimeBox label="Hours" value={timer.hours} />
                <TimeBox label="Minutes" value={timer.minutes} />
                <TimeBox label="Seconds" value={timer.seconds} />
            </div>
    </div>
);

}

export default FlashSalesTimer;