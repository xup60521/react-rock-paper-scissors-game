import { flushSync } from "react-dom";
import { whoWins, type Picked } from "./utils";
import { useContext } from "react";
import { pickContext } from "@/components/PickProvider";

export const useStartTransition = () => {
    return function (func: () => void) {
        const document2 = document as unknown as Document & {
            startViewTransition: (a: () => void) => void;
        };
        if ("startViewTransition" in document2) {
            document2.startViewTransition(() => {
                flushSync(() => {
                    func();
                });
            });
        } else {
            func();
        }
    };
};

export const useGame = () => {
    const transition = useStartTransition();
    const { setMyPick, myPick, setHousePick, housePick, score, setScore } =
        useContext(pickContext);
    return {
        setPicked(e: Picked) {
            transition(() => {
                setMyPick(e);
            });
            setTimeout(() => {
                const randomNumber = Math.floor(Math.random() * 3);
                const housePick =
                    randomNumber === 0
                        ? "paper"
                        : randomNumber === 1
                        ? "rock"
                        : "scissors";
                setHousePick(housePick);
                const whoIsWinning = whoWins(e, housePick);
                console.log(whoIsWinning)
                setScore((prev) => {
                    if (whoIsWinning === "p1") {
                        return prev + 1;
                    }
                    if (whoIsWinning === "p2" && prev !== 0) {
                        return prev - 1;
                    }
                    return prev;
                });
            }, 1000);
        },
        myPick,
        housePick,
        score,
        newGame() {
            transition(() => {
                setMyPick("");
                setHousePick("");
            });
        },
    };
};
