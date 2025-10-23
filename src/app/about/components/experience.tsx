'use client'
import experience from '@/app/data/experience.json';
import { Timeline } from '@/app/components/ui/timeline';
import { useRef } from 'react';
import { useIsVisible } from '@/app/components/util/isVisible';

interface Experience {
  title: string;
  orgName: string;
  duration: string;
  location: string;
  summary: string;
  image: string;
  logo: string;
  slug: string;
}


export function Experience() {

    const refAll = useRef(null);
    const isVisibleComp = useIsVisible(refAll);

    const experiencesByYear = (experience as Experience[]).reduce(
        (acc, exp) => {
        const year = exp.duration.split(' - ')[0].split('-')[0];
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
        <section ref={refAll}
            className={`flex flex-row justify-center w-full
        transition-opactiy ease-in duration-700 ${isVisibleComp ? "opacity-100" : "opacity-0"}
        `}>
            <div className="containter lg:mx-auto space-y-6 justify-center w-full ">
                <h1 className='font-bond text-3xl text-left mb-4 mt-4'>
                    Experience
                </h1>
                
                <Timeline data={timelineData} />
            </div>
        </section>
    );
}