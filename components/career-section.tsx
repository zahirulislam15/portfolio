import { experience } from '@/data/portfolio'

export default function CareerSection() {
  const experienceItems = Array.isArray(experience) && experience.length > 0 ? experience : []

  return (
    <section className="mx-auto w-[min(1160px,calc(100%_-_96px))] pt-32 pb-[118px] max-[850px]:w-[min(700px,calc(100%_-_52px))] max-[850px]:py-[94px] max-[620px]:w-[calc(100%_-_40px)] max-[620px]:py-[77px]" id="experience">
      <div className="mb-[42px] flex items-end justify-between gap-[50px] max-[620px]:mb-[27px] max-[620px]:block">
        <div>
          <p className="font-mono text-[10px] font-medium leading-[1.5] tracking-[.11em] text-muted">THE PATH SO FAR</p>
          <h2 className="mt-[15px] font-display text-[clamp(42px,5vw,60px)] leading-[1.05] font-medium tracking-[-.075em] max-[620px]:text-[46px]">Good work is<br />a team sport.</h2>
        </div>
        <p className="mb-1 max-w-[335px] text-[13px] leading-[1.75] text-[#71746c] max-[620px]:mt-[19px] max-[620px]:max-w-[390px] max-[620px]:text-[12px]">A little over four years of learning, shipping, and getting better alongside good people.</p>
      </div>
      <div className="border-t border-line">
        {experienceItems.map((item, index) => (
          <article className="grid min-h-[119px] grid-cols-[1fr_1.2fr_1.5fr_20px] items-center gap-[35px] border-b border-line max-[850px]:grid-cols-[.9fr_1.2fr_1.5fr_15px] max-[850px]:gap-5 max-[620px]:grid-cols-[1fr_20px] max-[620px]:gap-[10px] max-[620px]:py-[21px]" key={`${item.company}-${item.role}-${index}`}>
            <div className="font-mono text-[10px] text-muted max-[620px]:col-start-1 max-[620px]:row-start-1">{item.period}</div>
            <div className="max-[620px]:col-start-1 max-[620px]:row-start-2">
              <h3 className="mb-[7px] font-display text-[17px] font-semibold tracking-[-.04em]">{item.role}</h3>
              <p className="text-[11px] leading-[1.65] text-muted">{item.company} <span className="px-1">·</span> Dhaka, Bangladesh</p>
            </div>
            <p className="m-0 text-[11px] leading-[1.65] text-muted max-[620px]:col-start-1 max-[620px]:row-start-3">{item.detail}</p>
            <span className="justify-self-end text-[18px] text-[#8b9d5c] max-[620px]:col-start-2 max-[620px]:row-start-2" aria-hidden="true">↗</span>
          </article>
        ))}
      </div>
      <div className="flex justify-between gap-10 pt-[43px] max-[620px]:block">
        <div>
          <p className="mb-[14px] font-mono text-[10px] font-medium leading-[1.5] tracking-[.11em] text-muted">EDUCATION</p>
          <h3 className="mb-2 font-display text-[16px] font-semibold tracking-[-.035em] max-[620px]:text-[14px]">B.Sc. in Computer Science & Engineering</h3>
          <p className="text-[11px] text-muted max-[620px]:leading-[1.6]">International University of Business Agriculture and Technology <span className="px-1">·</span> CGPA 3.53 / 4.00</p>
        </div>
        <div className="min-w-[220px] border-l border-line pl-[25px] max-[620px]:mt-[26px] max-[620px]:min-w-0 max-[620px]:border-0 max-[620px]:p-0">
          <span className="mb-[14px] block font-mono text-[9px] tracking-[.1em] text-muted">LANGUAGES</span>
          <p className="text-[12px]">Bengali <i className="text-[10px] text-[#888b82] not-italic">Native</i><b className="px-2 text-[#b4b6ad]">·</b> English <i className="text-[10px] text-[#888b82] not-italic">Professional</i></p>
        </div>
      </div>
    </section>
  )
}
