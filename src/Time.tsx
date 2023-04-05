import React, {useEffect, useState} from 'react';

const Time = () => {
  const [time, setTime] = useState(new Date());
  const [endTime, setEndTime] = useState('');
  const [countdownDate, setCountdownDate] = useState(0);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const handleSetTimer = () => {
    setEndTime(endTime)
    setCountdownDate(new Date(endTime).getTime())
    localStorage.setItem('endTime', endTime);
  };

  useEffect(() => {

    const endTimeFromLocalStorage = localStorage.getItem('endTime');
    if (endTimeFromLocalStorage) {
      setEndTime(endTimeFromLocalStorage);
      setCountdownDate(new Date(endTimeFromLocalStorage).getTime());
    }

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({days, hours, minutes, seconds});
    }, 1000);

    setInterval(() => {
      setTime(new Date());

    }, 1000);

    return () => clearInterval(interval);
  }, [countdownDate]);



  return (
      <>

        <div>
          <div>
            <label htmlFor="endtime"> Введите конечное время: </label>
            <input
                type="datetime-local"
                id="endtime"
                name="endtime"
                value={endTime}
                onChange={(e) => setEndTime(e.target.value)}
            />

            <button onClick={handleSetTimer}>Установить таймер</button>
          </div>
          <h1 className="countdownDate">
            Until the date {new Date(countdownDate).toLocaleDateString()} time{" "}
            {new Date(countdownDate).toLocaleTimeString()} left:
          </h1>
          <div className="timeLeft">
            {timeLeft.days} дней {timeLeft.hours} часов{" "}
            {timeLeft.minutes} минут {timeLeft.seconds} секунд
          </div>
        </div>
        <div>
          <h2>{time.toLocaleTimeString()}</h2>
          <h2>{time.toLocaleDateString()}</h2>
        </div>
      </>
  );
};

export default Time;