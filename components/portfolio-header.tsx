import Image from 'next/image'
import { PORTFOLIO } from '@/data/portfolio'

export default function PortfolioHeader() {
  return (
    <header className="mx-auto flex h-[88px] w-[min(1160px,calc(100%_-_96px))] items-center justify-between border-b border-line max-[850px]:w-[min(700px,calc(100%_-_52px))] max-[620px]:h-[72px] max-[620px]:w-[calc(100%_-_40px)]">
      <a className="group inline-flex items-center gap-3 max-[620px]:gap-2" href="#home" aria-label={`${PORTFOLIO.name} home`}>
        <Image className="h-[39px] w-[39px] rounded-full border border-[#d9d9d0] object-cover object-[50%_20%] max-[620px]:h-[34px] max-[620px]:w-[34px]" src="/zahirul-islam.png" alt="" width={39} height={39} sizes="39px" />
        <span className="text-[13px] font-bold tracking-[-.3px] max-[620px]:text-[11px]">{PORTFOLIO.name}</span>
      </a>
      <nav className="flex items-center gap-[38px] text-[13px] text-[#5d6058] max-[620px]:hidden" aria-label="Main navigation">
        <a className="transition-opacity hover:opacity-60" href="#work">Work</a>
        <a className="transition-opacity hover:opacity-60" href="#about">About</a>
        <a className="transition-opacity hover:opacity-60" href="#experience">Experience</a>
      </nav>
      <a className="inline-flex items-center gap-[18px] rounded-full border border-[#cccec5] px-4 py-3 text-[12px] font-semibold transition-opacity hover:opacity-60 max-[620px]:gap-[10px] max-[620px]:px-[13px] max-[620px]:py-[10px] max-[620px]:text-[11px]" href={`mailto:${PORTFOLIO.email}`}>
        Let’s talk <span className="text-[15px]" aria-hidden="true">↗</span>
      </a>
    </header>
  )
}
