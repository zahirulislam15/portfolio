export default function ApproachSection() {
  return (
    <section className="bg-lime">
      <div className="relative mx-auto grid min-h-[194px] w-[min(1160px,calc(100%_-_96px))] grid-cols-[1fr_2fr_40px] items-center gap-[25px] max-[850px]:w-[min(700px,calc(100%_-_52px))] max-[850px]:grid-cols-[1fr_2fr_35px] max-[850px]:gap-[18px] max-[620px]:block max-[620px]:min-h-[205px] max-[620px]:w-[calc(100%_-_40px)] max-[620px]:pt-[29px]">
        <p className="self-start pt-12 font-mono text-[10px] font-medium leading-[1.5] tracking-[.11em] text-[#59633f] max-[850px]:text-[8px] max-[620px]:mb-5 max-[620px]:pt-0">A LITTLE ABOUT MY APPROACH</p>
        <p className="max-w-[650px] font-display text-[clamp(24px,3vw,34px)] leading-[1.28] font-medium tracking-[-.055em] max-[620px]:pr-5 max-[620px]:text-[27px]">
          Good software isn’t just built to work. <span className="text-[#5b633f]">It makes the work around it work better.</span>
        </p>
        <div className="grid h-[38px] w-[38px] place-items-center rounded-full border border-[#85934f] text-[18px] max-[620px]:absolute max-[620px]:right-5 max-[620px]:bottom-7 max-[620px]:h-[30px] max-[620px]:w-[30px] max-[620px]:text-[14px]" aria-hidden="true">↗</div>
      </div>
    </section>
  )
}
