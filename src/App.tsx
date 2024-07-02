import { Fragment } from "react";
import SelectPanel from "./components/SelectPanel";
import { whoWins, type Picked } from "./lib/utils";
import IconPaper from "@/assets/images/icon-paper.svg?react";
import IconScissors from "@/assets/images/icon-scissors.svg?react";
import IconRock from "@/assets/images/icon-rock.svg?react";
import { useGame } from "./lib/hooks";

export default function App() {
    const { myPick, housePick,score } = useGame();
    return (
        <div
            className="min-h-screen flex-col flex justify-center items-center gap-4"
            style={{
                background:
                    "radial-gradient(circle at top, hsl(214, 47%, 23%) 0%, hsl(237, 49%, 15%) 50%)",
            }}
        >
            <div className="flex flex-col gap-12 lg:w-[45vw] flex-grow items-center py-8 relative">
                <div className="rounded-2xl border-2 border-c_border_outline px-6 py-4 flex justify-between w-full">
                    <div className="flex flex-col">
                        <span className="font-barlow text-white font-bold text-[2.25rem] leading-8">
                            ROCK
                        </span>
                        <span className="font-barlow text-white font-bold text-[2.25rem] leading-8">
                            PAPER
                        </span>
                        <span className="font-barlow text-white font-bold text-[2.25rem] leading-8">
                            SCISSORS
                        </span>
                    </div>
                    <div className="flex flex-col items-center justify-center bg-white rounded-lg lg:w-32">
                        <span className="font-barlow text-c_score_text font-semibold ">
                            SCORE
                        </span>
                        <span className="font-barlow text-[3rem] text-c_dark_text font-bold -my-3">
                            {score}
                        </span>
                    </div>
                </div>
                {/* <button onMouseDown={()=>transition(()=>setPicked(""))}>reset</button> */}
                {myPick === "" && <SelectPanel />}
                {myPick !== "" && (
                    <div className="grid grid-cols-2 w-full relative">
                        <div
                            className={`flex flex-col gap-12 items-center transition ${
                                housePick !== "" && "-translate-x-[35%]"
                            }`}
                        >
                            <span className="font-barlow font-semibold text-white text-xl tracking-widest">
                                YOU PICKED
                            </span>
                            <div className="relative">
                                <WinGradient
                                    open={whoWins(myPick, housePick) === "p1"}
                                />
                                <DisplayPick picked={myPick} hasTransition />
                            </div>
                        </div>
                        <Result state={whoWins(myPick, housePick)} />
                        <div
                            className={`flex flex-col gap-12 items-center relative transition ${
                                housePick !== "" && "translate-x-[35%]"
                            }`}
                        >
                            <span className="font-barlow font-semibold text-white text-xl tracking-widest">
                                THE HOUSE PICKED
                            </span>
                            <div className="relative">
                                <WinGradient
                                    open={whoWins(myPick, housePick) === "p2"}
                                />
                                <DisplayPick picked={housePick} />
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
function Result({state}:{state: "p1" | "p2" | "draw" | ""}) {
    const text = state === "p1" ? "YOU WIN" : (state === "p2" ? "YOU LOSE" : "DRAW")
    const {newGame} = useGame()
    return <div className={`absolute gap-2 left-[50%] flex flex-col items-center -translate-x-[50%] top-[50%] -translate-y-[50%] transition ${state === "" ? "scale-0" : "scale-100"}`}>
        <span className="font-barlow text-white px-3 text-[2.5rem] font-bold">{text}</span>
        <button onMouseDown={()=>newGame()} className="w-full py-2 transition hover:text-red-700 rounded-md bg-white font-barlow text-sm">PLAY AGAIN</button>
    </div>
}
function DisplayPick(props: {
    picked: Picked;
    hasTransition?: boolean;
    win?: boolean;
}) {
    const { picked, hasTransition } = props;
    if (picked === "paper") {
        return (
            <div className="relative aspect-square">
                <div
                    id={hasTransition ? "paper-img" : undefined}
                    className="cursor-pointer size-[15rem] rounded-full border-b-[10px] border-blue-800"
                >
                    <div className="rounded-full border-[1.5rem] border-blue-500 w-full h-full">
                        <div className="border-t-[10px] border-gray-300 w-full h-full flex items-center justify-center bg-white rounded-full">
                            <IconPaper className="scale-150" />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    if (picked === "scissors") {
        return (
            <div className="relative">
                <div
                    id={hasTransition ? "scissors-img" : undefined}
                    className="cursor-pointer size-[15rem] rounded-full border-b-[10px] border-yellow-800"
                >
                    <div className="rounded-full border-[1.5rem] border-yellow-400 w-full h-full">
                        <div className="border-t-[10px] border-gray-300 w-full h-full flex items-center justify-center bg-white rounded-full">
                            <IconScissors className="scale-150" />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    if (picked === "rock") {
        return (
            <div className="relative">
                <div
                    id={hasTransition ? "rock-img" : undefined}
                    className="cursor-pointer size-[15rem] rounded-full border-b-[10px] border-red-800"
                >
                    <div className="rounded-full border-[1.5rem] border-red-500 w-full h-full">
                        <div className="border-t-[10px] border-gray-300 w-full h-full flex items-center justify-center bg-white rounded-full">
                            <IconRock className="scale-150" />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    return undefined;
}

function WinGradient({ open }: { open: boolean }) {
    return (
        <Fragment>
            <div
                className={`absolute duration-700 right-[50%] translate-x-[50%] bottom-[50%] translate-y-[50%] size-[15rem] bg-white rounded-full opacity-5 transition ${
                    open ? "scale-[2.3]" : " scale-0"
                }`}
            ></div>
            <div
                className={`absolute duration-700 right-[50%] translate-x-[50%] bottom-[50%] translate-y-[50%] size-[15rem] bg-white rounded-full opacity-5 transition ${
                    open ? "scale-[1.85]" : " scale-0"
                }`}
            ></div>
            <div
                className={`absolute duration-700 right-[50%] translate-x-[50%] bottom-[50%] translate-y-[50%] size-[15rem] bg-white rounded-full opacity-5 transition ${
                    open ? "scale-[1.4]" : " scale-0"
                }`}
            ></div>
        </Fragment>
    );
}