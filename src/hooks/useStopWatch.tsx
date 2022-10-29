import { useState, useRef, useEffect, useCallback } from "react";

function makeTime(time: number) {
  return time < 10 ? `0${time}` : time;
}

export type StopWatchStatus = 'start' | 'stop' | 'reset';

interface StopWatchProps {
  status: StopWatchStatus
}

export default function useStopWatch({ status }: StopWatchProps) {
  const [watch, setWatch] = useState('00:00.00');
  const intervalKeyRef = useRef<NodeJS.Timer | null>(null);
  const minuteRef = useRef<number | null>(null);
  const secondRef = useRef<number | null>(null);
  const millisecondRef = useRef<number | null>(null);

  const updateWatch = useCallback((millisecond: number, second: number, minute: number) => {
    setWatch((prevWatch) => prevWatch = `${makeTime(minute)}:${makeTime(second)}.0${millisecond}`);
  }, []);

  useEffect(() => {
    function start() {
      let minute = minuteRef.current ?? 0;
      let second = secondRef.current ?? 0;
      let millisecond = millisecondRef.current ?? 0;
  
      intervalKeyRef.current = setInterval(() => {
        millisecond++;
        if (millisecond === 10) {
          millisecond = 0;
          second++;
          if (second === 59) {
            second = 0;
            minute++;
            if (minute === 59) {
              clearInterval(intervalKeyRef.current as NodeJS.Timer);
            }
          }
        }
        minuteRef.current = minute;
        secondRef.current = second;
        millisecondRef.current = millisecond;
        updateWatch(millisecond, second, minute);
      }, 100);
    }
    function stop() {
      if (intervalKeyRef.current) {
        clearInterval(intervalKeyRef.current);
      }
    }
    function reset() {
      if (!intervalKeyRef.current) return;
      clearInterval(intervalKeyRef.current);
      setWatch('00:00.00');
      intervalKeyRef.current = null;
      minuteRef.current = null;
      secondRef.current = null;
      millisecondRef.current = null;
    }

    switch (status) {
      case 'start':
        start();
        return;
      case 'stop':
        stop();
        return;
      case 'reset':
        reset();
        return;
    }
  }, [status, updateWatch]);

  return {
    watch
  }
}
