'use client'
import aboutMe from "@/app/data/about-me.json"
import { PixelatedCanvas } from "@/app/components/ui/pixelated-canvas"
import { TransitionSection } from "@/app/components/ui/transition-section";

interface Summary {
    en: string;
}

export function Summary() {

    const summary: Summary[] = aboutMe;


    return (
        <TransitionSection>
            {/* Headshot photos */}
            <div className={`mt-20 w-42 h-42 rounded-full overflow-hidden bg-gray-300 dark:bg-gray-700 flex-shrink-0 mr-8 relative
            `}>
                <PixelatedCanvas
                    src={"/profile/profile-pic-2.jpg"}
                    objectFit="cover"
                    width={170}
                    height={170}
                    cellSize={4}
                    className="bg-white dark:bg-black"
                />
            </div>

            {/* Summary */}
            <div className="mb-4">
                <p className="text-base md:text-lg lg:text-xl xl:text-2xl">
                    {summary[0].en}
                </p>
            </div>
        </TransitionSection>
    )
}