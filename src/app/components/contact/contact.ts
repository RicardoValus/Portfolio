import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { siteConfig } from '../../data/site.config';

@Component({
  selector: 'app-contact',
  imports: [MatButton],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './contact.html',
})
export class Contact {
  protected readonly site = siteConfig;
  protected readonly mailto = `mailto:${siteConfig.contactEmail}`;
}
