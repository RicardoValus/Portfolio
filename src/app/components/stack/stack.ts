import { ChangeDetectionStrategy, Component } from '@angular/core';
import { skillGroups } from '../../data/skills';
import { StackChip } from '../stack-chip/stack-chip';

@Component({
  selector: 'app-stack',
  imports: [StackChip],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './stack.html',
})
export class Stack {
  protected readonly groups = skillGroups;
}
