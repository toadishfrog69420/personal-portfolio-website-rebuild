import experience from '@/app/data/experience.json';
import { Timeline } from '@/app/components/ui/timeline';
import { TransitionSection } from '@/app/components/ui/transition-section';

interface Experience {
    title: string;
    orgName: string;
    duration: string;
    year: string;
    location: string;
    summary: string;
    image: string;
    logo: string;
    slug: string;
}


export function Experience() {

    const experiencesByYear = (experience as Experience[]).reduce(
        (acc, exp) => {
            const year = exp.year;
            if (!acc[year]) {
                acc[year] = [];
            }
            acc[year].push(exp);
            return acc;
        },
        {} as Record<string, Experience[]>
    );

    const timelineData = Object.keys(experiencesByYear)
        .sort((a, b) => parseInt(b) - parseInt(a))
        .map((year) => {
            return {
                title: year,
                content: (
                    <div className='flex flex-col gap-4'>
                        {experiencesByYear[year].map((exp, index) => (
                            <div key={index} className='flex flex-col gap-2'>
                                <h3 className='text-xl font-bold'>{exp.title}</h3>
                                <p className='mb-1 text-light'>{exp.orgName}</p>
                                <p className='text-sm text-gray-500'>{exp.duration}</p>
                                <p className='text-sm text-gray-500'>{exp.location}</p>
                                <p>{exp.summary}</p>
                            </div>
                        ))}
                    </div>
                ),
            };
        });

    return (
        <TransitionSection>
            <h1 className='component-section-header'>
                Experience
            </h1>
            <Timeline data={timelineData} />
        </TransitionSection>
    );
}