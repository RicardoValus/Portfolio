import { describe, expect, it } from 'vitest';
import {
  featuredProjects,
  gridProjects,
  privateRepositoryMessage,
  projects,
  projectsForFilter,
  readProjectFilter,
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
    expect(gridIds).toContain('order-delivery');
    expect(gridIds).toContain('garimpo');
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

  it('should build the private repository sentence', () => {
    expect(privateRepositoryMessage('em desenvolvimento (CONFIRMAR)')).toBe(
      'Repositório privado: em desenvolvimento (CONFIRMAR). Posso apresentar o projeto em uma reunião.',
    );
  });

  it('should keep Resenha private with a releases link and no repository', () => {
    const resenha = projects.find((project) => project.id === 'resenha');

    expect(resenha?.isPrivate).toBe(true);
    expect(resenha?.repoUrl).toBeNull();
    expect(resenha?.liveUrl).toBe('https://github.com/RicardoValus/Resenha-Releases');
  });

  it('should hide projects whose README does not describe the product', () => {
    const visible = projectsForFilter(projects, 'Todos').map((project) => project.id);

    expect(visible).not.toContain('angular-webrtc');
    expect(visible).not.toContain('BeatFlow');
    expect(visible).not.toContain('Synk');
  });
});
