import { Particles } from "@/app/components/ui/particles";
import { CurrentDateTime } from "@/app/components/ui/current-date-time";
import { TypingAnimation } from "@/app/components/ui/typing-animation";
import { BlurFade } from "@/app/components/ui/blur-fade";
import Link from "next/link";

const navigation = [
  { name: "About", href: "/about" },
  { name: "Blog", href: "/blog" },
  { name: "Photo", href: "/photos" },
  { name: "Video", href: "/video" },
];

const welcomeMessage = [
  "Had I not seen the Sun",
  "I could have borne the shade",
  "But Light a newer Wilderness",
  "My Wilderness has made"
]

export default function Home() {
  return (

    <section className={`home-div`}>

      <div className="hidden w-screen h-px md:block" />

      <Particles
        color="#FF0A0A"
        className="absolute inset-0"
        quantity={300}
      />


      <BlurFade>
        <CurrentDateTime
          diyStyle=" font-sans lg:text-7xl font-bold text-4xl text-red-600 pb-32"
          year={true}
          month={true}
          day={true}
          hours={true}
          minutes={true}
          seconds={true}
        />
      </BlurFade>
      
      <BlurFade>
        <div className="flex space-y-8">
          <TypingAnimation
            words={welcomeMessage}
            cursorStyle="block"
            pauseDelay={2000}
            blinkCursor={true}
            className={`home-msg`}
          />
        </div>
      </BlurFade>
      
      <BlurFade
        direction="up"
        delay={1}
      >
        <div className={`home-separator`} />
      
        <div className="text-center">
        <ul className={`home-navi-list`}>
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-xl duration-500 hover:text-red-700"
            >
              {item.name}
            </Link>
          ))}
        </ul>
      </div>  
      </BlurFade>
      



    </section>
  )
}