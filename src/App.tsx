import { useState } from "react";

export default function App() {
    const [open, setOpen] = useState(false);
    return (
        <div className="min-h-screen flex-col flex justify-center items-center gap-4"  style={{background: "radial-gradient(circle at top, hsl(214, 47%, 23%) 0%, hsl(237, 49%, 15%) 50%)"}}>
            <div className="flex flex-col lg:w-[45vw] flex-grow items-center py-8 relative">
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
                        <span className="font-barlow text-c_score_text font-semibold ">SCORE</span>
                        <span className="font-barlow text-[3rem] text-c_dark_text font-bold -my-3">12</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
