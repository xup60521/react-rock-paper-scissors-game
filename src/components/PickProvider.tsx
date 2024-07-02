import { type Picked } from "@/lib/utils";
import { createContext, useState } from "react";
import { unknown } from "zod";

export const pickContext = createContext({
    myPick: "" as Picked,
    setMyPick: unknown as React.Dispatch<React.SetStateAction<Picked>>,
    housePick: "" as Picked,
    setHousePick: unknown as React.Dispatch<React.SetStateAction<Picked>>,
    score: 0,
    setScore: unknown as React.Dispatch<React.SetStateAction<number>>
});

export function PickProvider({ children }: { children: React.ReactNode }) {
    const [myPick, setMyPick] = useState<Picked>("");
    const [housePick, setHousePick] = useState<Picked>("");
    const [score, setScore] = useState(0)
    return (
        <pickContext.Provider
            value={{ myPick, setMyPick, housePick, setHousePick, score, setScore }}
        >
            {children}
        </pickContext.Provider>
    );
}
