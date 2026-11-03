import { describe, expect, it } from 'vitest';
import {
  featuredProjects,
  gridProjects,
  projectBadges,
  projectLinks,
  projects,
  projectsForFilter,
  readProjectFilter,
  visibleProjectCount,
} from './projects';

describe('projects', () => {
  it('should list rango among the visible projects', () => {
    const visible = projectsForFilter(projects, 'Todos');

    expect(visible.map((project) => project.id)).toContain('rango');
  });

  it('should keep four featured projects when the filter is Todos', () => {
    expect(featuredProjects(projects, 'Todos').map((project) => project.id)).toEqual([
      'rockers',
      'capacitor-phone-call-notification-android',
      'todo-app',
      'resenha',
    ]);
  });

  it('should leave featured projects out of the grid', () => {
    const gridIds = gridProjects(projects, 'Todos').map((project) => project.id);

    expect(gridIds).not.toContain('rockers');
    expect(gridIds).not.toContain('order-delivery');
    expect(gridIds).toContain('garimpo');
    expect(gridIds).toContain('tasks-project');
  });

  it('should count the visible projects after Order Delivery is gone', () => {
    expect(projects.some((project) => project.id === 'order-delivery')).toBe(false);
    expect(visibleProjectCount(projects)).toBe(10);
  });

  it('should list Meet Seguro as live and private, with the public login', () => {
    const meet = projects.find((project) => project.id === 'meet-seguro');
    if (!meet) {
      throw new Error('Meet Seguro ausente');
    }

    expect(meet.visible).toBe(true);
    expect(meet.lifecycle).toBe('live');
    expect(meet.access).toBe('private');
    expect(meet.repoUrl).toBeNull();
    expect(meet.links).toEqual([{ label: 'Ver site', href: 'https://meetseguro.com.br/login' }]);
    expect(gridProjects(projects, 'Todos').map((project) => project.id)).toContain('meet-seguro');
  });

  it('should filter by category', () => {
    const mobile = projectsForFilter(projects, 'Mobile').map((project) => project.id);

    expect(mobile).toContain('rockers');
    expect(mobile).toContain('rango');
    expect(mobile).not.toContain('todo-app');
  });

  it('should fall back to Todos when the chip value is empty', () => {
    expect(readProjectFilter(null)).toBe('Todos');
    expect(readProjectFilter('Infra')).toBe('Infra');
  });

  it('should keep Resenha private, on the air, with app and installer links', () => {
    const resenha = projects.find((project) => project.id === 'resenha');
    if (!resenha) {
      throw new Error('Resenha ausente');
    }

    expect(resenha.access).toBe('private');
    expect(resenha.lifecycle).toBe('live');
    expect(resenha.repoUrl).toBeNull();
    expect(projectLinks(resenha).map((link) => link.href)).toEqual([
      'https://resenha-c9174.web.app',
      'https://github.com/RicardoValus/Resenha-Releases/releases',
    ]);
  });

  it('should leave Tasks Project without badges and keep its repository link', () => {
    const tasks = projects.find((project) => project.id === 'tasks-project');
    if (!tasks) {
      throw new Error('Tasks Project ausente');
    }

    expect(tasks.lifecycle).toBeUndefined();
    expect(tasks.access).toBeUndefined();
    expect(projectBadges(tasks)).toEqual([]);
    expect(projectLinks(tasks)).toEqual([
      { label: 'Ver código', href: 'https://github.com/RicardoValus/tasks-project' },
    ]);
  });

  it('should hide projects whose README does not describe the product', () => {
    const visible = projectsForFilter(projects, 'Todos').map((project) => project.id);

    expect(visible).not.toContain('angular-webrtc');
    expect(visible).not.toContain('BeatFlow');
    expect(visible).not.toContain('Synk');
  });
});
