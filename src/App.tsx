import { useEffect, useState } from "react";
import SelectPanel from "./components/SelectPanel";
import { type Picked } from "./lib/utils";
import IconPaper from "@/assets/images/icon-paper.svg?react";
import IconScissors from "@/assets/images/icon-scissors.svg?react";
import IconRock from "@/assets/images/icon-rock.svg?react";

export default function App() {
    const [picked, setPicked] = useState<Picked>("");
    useEffect(()=>{
        
    },[])
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
                            12
                        </span>
                    </div>
                </div>
                {picked === "" && <SelectPanel setPicked={setPicked} />}
                {picked !== "" && (
                    <div className="grid grid-cols-2 w-full">
                        <div className="flex flex-col gap-12 items-center">
                            <span className="font-barlow font-semibold text-white text-xl tracking-widest">
                                YOU PICKED
                            </span>

                            <DisplayPick picked={picked} hasTransition />
                        </div>
                        <div className="flex flex-col gap-12 items-center">
                            <span className="font-barlow font-semibold text-white text-xl tracking-widest">
                                THE HOUSE PICKED
                            </span>

                            <DisplayPick picked={picked} />
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

function DisplayPick(props: { picked: Picked; hasTransition?: boolean }) {
    const { picked, hasTransition } = props;
    if (picked === "paper") {
        return (
            <div
                id={hasTransition ? "paper-img" : undefined}
                className="cursor-pointer size-[15rem] z-20 rounded-full border-b-[10px] border-blue-800"
            >
                <div className="rounded-full border-[1.5rem] border-blue-500 w-full h-full">
                    <div className="border-t-[10px] border-gray-300 w-full h-full flex items-center justify-center bg-white rounded-full">
                        <IconPaper className="scale-150" />
                    </div>
                </div>
            </div>
        );
    }
    if (picked === "scissors") {
        return (
            <div
                id={hasTransition ? "scissors-img" : undefined}
                className="cursor-pointer size-[15rem] z-20 rounded-full border-b-[10px] border-yellow-800"
            >
                <div className="rounded-full border-[1.5rem] border-yellow-400 w-full h-full">
                    <div className="border-t-[10px] border-gray-300 w-full h-full flex items-center justify-center bg-white rounded-full">
                        <IconScissors className="scale-150" />
                    </div>
                </div>
            </div>
        );
    }
    if (picked === "rock") {
        return (
            <div
                id={hasTransition ? "rock-img" : undefined}
                className="cursor-pointer size-[15rem] z-20 rounded-full border-b-[10px] border-red-800"
            >
                <div className="rounded-full border-[1.5rem] border-red-500 w-full h-full">
                    <div className="border-t-[10px] border-gray-300 w-full h-full flex items-center justify-center bg-white rounded-full">
                        <IconRock className="scale-150" />
                    </div>
                </div>
            </div>
        );
    }
    return undefined;
}
