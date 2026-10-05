import { isPlatformBrowser } from '@angular/common';
import { afterNextRender, DestroyRef, Directive, ElementRef, inject, PLATFORM_ID } from '@angular/core';

@Directive({
  selector: '[appReveal]',
})
export class Reveal {
  private readonly elementRef = inject(ElementRef);
  private readonly platformId = inject(PLATFORM_ID);
  private readonly destroyRef = inject(DestroyRef);

  constructor() {
    afterNextRender(() => {
      if (!isPlatformBrowser(this.platformId) || typeof IntersectionObserver === 'undefined') {
        return;
      }

      const native: unknown = this.elementRef.nativeElement;
      if (!(native instanceof HTMLElement) || this.prefersReducedMotion()) {
        return;
      }

      const element = native;
      const observer = new IntersectionObserver(
        (entries) => {
          if (!entries.some((entry) => entry.isIntersecting)) {
            return;
          }

          element.classList.add('is-in');
          observer.disconnect();
        },
        { threshold: 0, rootMargin: '0px 0px -8% 0px' },
      );

      this.destroyRef.onDestroy(() => observer.disconnect());

      if (this.isBelowView(element)) {
        element.classList.add('reveal-wait');
      }

      observer.observe(element);
    });
  }

  private prefersReducedMotion(): boolean {
    return (
      typeof window.matchMedia === 'function' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    );
  }

  private isBelowView(element: HTMLElement): boolean {
    return element.getBoundingClientRect().top > window.innerHeight * 0.86;
  }
}
