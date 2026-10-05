import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import type { StackItem } from '../../data/tech-icons';
import { Icon } from '../icon/icon';

@Component({
  selector: 'app-stack-chip',
  imports: [Icon],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'stack-chip' },
  template: `
    @if (item().icon; as icon) {
      <app-icon [name]="icon" />
    }
    {{ item().label }}
  `,
})
export class StackChip {
  readonly item = input.required<StackItem>();
}
