
import {gsap} from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger)

gsap.to('.lines-direct', {x: () => -(document.querySelector('.lines__items').scrollWidth - window.innerWidth), scrollTrigger: {
  start: "top top",
  endTrigger: '.lines',
  scrub: 1
}})
gsap.to('.lines-reverse', {x: () => (document.querySelector('.lines__items').scrollWidth - window.innerWidth), scrollTrigger: {
  start: "top top",
  endTrigger: '.lines',
  scrub: 1
}})
