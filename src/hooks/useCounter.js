import { useContext } from "react";
import { CounterContext } from "../context/CounterContext";


export function useCounter() {
    return useContext(CounterContext)
}