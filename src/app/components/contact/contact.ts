import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { siteConfig } from '../../data/site.config';
import { Reveal } from '../../reveal';

@Component({
  selector: 'app-contact',
  imports: [MatButton, Reveal],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './contact.html',
})
export class Contact {
  protected readonly site = siteConfig;
  protected readonly mailto = `mailto:${siteConfig.contactEmail}`;
}
