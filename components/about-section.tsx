import { skillGroups } from '@/data/portfolio'

export default function AboutSection() {
  const skillItems = Array.isArray(skillGroups) && skillGroups.length > 0 ? skillGroups : []

  return (
    <section className="bg-[#e9e9e1] py-[111px] pb-[116px] max-[620px]:py-[76px]" id="about">
      <div className="mx-auto grid w-[min(1160px,calc(100%_-_96px))] grid-cols-2 gap-x-[105px] gap-y-[65px] max-[850px]:w-[min(700px,calc(100%_-_52px))] max-[850px]:gap-x-[50px] max-[620px]:block max-[620px]:w-[calc(100%_-_40px)]">
        <div>
          <p className="font-mono text-[10px] font-medium leading-[1.5] tracking-[.11em] text-muted">A PRACTICAL MIND, A HUMAN APPROACH</p>
          <h2 className="mt-[15px] font-display text-[clamp(40px,4.7vw,57px)] leading-[1.05] font-medium tracking-[-.075em]">Curious by nature.<br /><span className="text-[#89985c]">Careful by craft.</span></h2>
        </div>
        <div className="pt-[15px] max-[620px]:pt-[25px]">
          <p className="mb-[18px] text-[14px] leading-[1.8] text-[#65685f] max-[620px]:text-[13px]">I enjoy working across the stack, connecting the details behind the interface with the experience a person actually has. That means asking good questions, keeping systems understandable, and sweating the small things that make a product feel considered.</p>
          <p className="mb-[18px] text-[14px] leading-[1.8] text-[#65685f] max-[620px]:text-[13px]">From a first sketch to a production release, I like working closely with teams and clients to turn real needs into software that’s clear, reliable, and ready to grow.</p>
          <div className="mt-[26px] flex items-center gap-3 border-t border-[#d3d5ca] pt-[18px] text-[11px] text-[#4c5342]">
            <span className="text-[20px] text-[#859b54]">✳</span>
            <span>Currently building commerce experiences at Softzino Technologies, Dhaka.</span>
          </div>
        </div>
        <div className="col-span-full rounded-[4px] border border-[#d5d6cc] px-[26px] pt-[23px] pb-2 max-[620px]:mt-[38px] max-[620px]:px-[17px] max-[620px]:pt-[18px]">
          <div className="flex justify-between border-b border-[#d5d6cc] pb-[18px] font-mono text-[9px] tracking-[.1em] text-[#777b70]"><span>TOOLS I REACH FOR</span><span>01 — 04</span></div>
          <div className="grid grid-cols-4 gap-[25px] py-5 max-[850px]:grid-cols-2 max-[850px]:gap-y-[25px] max-[620px]:gap-x-[15px] max-[620px]:gap-y-6">
            {skillItems.map((group, index) => (
              <div key={`${group.title}-${index}`}>
                <h3 className="mb-[10px] font-display text-[14px] font-semibold tracking-[-.03em] max-[620px]:text-[13px]">{group.title}</h3>
                <p className="text-[11px] leading-[1.75] text-[#777a70] max-[620px]:text-[10px]">{group.items}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
