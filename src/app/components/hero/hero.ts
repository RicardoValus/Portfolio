import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatMenu, MatMenuItem, MatMenuTrigger } from '@angular/material/menu';
import { profile } from '../../data/profile';
import { siteConfig } from '../../data/site.config';

@Component({
  selector: 'app-hero',
  imports: [MatButton, MatMenu, MatMenuItem, MatMenuTrigger],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './hero.html',
})
export class Hero {
  protected readonly site = siteConfig;
  protected readonly profile = profile;
  protected readonly mailto = `mailto:${siteConfig.contactEmail}`;
}
