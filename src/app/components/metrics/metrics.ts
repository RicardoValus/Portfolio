import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  angularPostgradHours,
  chatSeguroDownloadsUrl,
  chatSeguroReleaseCount,
  visibleProjectsOnPage,
  yearsAsDeveloper,
} from '../../data/metrics';
import { Reveal } from '../../reveal';

interface MetricItem {
  value: string;
  label: string;
  href?: string;
}

@Component({
  selector: 'app-metrics',
  imports: [Reveal],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './metrics.html',
})
export class Metrics {
  protected readonly metrics: readonly MetricItem[] = [
    { value: `${yearsAsDeveloper()}+`, label: 'anos como dev' },
    { value: String(visibleProjectsOnPage()), label: 'projetos' },
    {
      value: String(chatSeguroReleaseCount),
      label: 'versões do Chat Seguro 2',
      href: chatSeguroDownloadsUrl,
    },
    { value: `${angularPostgradHours}h`, label: 'pós-graduação em Angular' },
  ];
}
