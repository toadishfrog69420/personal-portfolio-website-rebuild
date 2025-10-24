'use client'
import aboutMe from "@/app/data/aboutMe.json"
import {useRef, useState} from "react"
import { useIsVisible } from "@/app/components/util/isVisible"
import { PixelatedCanvas } from "@/app/components/ui/pixelated-canvas"

interface Summary {

}

export function Summary() {

    const refAll = useRef(null);
    const isVisibleComp = useIsVisible(refAll);

    return (
        <section ref={refAll}
            className={`relative w-full 
                        transition-opactiy ease-in duration-700 ${isVisibleComp ? "opacity-100" : "opacity-0"}`}>
            <div className={`mt-20 w-32 h-32 rounded-full overflow-hidden bg-gray-300 dark:bg-gray-700 flex-shrink-0 mr-8 relative
            `}>
                {/* Headshot photos */}
                    <PixelatedCanvas 
                        src={"/profile/profile-pic-1.png"}
                    />
            </div>
        </section>
    )
}