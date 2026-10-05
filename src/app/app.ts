import { isPlatformBrowser } from '@angular/common';
import {
  afterNextRender,
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  inject,
  PLATFORM_ID,
} from '@angular/core';
import { About } from './components/about/about';
import { Contact } from './components/contact/contact';
import { Education } from './components/education/education';
import { Experience } from './components/experience/experience';
import { Footer } from './components/footer/footer';
import { Header } from './components/header/header';
import { Hero } from './components/hero/hero';
import { Projects } from './components/projects/projects';
import { Stack } from './components/stack/stack';

@Component({
  selector: 'app-root',
  imports: [Header, Hero, About, Experience, Projects, Stack, Education, Contact, Footer],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  private readonly platformId = inject(PLATFORM_ID);
  private readonly destroyRef = inject(DestroyRef);

  constructor() {
    afterNextRender(() => this.bindScrollProgress());
  }

  private bindScrollProgress(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    const bar = document.querySelector('.scroll-progress');
    if (!(bar instanceof HTMLElement)) {
      return;
    }

    if (
      typeof window.matchMedia === 'function' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      bar.style.transform = 'scaleX(1)';
      return;
    }

    const update = (): void => {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const progress = maxScroll > 0 ? window.scrollY / maxScroll : 0;
      bar.style.transform = `scaleX(${progress})`;
    };

    update();
    document.addEventListener('scroll', update, { passive: true });
    this.destroyRef.onDestroy(() => document.removeEventListener('scroll', update));
  }
}
