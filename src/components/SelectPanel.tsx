import IconPaper from "@/assets/images/icon-paper.svg?react";
import IconScissors from "@/assets/images/icon-scissors.svg?react";
import IconRock from "@/assets/images/icon-rock.svg?react";
import { useGame } from "@/lib/hooks";

export default function SelectPanel() {
    const { setPicked } = useGame();

    return (
        <div className="w-full flex flex-col gap-5 lg:scale-100 scale-90">
            <div className="flex gap-16 justify-center relative">
                <div className="absolute w-32 h-3 top-[5rem] bg-slate-900"></div>
                <div className="absolute w-32 h-3 origin-top-left rotate-[60deg] -translate-x-12 top-[5rem] bg-slate-900"></div>
                <div className="absolute w-32 h-3 origin-top-right -rotate-[60deg] translate-x-12 top-[5rem] bg-slate-900"></div>
                <div
                    id="paper-img"
                    onMouseDown={() => setPicked("paper")}
                    className="transition flex-shrink-0 hover:scale-110 cursor-pointer size-[10rem] z-20 rounded-full border-b-[8px] border-blue-800"
                >
                    <div className="rounded-full border-[1.2rem] border-blue-500 w-full h-full">
                        <div className="border-t-[6px] border-gray-300 w-full h-full flex items-center justify-center bg-white rounded-full">
                            <IconPaper />
                        </div>
                    </div>
                </div>
                <div
                    id="scissors-img"
                    onMouseDown={() => setPicked("scissors")}
                    className="transition flex-shrink-0 hover:scale-110 cursor-pointer size-[10rem] z-20 rounded-full border-b-[8px] border-yellow-800"
                >
                    <div className="rounded-full border-[1.2rem] border-yellow-400 w-full h-full">
                        <div className="border-t-[6px] border-gray-300 w-full h-full flex items-center justify-center bg-white rounded-full">
                            <IconScissors />
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full flex justify-center relative">
                <div
                    id="rock-img"
                    onMouseDown={() => setPicked("rock")}
                    className="transition flex-shrink-0 hover:scale-110 cursor-pointer size-[10rem] z-20 rounded-full border-b-[8px] border-red-800"
                >
                    <div className="rounded-full border-[1.2rem] border-red-500 w-full h-full">
                        <div className="border-t-[6px] border-gray-300 w-full h-full flex items-center justify-center bg-white rounded-full">
                            <IconRock />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
