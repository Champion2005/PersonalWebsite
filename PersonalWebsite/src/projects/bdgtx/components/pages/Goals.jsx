import { useState } from "react";
import { Header } from "../header/Header";

const goalsList = [
    {
        title: "Save $1000",
        deadline: null,
        description: "blah blah",
    },
    
]

const CreateGoal = () => {
    const titleMaxLength = 50;
    const descMaxLength = 200;
    const [curTitleLength, setCurTitleLength] = useState(0)
    const [curDescLength, setCurDescLength] = useState(0)

    return (
        <>
            <section className="lg:self-start p-4 m-4 items-center bg-gray-800/40 rounded-xl lg:w-1/3">
                <p className="text-2xl text-center font-mono">Create a Goal</p>
                <form className="flex flex-col items-center mt-2">
                    <div className="flex flex-col justify-center gap-2 mt-4 w-2/3">
                        <p className="text-lg font-mono self-center">Title:</p>
                        <input
                            className="bg-transparent border-2 border-emerald-500 focus:border-dashed outline-none rounded-lg p-1"
                            maxLength={titleMaxLength}
                            onInput={(e) => { setCurTitleLength(e.target.value.length) }}>
                        </input>
                        <p className="text-xs font-mono self-end">{curTitleLength}/{titleMaxLength}</p>
                    </div>

                    <div className="flex flex-col justify-center gap-2 mt-4 w-2/3">
                        <p className="text-lg font-mono self-center">Description:</p>
                        <textarea
                            className="bg-transparent border-2 border-emerald-500 focus:border-dashed outline-none rounded-lg p-1"
                            maxLength={descMaxLength}
                            onInput={(e) => { setCurDescLength(e.target.value.length) }}>
                        </textarea>
                        <p className="text-xs font-mono self-end">{curDescLength}/{descMaxLength}</p>
                    </div>
                </form>
            </section>
        </>
    )
}

const GoalCard = (props) => {
    return (
        <div className="p-2 m-2 bg-gray-700/40 rounded-lg w-11/12">
            <p className="text-xl font-mono">{props.title}</p>
            <p className="text-sm font-mono">{props.description}</p>
        </div>
    )

}

const RenderGoals = () => {

    return (
        <>
            <section className="p-4 m-4 items-center bg-gray-800/40 rounded-xl lg:w-2/3">
                <p className="text-2xl text-center font-mono">Your Goals</p>
                <div className="flex flex-col items-center mt-2">
                    {goalsList.map((goal, index) => {
                        return (
                            <GoalCard
                                key={index}
                                title={goal.title}
                                description={goal.description}
                            />
                        )
                    })}
                </div>
            </section>
        </>
    )

}

export const Goals = () => {

    return (
        <>
            <Header />
            <div className="flex justify-center mt-20 text-white">
                <div className="flex flex-col lg:flex-row w-11/12">
                    <CreateGoal/>
                    <RenderGoals />
                </div>
            </div>
        </>
    )
}