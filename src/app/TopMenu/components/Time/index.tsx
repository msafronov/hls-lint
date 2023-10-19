import { useEffect, useState } from 'preact/hooks';
import { Text } from '@/ui/Text';

const formatAMPM = (date: Date) => {
    let hours = date.getHours();
    let minutes: number | string = date.getMinutes();
    let ampm = hours >= 12 ? 'PM' : 'AM';

    hours = hours % 12;
    hours = hours ? hours : 12;
    minutes = minutes < 10 ? '0'+minutes : minutes;

    return hours + ':' + minutes + ' ' + ampm;
};

export const Time = () => {
    const [time, setTime] = useState(formatAMPM(new Date()));

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(formatAMPM(new Date()));
        }, 5000);

        return () => {
            clearInterval(interval);
        };
    }, []);

    return (
        <Text weight="bold">
            {time}
        </Text>
    );
};
