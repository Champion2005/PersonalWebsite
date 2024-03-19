import { useState } from "react";
import { Header } from "../components/header/Header"

const goalsList = [
    {
        title: "Save $1000",
        deadline: null,
        description: "blah blah",

    }
]

export const Goals = () => {
    const titleMaxLength = 50;
    const descMaxLength = 200;
    const [curTitleLength, setCurTitleLength] = useState(0)
    const [curDescLength, setCurDescLength] = useState(0)

    return (
        <>
            <Header />
            <div className="flex justify-center mt-20 text-white">
                <div className="flex flex-col lg:flex-row w-11/12">
                    <section className="p-4 m-4 items-center m-4 bg-gray-800/40 rounded-xl lg:w-1/3">
                        <p className="text-2xl text-center font-mono">Create a Goal</p>
                        <form className="flex flex-col items-center mt-2">
                            <div className="flex flex-col justify-center gap-2 mt-4 w-2/3">
                                <p className="text-lg font-mono self-center">Title:</p>
                                <input
                                    className="bg-transparent border-2 border-emerald-500 focus:border-dashed outline-none rounded-lg p-1"
                                    maxLength={titleMaxLength}
                                    onInput={(e) => {setCurTitleLength(e.target.value.length)}}>
                                </input>
                                <p className="text-xs font-mono self-end">{curTitleLength}/{titleMaxLength}</p>
                            </div>

                            <div className="flex flex-col justify-center gap-2 mt-4 w-2/3">
                                <p className="text-lg font-mono self-center">Description:</p>
                                <textarea
                                    className="bg-transparent border-2 border-emerald-500 focus:border-dashed outline-none rounded-lg p-1"
                                    maxLength={descMaxLength}
                                    onInput={(e) => {setCurDescLength(e.target.value.length)}}>
                                </textarea>
                                <p className="text-xs font-mono self-end">{curDescLength}/{descMaxLength}</p>
                            </div>
                        </form>
                    </section>

                    <section className="m-4 lg:w-2/3">
                        <p>lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                    </section>
                </div>
            </div>
        </>
    )
}