
import {gsap} from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger)
let jump = window.matchMedia("(max-width: 1024px)").matches ? 16 : 120
gsap.to('.lines-direct', {x: () => -(document.querySelector('.lines__items').scrollWidth - window.innerWidth + jump), scrollTrigger: {
  trigger: '.wrapper',
  start: "top top",
  end: 'center',
  endTrigger: '.lines',
  scrub: 1,
}})
gsap.to('.lines-reverse', {x: () => document.querySelector('.lines__items').scrollWidth - window.innerWidth + jump, scrollTrigger: {
  trigger: '.wrapper',
  start: "top top",
  end: 'center',
  endTrigger: '.lines',
  scrub: 1,
}})

// window.matchMedia("(max-width: 1024px)").matches ? -16 : -80
