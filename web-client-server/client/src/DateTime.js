//Code is from https://medium.com/create-a-clocking-in-system-on-react/create-a-react-app-displaying-the-current-date-and-time-using-hooks-21d946971556
import React, {useEffect, useState} from 'react';

export default function DateTime () {
    let [time, setTime] = useState(new Date());

    useEffect(() => {
        var timer = setInterval(() => setTime(new Date()), 1000)
        return function cleanup() {
            clearInterval(timer)
        }
    });

    return (
        <div>
            <p> {time.toLocaleString()}</p>
        </div>
    );
}