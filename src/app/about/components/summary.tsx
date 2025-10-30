'use client'
import Icons from "@/app/data/icon-slugs.json"
import { PixelatedCanvas } from "@/app/components/ui/pixelated-canvas"
import { TransitionSection } from "@/app/components/ui/transition-section";
import { BentoCard, BentoGrid } from "@/app/components/ui/bento-grid";

interface Summary {
    
}

export function Summary() {

    const icons = Icons;
    const features = [{Icon:"1"},{Icon:"2"}];

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

            <div className={`component-section-header`}>
                Summary
            </div>
            
            <BentoGrid>
                {features.map((feature, idx) => (
                    <BentoCard key={idx} {...feature} />
                ))}
            
            </BentoGrid>

        </TransitionSection>
    )
}