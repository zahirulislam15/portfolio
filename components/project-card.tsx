import type { Project } from '@/data/portfolio'

const visualBackgrounds = {
  commerce: 'bg-[#d8e2ce]',
  hishabi: 'bg-[#dfe2d8]',
  tea: 'bg-[#d9e0dc]',
  shikkha: 'bg-[#dfe3d2]',
}

export default function ProjectCard({ project }: { project: Project }) {
  const stack = Array.isArray(project.stack) && project.stack.length > 0 ? project.stack : []

  return (
    <article className="group min-w-0 overflow-hidden rounded-[6px] border border-[#e4e3dc] bg-[#eeede7] transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-[0_18px_45px_#282a1d0c]">
      <div className={`relative isolate grid h-[280px] place-items-center overflow-hidden before:absolute before:size-[380px] before:rounded-full before:border before:border-[#27322616] before:content-[''] after:absolute after:size-[285px] after:rounded-full after:border after:border-[#27322616] after:content-[''] max-[850px]:h-[230px] max-[620px]:h-[255px] ${visualBackgrounds[project.className]}`} aria-hidden="true">
        {project.className === 'commerce' && (
          <div className="relative z-[1] h-[204px] w-[255px] rotate-[-3deg] bg-[#f7f3e8] px-[18px] pt-[15px] text-[#324034] shadow-[0_16px_40px_#1c2e1a18]">
            <div className="flex justify-between font-mono text-[8px] tracking-[.08em]"><span>STUDIO / SHOP</span><span>☰</span></div>
            <div className="mt-[18px] mb-[9px] font-display text-[26px] leading-[.98] font-medium tracking-[-.07em]">Objects for<br />the everyday.</div>
            <div className="flex gap-[7px]"><span className="h-[43px] flex-1 bg-[#d4a37a]" /><span className="h-[43px] flex-1 bg-[#8a9d72]" /><span className="h-[43px] flex-1 bg-[#e0cda9]" /></div>
            <div className="mt-[9px] flex justify-between font-mono text-[8px] tracking-[.08em] text-[#727466]"><span>01—03</span><span>COLLECTION</span></div>
          </div>
        )}
        {project.className === 'hishabi' && (
          <div className="relative z-[1] min-h-[183px] w-[295px] rotate-[2deg] rounded-lg bg-[#fcfcf8] p-[19px] shadow-[0_18px_45px_#1c2e1a13]">
            <div className="flex justify-between font-mono text-[8px] tracking-[.09em] text-[#767d73]"><span>OVERVIEW</span><span className="tracking-[2px]">•••</span></div>
            <div className="mt-[17px] font-display text-[25px] font-semibold tracking-[-.055em]">৳ 84,260 <span className="ml-2 rounded-full bg-[#e5f1db] px-[6px] py-1 align-[5px] font-mono text-[8px] tracking-normal text-[#577342]">+12.8%</span></div>
            <div className="mt-3 flex h-[58px] items-end gap-2 border-b border-[#eaebe3] bg-[linear-gradient(180deg,transparent_47%,#eceee7_48%,transparent_50%,transparent_73%,#eceee7_74%,transparent_76%)]">
              <i className="h-[31%] flex-1 rounded-t-[3px] bg-[#879c6b]" /><i className="h-[51%] flex-1 rounded-t-[3px] bg-[#879c6b]" /><i className="h-[70%] flex-1 rounded-t-[3px] bg-[#879c6b]" /><i className="h-[51%] flex-1 rounded-t-[3px] bg-[#879c6b]" /><i className="h-[92%] flex-1 rounded-t-[3px] bg-[#879c6b]" /><i className="h-[70%] flex-1 rounded-t-[3px] bg-[#879c6b]" /><i className="h-[31%] flex-1 rounded-t-[3px] bg-[#879c6b]" /><i className="h-[92%] flex-1 rounded-t-[3px] bg-[#879c6b]" /><i className="h-[70%] flex-1 rounded-t-[3px] bg-[#879c6b]" /><i className="h-[51%] flex-1 rounded-t-[3px] bg-[#879c6b]" /><i className="h-[92%] flex-1 rounded-t-[3px] bg-[#879c6b]" /><i className="h-[70%] flex-1 rounded-t-[3px] bg-[#879c6b]" />
            </div>
            <div className="flex justify-between pt-2 font-mono text-[7px] text-[#a2a69d]"><span>MON</span><span>WED</span><span>FRI</span><span>SUN</span></div>
          </div>
        )}
        {project.className === 'tea' && (
          <div className="relative z-[1] h-[188px] w-[280px] rounded-[4px] border border-[#c6d1c7] bg-[#eaf0e8] px-[22px] py-5 text-[#37514b] shadow-[0_17px_38px_#213f3812]">
            <div className="font-mono text-[8px] tracking-[.1em]">LONDON <b className="font-medium text-[#719080]">TEA EXCHANGE</b></div>
            <div className="mt-[13px] flex flex-col font-display text-[80px] leading-[.9] font-semibold tracking-[-.1em]">04<span className="mt-2 font-mono text-[8px] tracking-[.12em]">NOW SERVING</span></div>
            <div className="mt-[13px] flex justify-between border-t border-[#c9d3cb] pt-[10px] font-mono text-[8px] tracking-[.06em]"><span>PLEASE TAKE A SEAT</span><span>↗</span></div>
          </div>
        )}
        {project.className === 'shikkha' && (
          <div className="relative z-[1] h-[183px] w-[285px] rotate-[-2deg] rounded-[7px] bg-[#f5f7ee] px-[19px] pt-[17px] text-[#526748] shadow-[0_17px_38px_#233a3212]">
            <div className="flex justify-between font-mono text-[8px] tracking-[.08em] text-[#818d73]"><span>CARE / IN MOTION</span><span className="text-[15px]">✳</span></div>
            <div className="absolute top-[38px] right-6 grid h-[50px] w-[50px] place-items-center rounded-full bg-lime text-[28px] text-[#475a39]">+</div>
            <div className="mt-[42px]"><svg className="h-[46px] w-full" viewBox="0 0 360 75" fill="none" role="presentation"><path className="stroke-[#79946b] stroke-2" d="M0 40h66l19-28 27 53 31-48 21 31h37l17-21 21 17h121" /></svg></div>
            <div className="mt-1 flex justify-between border-t border-[#dfe4d5] pt-[9px] font-mono text-[8px] tracking-[.08em]"><span>PEOPLE FIRST</span><span>ALWAYS</span></div>
          </div>
        )}
      </div>
      <div className="px-[25px] pt-[23px] pb-6 max-[620px]:px-5 max-[620px]:py-[21px]">
        <div className="flex items-center gap-3">
          <span className="grid h-[25px] w-[25px] place-items-center rounded-full border border-[#d8d9d0] font-mono text-[9px] text-muted">{project.number}</span>
          <span className="text-[10px] text-muted">{project.subtitle}</span>
        </div>
        <h3 className="mt-[15px] mb-2 font-display text-[22px] leading-[1.2] font-semibold tracking-[-.055em] max-[620px]:text-[21px]">{project.name}</h3>
        <p className="min-h-[62px] max-w-[465px] text-[12px] leading-[1.65] text-[#74776e] max-[620px]:min-h-0">{project.description}</p>
        <ul className="mt-[18px] flex flex-wrap gap-[7px]">
          {stack.map((tag, index) => <li className="rounded-full bg-[#e4e3dc] px-[9px] py-[6px] font-mono text-[9px] text-[#676b61]" key={`${project.number}-${tag}-${index}`}>{tag}</li>)}
        </ul>
        {project.href && <a className="mt-4 inline-flex items-center gap-2 text-[11px] font-semibold text-[#536b40]" href={project.href} target="_blank" rel="noreferrer">Visit project <span className="text-[15px]" aria-hidden="true">↗</span></a>}
      </div>
    </article>
  )
}
