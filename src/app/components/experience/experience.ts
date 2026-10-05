import { ChangeDetectionStrategy, Component } from '@angular/core';
import { experience } from '../../data/experience';

@Component({
  selector: 'app-experience',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './experience.html',
})
export class Experience {
  protected readonly experience = experience;
}
