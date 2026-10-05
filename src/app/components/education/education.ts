import { ChangeDetectionStrategy, Component } from '@angular/core';
import { certificates, education } from '../../data/education';
import { Reveal } from '../../reveal';

@Component({
  selector: 'app-education',
  imports: [Reveal],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './education.html',
})
export class Education {
  protected readonly education = education;
  protected readonly certificates = certificates;
}
