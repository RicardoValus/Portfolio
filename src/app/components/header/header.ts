import { isPlatformBrowser } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  effect,
  ElementRef,
  HostListener,
  inject,
  PLATFORM_ID,
  signal,
  viewChild,
} from '@angular/core';
import { navItems, siteConfig } from '../../data/site.config';
import { Icon } from '../icon/icon';

@Component({
  selector: 'app-header',
  imports: [Icon],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './header.html',
})
export class Header {
  private readonly platformId = inject(PLATFORM_ID);
  private readonly menuButton = viewChild<ElementRef<HTMLButtonElement>>('menuButton');

  protected readonly site = siteConfig;
  protected readonly navItems = navItems;
  protected readonly isMenuOpen = signal(false);

  constructor() {
    effect((onCleanup) => {
      if (!isPlatformBrowser(this.platformId)) {
        return;
      }

      const isLocked = this.isMenuOpen() && window.matchMedia('(max-width: 959px)').matches;
      this.setBackgroundLocked(isLocked);
      onCleanup(() => this.setBackgroundLocked(false));
    });
  }

  private setBackgroundLocked(isLocked: boolean): void {
    document.body.classList.toggle('menu-open', isLocked);

    for (const element of [
      document.getElementById('conteudo'),
      document.querySelector('app-footer'),
    ]) {
      if (!(element instanceof HTMLElement)) {
        continue;
      }

      if (isLocked) {
        element.setAttribute('inert', '');
      } else {
        element.removeAttribute('inert');
      }
    }
  }

  protected toggleMenu(): void {
    this.isMenuOpen.update((isOpen) => !isOpen);
  }

  protected closeMenu(): void {
    this.isMenuOpen.set(false);
  }

  @HostListener('document:keydown.escape')
  protected onEscape(): void {
    if (!this.isMenuOpen()) {
      return;
    }

    this.isMenuOpen.set(false);
    this.menuButton()?.nativeElement.focus();
  }
}
