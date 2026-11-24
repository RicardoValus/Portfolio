import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { TECH_ICONS, type TechIconKey } from '../../data/tech-icons';

const DEFAULT_VIEW_BOX = '0 0 24 24';

@Component({
  selector: 'app-icon',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <svg [attr.viewBox]="viewBox()" aria-hidden="true" focusable="false">
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

  protected readonly icon = computed(() => TECH_ICONS[this.name()]);
  protected readonly path = computed(() => this.icon().path);
  protected readonly viewBox = computed(() => {
    const icon = this.icon();
    return 'viewBox' in icon && typeof icon.viewBox === 'string' ? icon.viewBox : DEFAULT_VIEW_BOX;
  });
}
