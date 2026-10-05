import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { TECH_ICONS, type TechIconKey } from '../../data/tech-icons';

@Component({
  selector: 'app-icon',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path [attr.d]="path()" />
    </svg>
  `,
  styles: `
    :host {
      display: inline-flex;
      width: 1em;
      height: 1em;
      color: inherit;
    }

    svg {
      width: 100%;
      height: 100%;
      fill: currentColor;
    }
  `,
})
export class Icon {
  readonly name = input.required<TechIconKey>();
  protected readonly path = computed(() => TECH_ICONS[this.name()].path);
}
