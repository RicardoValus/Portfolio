import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { MatCard, MatCardContent } from '@angular/material/card';
import {
  availableScreenshots,
  projectBadges,
  projectLinks,
  shotHeight,
  shotWidth,
  type Project,
} from '../../data/projects';
import { Reveal } from '../../reveal';
import { ProjectBadge } from '../project-badge/project-badge';
import { StackChip } from '../stack-chip/stack-chip';

@Component({
  selector: 'app-project-card',
  imports: [MatCard, MatCardContent, NgOptimizedImage, ProjectBadge, StackChip],
  hostDirectives: [Reveal],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './project-card.html',
})
export class ProjectCard {
  readonly project = input.required<Project>();
  protected readonly shotWidth = shotWidth;
  protected readonly shotHeight = shotHeight;
  protected readonly showScreenshot = computed(() => availableScreenshots.has(this.project().id));
  protected readonly badges = computed(() => projectBadges(this.project()));
  protected readonly links = computed(() => projectLinks(this.project()));
}
