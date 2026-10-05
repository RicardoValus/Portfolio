import { ChangeDetectionStrategy, Component } from '@angular/core';
import { siteConfig } from '../../data/site.config';
import { Icon } from '../icon/icon';

@Component({
  selector: 'app-footer',
  imports: [Icon],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './footer.html',
})
export class Footer {
  protected readonly site = siteConfig;
  protected readonly year = new Date().getFullYear();
  protected readonly mailto = `mailto:${siteConfig.contactEmail}`;
}
