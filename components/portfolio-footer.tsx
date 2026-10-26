import Image from 'next/image'
import { PORTFOLIO, socialLinks } from '@/data/portfolio'

export default function PortfolioFooter() {
  const links = Array.isArray(socialLinks) && socialLinks.length > 0 ? socialLinks : []

  return (
    <footer className="bg-ink text-paper" id="contact">
      <div className="mx-auto w-[min(1160px,calc(100%_-_96px))] pt-[83px] max-[850px]:w-[min(700px,calc(100%_-_52px))] max-[620px]:w-[calc(100%_-_40px)] max-[620px]:pt-[67px]">
        <p className="font-mono text-[10px] font-medium leading-[1.5] tracking-[.11em] text-[#a5aa96]">HAVE SOMETHING GOOD IN MIND?</p>
        <h2 className="mt-6 mb-[25px] font-display text-[clamp(57px,8vw,98px)] leading-[.96] font-medium tracking-[-.085em] max-[620px]:mt-[21px] max-[620px]:text-[clamp(57px,14vw,76px)]">Let’s make it<br /><span className="text-lime">work beautifully.</span></h2>
        <a className="inline-flex items-center gap-[18px] border-b border-[#747769] pb-[7px] text-[14px] text-[#e0e2d8] max-[620px]:text-[12px]" href={`mailto:${PORTFOLIO.email}`}>
          {PORTFOLIO.email} <span className="text-[18px] text-lime" aria-hidden="true">↗</span>
        </a>
        <div className="mt-[75px] flex min-h-[93px] items-center justify-between border-t border-[#42443d] font-mono text-[9px] tracking-[.08em] text-[#a3a69b] max-[620px]:mt-[62px] max-[620px]:min-h-[106px] max-[620px]:flex-wrap max-[620px]:gap-[14px] max-[620px]:py-[18px]">
          <a className="inline-flex items-center gap-3 transition-opacity hover:opacity-60 max-[620px]:basis-full max-[620px]:gap-2" href="#home" aria-label={`${PORTFOLIO.name} home`}>
            <Image className="h-[39px] w-[39px] rounded-full border border-[#55584c] object-cover object-[50%_20%] max-[620px]:h-[34px] max-[620px]:w-[34px]" src="/zahirul-islam.png" alt="" width={39} height={39} sizes="39px" />
            <span className="font-sans text-[11px] font-semibold tracking-normal text-paper">{PORTFOLIO.name}</span>
          </a>
          <span className="max-[620px]:text-[7px]">BASED IN DHAKA, BANGLADESH</span>
          <div className="flex gap-[18px] max-[620px]:gap-3">
            {links.map((link, index) => (
              <a className="transition-opacity hover:opacity-60 max-[620px]:text-[7px]" key={`${link.label}-${index}`} href={link.href} target="_blank" rel="noreferrer">
                {link.label.toUpperCase()} ↗
              </a>
            ))}
            <a className="transition-opacity hover:opacity-60 max-[620px]:text-[7px]" href="#home">TOP ↑</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
