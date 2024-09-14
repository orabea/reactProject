import { createContext, useState } from "react";

export const CounterContext = createContext();

export function CounterContextProvider(props) {
    const [counter, setCounter] = useState(0);
    const [user, setUser] = useState('');

    function ChangeCounter() {
        setCounter(Math.random(0, 1000));
    }

    return (
        <CounterContext.Provider value={{ counter, user, setCounter, setUser, ChangeCounter }}>
            {props.children}
        </CounterContext.Provider>
    );
}