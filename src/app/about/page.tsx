import { Summary } from "@/app/about/components/summary";
import { Education } from "@/app/about/components/education";
import { Experience } from "@/app/about/components/experience";
import { ShowCase } from "./components/show-case";


export default function Page() {
    return (
        <section className="antialiased flex-auto min-w-0 mt-6 flex flex-col lg:px-4 px-2">

            <section className="justify-center">
                <div className={`my-8 flex justify-center flex-col`}>
                    <Summary />
                </div>
                <div className={`my-8 flex justify-center flex-col`}>
                    <Education />
                </div>
                <div className={`my-8 flex justify-center flex-col`}>
                    <Experience />
                </div>
                <div className={`my-8 flex justifiy-center flex-col`}>
                    <ShowCase />
                </div>
            </section>

        </section>
    )
}