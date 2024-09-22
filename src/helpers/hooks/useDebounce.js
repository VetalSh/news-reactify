import { useEffect } from "react";
import { useState } from "react"

export const useDebounce = (value, delay) => {
    const [debouncedValue, setDeboucedValue] = useState(value);

    useEffect(() => {
        const handler = setTimeout(() => {
            setDeboucedValue(value);
        }, delay);

        return () => {
            clearTimeout(handler);
        };
    }, [value, delay]);

    return debouncedValue;
}