import education from '@/app/data/education.json';
import { CardSpotlight } from '@/app/components/ui/card-spotlight';
import Link from 'next/link';
import { Icon_CalendarIcon, Icon_LocationIcon } from '@/app/components/ui/icons';
import { TransitionSection } from '@/app/components/ui/transition-section';

interface Education {
    school: string;
    title: string | string[];
    year: string;
    location: string;
    summary: string;
    image: string;
    logo: string;
    slug: string;
    quickIdentifier: string;
}

export function Education() {

    const educationData = (education as Education[]).map((edu, index) => (
        <CardSpotlight
            key={index}
        >

            <div className='lg:w-1/2 w-full p-4 flex flex-col justify-between'>
                {/* School Name */}
                <h1 className="text-center font-bold text-2xl mb-2 lg:mb-0 lg:mt-0 text-neutral-400 dark:text-neutral-100">
                    <Link href={edu.slug} target="_blank">
                        {edu.school}
                    </Link>
                </h1>

                {/* Education Achievment */}
                <div className="text-sky-500 dark:text-red-500 text-center mb-2 lg:mb-0 text-sm">
                    {Array.isArray(edu.title) ? (
                        edu.title.map((t, i) => <p key={i}>{t}</p>)
                    ) : (
                        <p>{edu.title}</p>
                    )}
                </div>

                {/* Summary */}
                <div className="overflow-hidden text-neutral-400 truncate text-center">
                    <ul>
                        {edu.summary.split(',').map((line, idx) => (
                            <li key={idx}>{line}</li>
                        ))}
                    </ul>
                </div>

                {/* Time and Location */}
                <div className="flex justify-between mb-2">
                    <p className="flex items-center">
                        <Icon_CalendarIcon />
                        {edu.year}
                    </p>
                    <p className="flex items-center">
                        <Icon_LocationIcon />
                        {edu.location}
                    </p>
                </div>

            </div>
        </CardSpotlight>
    ));

    return (
        <TransitionSection>
            <h1 className='component-section-header'>
                Education
            </h1>
            {educationData}
        </TransitionSection>
    )
}