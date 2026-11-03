import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import type { ProjectBadgeKind } from '../../data/projects';

const BADGE_LABEL: Record<ProjectBadgeKind, string> = {
  live: 'No ar',
  'in-development': 'Em desenvolvimento',
  completed: 'Concluído',
  'open-source': 'Código aberto',
  private: 'Privado',
};

@Component({
  selector: 'app-project-badge',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'project-badge',
    '[attr.data-kind]': 'kind()',
  },
  template: `
    @if (showsDot()) {
      <span class="status-dot" aria-hidden="true"></span>
    }
    @if (showsCode()) {
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path
          d="M9.4 16.6 4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0 4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"
        />
      </svg>
    }
    @if (showsLock()) {
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path
          d="M12 2a5 5 0 0 0-5 5v3H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2h-1V7a5 5 0 0 0-5-5zm-3 8V7a3 3 0 0 1 6 0v3H9z"
        />
      </svg>
    }
    {{ label() }}
  `,
})
export class ProjectBadge {
  readonly kind = input.required<ProjectBadgeKind>();
  protected readonly label = computed(() => BADGE_LABEL[this.kind()]);
  protected readonly showsDot = computed(
    () => this.kind() !== 'open-source' && this.kind() !== 'private',
  );
  protected readonly showsCode = computed(() => this.kind() === 'open-source');
  protected readonly showsLock = computed(() => this.kind() === 'private');
}
