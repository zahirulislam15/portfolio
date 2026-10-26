import HeroArtwork from '@/components/hero-artwork'
import { PORTFOLIO } from '@/data/portfolio'

export default function HeroSection() {
  return (
    <section className="relative mx-auto grid min-h-[632px] w-[min(1160px,calc(100%_-_96px))] grid-cols-[1.1fr_.9fr] items-center gap-3 pt-[83px] max-[850px]:min-h-0 max-[850px]:w-[min(700px,calc(100%_-_52px))] max-[850px]:gap-3 max-[850px]:pt-[75px] max-[850px]:pb-[104px] max-[620px]:flex max-[620px]:w-[calc(100%_-_40px)] max-[620px]:flex-col max-[620px]:items-stretch max-[620px]:pt-12 max-[620px]:pb-[85px]" id="home">
      <div className="relative z-[1] pb-[35px] max-[620px]:pb-0">
        <div className="mb-10 inline-flex items-center gap-[9px] rounded-full border border-[#d9d9d0] px-3 py-2 text-[11px] text-[#55584f] max-[620px]:mb-7">
          <span className="h-[7px] w-[7px] rounded-full bg-[#88a945] shadow-[0_0_0_4px_#88a94520]" />
          Open to new opportunities
        </div>
        <p className="font-mono text-[10px] font-medium leading-[1.5] tracking-[.11em] text-muted max-[620px]:text-[8px]">FULL STACK SOFTWARE ENGINEER · DHAKA, BANGLADESH</p>
        <h1 className="mt-[19px] mb-[21px] max-w-[630px] font-display text-[clamp(57px,7.1vw,88px)] leading-[.99] font-medium tracking-[-.085em] max-[850px]:text-[clamp(55px,8vw,72px)] max-[620px]:mt-[15px] max-[620px]:max-w-[440px] max-[620px]:text-[clamp(53px,14vw,72px)]">
          I make complex work feel <span className="text-[#82964f]">simple.</span>
        </h1>
        <p className="max-w-[445px] text-[16px] leading-[1.7] text-[#686b62] max-[620px]:max-w-[400px] max-[620px]:text-[14px]">
          I’m Zahirul, a software engineer building useful, thoughtful products for the people who rely on them every day.
        </p>
        <div className="mt-[31px] flex items-center gap-[26px]">
          <a className="inline-flex min-h-[49px] items-center justify-center gap-[22px] rounded-full bg-ink px-5 text-[12px] font-semibold text-white transition-[transform,background-color] duration-200 hover:-translate-y-0.5 hover:bg-[#45483e]" href="#work">
            Explore my work <span className="text-[17px] text-lime" aria-hidden="true">↘</span>
          </a>
          <a className="text-[12px] font-semibold text-[#565950] transition-opacity hover:opacity-60" href={`mailto:${PORTFOLIO.email}`}>
            Get in touch <span className="pl-2" aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
      <HeroArtwork />
      <div className="absolute right-0 bottom-[35px] left-0 flex items-center gap-[15px] font-mono text-[9px] tracking-[.1em] text-[#85877f] max-[620px]:bottom-[27px] max-[620px]:gap-[9px] max-[620px]:text-[7px]">
        <span>SCROLL TO EXPLORE</span><span className="h-px w-12 bg-[#bfc2b7] max-[620px]:w-6" /><span className="ml-auto">4+ YEARS BUILDING FOR THE WEB</span>
      </div>
    </section>
  )
}
