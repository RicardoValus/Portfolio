import { ChangeDetectionStrategy, Component } from '@angular/core';
import { certificates, education } from '../../data/education';

@Component({
  selector: 'app-education',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './education.html',
})
export class Education {
  protected readonly education = education;
  protected readonly certificates = certificates;
}
