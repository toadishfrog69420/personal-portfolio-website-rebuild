import Image from "next/Image"
import Link from "next/Link"
import experience from '@/app/data/experience.json'
import { Icon_CalendarHero, Icon_LocationIcon } from "@/app/components/ui/icons"
import { useIsVisible } from "@/app/components/util/isVisible"
import { useRef } from "react"
import { Timeline } from "@/app/components/ui/timeline"


export function Experience() {
    
    const projectYear: { [key: string]: any } = {};
    experience.forEach((exp) => {
        const year = exp.duration.split('-')[0].trim();
        if (!projectYear[year]){
            projectYear[year] = exp;
        }
    })

    // Extract years and group experiences by year
    const expereinceByYear = experience.reduce((acc: { [key: string] : any[] }, exp) => {
        const year = exp.duration.split('-')[0].trim();
        if(!acc[year]){
            acc[year] = [];
        }
        acc[year].push(exp);
        return acc;
    }, {})

    const refAll = useRef(null);
    const isVisibleComp = useIsVisible(refAll);

    


}

