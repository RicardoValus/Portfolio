import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { profile } from '../../data/profile';
import { siteConfig } from '../../data/site.config';

@Component({
  selector: 'app-hero',
  imports: [MatButton],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './hero.html',
})
export class Hero {
  protected readonly site = siteConfig;
  protected readonly profile = profile;
  protected readonly mailto = `mailto:${siteConfig.contactEmail}`;
}
