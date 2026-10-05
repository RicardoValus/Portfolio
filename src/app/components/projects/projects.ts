import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { MatChipListbox, MatChipListboxChange, MatChipOption } from '@angular/material/chips';
import {
  featuredProjects,
  gridProjects,
  projectFilters,
  projects,
  readProjectFilter,
  type ProjectFilter,
} from '../../data/projects';
import { ProjectCard } from '../project-card/project-card';

@Component({
  selector: 'app-projects',
  imports: [MatChipListbox, MatChipOption, ProjectCard],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './projects.html',
})
export class Projects {
  protected readonly filters = projectFilters;
  protected readonly activeFilter = signal<ProjectFilter>('Todos');
  protected readonly featured = computed(() => featuredProjects(projects, this.activeFilter()));
  protected readonly grid = computed(() => gridProjects(projects, this.activeFilter()));

  protected onFilterChange(event: MatChipListboxChange): void {
    this.activeFilter.set(readProjectFilter(event.value));
  }
}
