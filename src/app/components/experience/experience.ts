import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { experience } from '../../data/experience';
import { Reveal } from '../../reveal';

@Component({
  selector: 'app-experience',
  imports: [NgOptimizedImage, Reveal],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './experience.html',
})
export class Experience {
  protected readonly experience = experience;
}
