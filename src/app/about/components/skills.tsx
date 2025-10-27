'use client'
import skill from "@/app/data/skill-stack.json"
import { InfiniteMovingCards } from "@/app/components/ui/infinite-moving-cards"
import { useRef } from "react";
import { useIsVisible } from "@/app/components/util/is-visible";

export function Skill() {

    const refAll = useRef(null);
    const isVisibleComp = useIsVisible(refAll);
    
    const skills = skill.map(s => ({
        "quote": "",
        "name": s.name,
        "title": ""
    }));

    return (
        <section ref={refAll}
            className={`flex flex-row justify-center w-full
        transition-opactiy ease-in duration-700 ${isVisibleComp ? "opacity-100" : "opacity-0"}
        `}>
            <div className="containter lg:mx-auto space-y-6 justify-center w-full ">
                <h1 className='font-bond text-3xl text-left mb-4 mt-4'>
                    Skills
                </h1>

                <InfiniteMovingCards
                items={skills}
                direction="right"
                speed="slow"
                pauseOnHover={true}
                />
            </div>
        </section>
    )
}