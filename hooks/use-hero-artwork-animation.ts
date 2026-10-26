import { useLayoutEffect, type RefObject } from 'react'
import { gsap } from 'gsap'

export function useHeroArtworkAnimation(artworkRef: RefObject<HTMLDivElement | null>) {
  useLayoutEffect(() => {
    const artwork = artworkRef.current

    if (!artwork) {
      return
    }

    const media = gsap.matchMedia(artwork)

    media.add('(prefers-reduced-motion: no-preference)', () => {
      const entrance = gsap.timeline({ defaults: { ease: 'power3.out' } })

      entrance
        .from('.art-center', { autoAlpha: 0, scale: 0.72, duration: 0.7 })
        .from('.art-node', { autoAlpha: 0, y: 14, stagger: 0.12, duration: 0.5 }, '-=0.25')
        .from('.art-caption', { autoAlpha: 0, y: 8, duration: 0.45 }, '-=0.2')

      gsap.to('.orbit-one', {
        rotation: '+=360',
        duration: 38,
        ease: 'none',
        repeat: -1,
      })
      gsap.to('.orbit-two', {
        rotation: '-=360',
        duration: 52,
        ease: 'none',
        repeat: -1,
      })
      gsap.to('.art-center', {
        y: -7,
        duration: 2.8,
        ease: 'sine.inOut',
        repeat: -1,
        yoyo: true,
      })
      gsap.to('.art-node', {
        y: -5,
        duration: 2.2,
        ease: 'sine.inOut',
        repeat: -1,
        yoyo: true,
        stagger: { each: 0.3, from: 'random' },
      })
    })

    return () => media.revert()
  }, [artworkRef])
}
