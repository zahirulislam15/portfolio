import ProjectCard from '@/components/project-card'
import { projects } from '@/data/portfolio'

export default function WorkSection() {
  const projectItems = Array.isArray(projects) && projects.length > 0 ? projects : []

  return (
    <section className="mx-auto w-[min(1160px,calc(100%_-_96px))] pt-32 pb-[122px] max-[850px]:w-[min(700px,calc(100%_-_52px))] max-[850px]:py-[94px] max-[620px]:w-[calc(100%_-_40px)] max-[620px]:py-[77px]" id="work">
      <div className="mb-12 flex items-end justify-between gap-[50px] max-[620px]:mb-[30px] max-[620px]:block">
        <div>
          <p className="font-mono text-[10px] font-medium leading-[1.5] tracking-[.11em] text-muted">SELECTED WORK <span className="ml-3 opacity-65">2022 — 2026</span></p>
          <h2 className="mt-[15px] font-display text-[clamp(42px,5vw,60px)] leading-[1.05] font-medium tracking-[-.075em] max-[620px]:text-[46px]">Made to move<br />things forward.</h2>
        </div>
        <p className="mb-1 max-w-[335px] text-[13px] leading-[1.75] text-[#71746c] max-[620px]:mt-[19px] max-[620px]:max-w-[390px] max-[620px]:text-[12px]">A few products and systems I’ve helped bring to life, from the first user flow to the details that keep it running.</p>
      </div>
      <div className="grid grid-cols-2 gap-7 max-[620px]:grid-cols-1 max-[620px]:gap-[19px]">
        {projectItems.map((project) => <ProjectCard key={`${project.number}-${project.name}`} project={project} />)}
      </div>
      <div className="mt-[31px] flex items-baseline gap-6 border-t border-line pt-[22px] max-[620px]:block max-[620px]:leading-[1.7]">
        <span className="font-mono text-[9px] tracking-[.1em] text-muted">ALSO BUILT</span>
        <p className="text-[12px] text-[#5f625a] max-[620px]:mt-2 max-[620px]:text-[11px]">Gokiiw restaurant management · School management system · Jibonsheba</p>
      </div>
    </section>
  )
}
