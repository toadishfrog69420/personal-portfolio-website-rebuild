import skill from "@/app/data/skill-stack.json"
import { InfiniteMovingCards } from "@/app/components/ui/infinite-moving-cards"
import { TransitionSection } from "@/app/components/ui/transition-section";

export function ShowCase() {

    const skills = skill.map(s => ({
        "quote": "",
        "name": s.name,
        "title": ""
    }));

    return (
        <TransitionSection>
            <h1 className='component-section-header'>
                Show Case
            </h1>

            <InfiniteMovingCards
                items={skills}
                direction="right"
                speed="slow"
                pauseOnHover={true}
            />
        </TransitionSection>
    )
}