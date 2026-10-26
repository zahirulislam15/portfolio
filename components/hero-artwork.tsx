'use client'

import Image from 'next/image'
import { useRef } from 'react'
import { useHeroArtworkAnimation } from '@/hooks/use-hero-artwork-animation'

export default function HeroArtwork() {
  const artworkRef = useRef<HTMLDivElement>(null)

  useHeroArtworkAnimation(artworkRef)

  return (
    <div
      ref={artworkRef}
      className="relative min-h-[430px] w-full max-w-[475px] justify-self-end overflow-hidden rounded-t-[48%] rounded-b-[5px] bg-[#e7e8de] max-[850px]:min-h-[350px] max-[620px]:mt-[43px] max-[620px]:min-h-[305px] max-[620px]:max-w-none max-[620px]:rounded-t-[44%]"
      aria-label="Portrait of Mohammad Zahirul Islam surrounded by orbiting ideas, people, systems, and impact"
      role="img"
    >
      <div className="absolute left-[55%] top-[48%] h-[22%] w-[22%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#d4dcbb] blur-[1px]" />
      <div className="orbit-one absolute top-[calc(48%_-_145px)] left-[calc(55%_-_145px)] z-[1] h-[290px] w-[290px] rounded-full border border-[#bac2a6] [transform:scaleY(.66)_rotate(35deg)]" />
      <div className="orbit-two absolute top-[calc(48%_-_175px)] left-[calc(55%_-_125px)] z-[1] h-[350px] w-[250px] rounded-full border border-dashed border-[#bac2a6] opacity-70 [transform:rotate(42deg)]" />
      <div className="art-center absolute top-[48%] left-[55%] z-[2] -mt-[43px] -ml-[43px] h-[86px] w-[86px] rounded-full shadow-[0_12px_35px_#343b2530]">
        <Image
          className="art-center-photo h-[86px] w-[86px] rounded-full border-[3px] border-paper object-cover object-[50%_18%]"
          src="/zahirul-islam.png"
          alt=""
          width={86}
          height={86}
          sizes="86px"
        />
        <i className="absolute right-[5px] bottom-[6px] h-[10px] w-[10px] rounded-full border-2 border-paper bg-lime" />
      </div>
      <span className="art-node node-one absolute top-[23%] left-[52%] z-[3] rounded-full border border-[#d7d9ce] bg-paper px-[11px] py-2 font-mono text-[9px] tracking-[.06em] shadow-[0_5px_20px_#3d44200b]">IDEA</span>
      <span className="art-node node-two absolute top-[47%] right-[7%] z-[3] rounded-full border border-[#d7d9ce] bg-paper px-[11px] py-2 font-mono text-[9px] tracking-[.06em] shadow-[0_5px_20px_#3d44200b]">PEOPLE</span>
      <span className="art-node node-three absolute bottom-[21%] left-[42%] z-[3] rounded-full border border-[#d7d9ce] bg-paper px-[11px] py-2 font-mono text-[9px] tracking-[.06em] shadow-[0_5px_20px_#3d44200b]">SYSTEMS</span>
      <span className="art-node node-four absolute top-[61%] left-[9%] z-[3] rounded-full border border-[#d7d9ce] bg-paper px-[11px] py-2 font-mono text-[9px] tracking-[.06em] shadow-[0_5px_20px_#3d44200b]">IMPACT</span>
      <div className="art-caption absolute right-[25px] bottom-[22px] left-[25px] z-[3] flex justify-between font-mono text-[9px] tracking-[.05em] text-[#686e5d]">
        <span>01 / 04</span><span>Build with purpose</span>
      </div>
    </div>
  )
}
