'use client'
import aboutMe from "@/app/data/about-me.json"
import { useRef } from "react"
import { useIsVisible } from "@/app/components/util/is-visible"
import { PixelatedCanvas } from "@/app/components/ui/pixelated-canvas"

interface Summary {
    en: string;
}

export function Summary() {

    const refAll = useRef(null);
    const isVisibleComp = useIsVisible(refAll);
    const summary: Summary[] = aboutMe;


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
            <div className="mb-4">
                {/* Summary */}
                <p className="text-base md:text-lg lg:text-xl xl:text-2xl">
                    {summary[0].en}
                </p>
            </div>
        </section>
    )
}