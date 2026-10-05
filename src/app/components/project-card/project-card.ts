import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatCard, MatCardActions, MatCardContent } from '@angular/material/card';
import {
  availableScreenshots,
  privateRepositoryMessage,
  shotHeight,
  shotWidth,
  type Project,
} from '../../data/projects';
import { Reveal } from '../../reveal';
import { StackChip } from '../stack-chip/stack-chip';

@Component({
  selector: 'app-project-card',
  imports: [MatCard, MatCardContent, MatCardActions, MatButton, NgOptimizedImage, StackChip],
  hostDirectives: [Reveal],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './project-card.html',
})
export class ProjectCard {
  readonly project = input.required<Project>();
  protected readonly shotWidth = shotWidth;
  protected readonly shotHeight = shotHeight;
  protected readonly privateMessage = privateRepositoryMessage;
  protected readonly showScreenshot = computed(() => availableScreenshots.has(this.project().id));
}
