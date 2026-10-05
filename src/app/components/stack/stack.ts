import { ChangeDetectionStrategy, Component } from '@angular/core';
import { skillGroups } from '../../data/skills';
import { Reveal } from '../../reveal';
import { StackChip } from '../stack-chip/stack-chip';

@Component({
  selector: 'app-stack',
  imports: [StackChip, Reveal],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './stack.html',
})
export class Stack {
  protected readonly groups = skillGroups;
}
