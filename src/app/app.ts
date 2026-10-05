import { ChangeDetectionStrategy, Component } from '@angular/core';
import { About } from './components/about/about';
import { Contact } from './components/contact/contact';
import { Education } from './components/education/education';
import { Experience } from './components/experience/experience';
import { Footer } from './components/footer/footer';
import { Header } from './components/header/header';
import { Hero } from './components/hero/hero';
import { Projects } from './components/projects/projects';
import { Stack } from './components/stack/stack';

@Component({
  selector: 'app-root',
  imports: [Header, Hero, About, Experience, Projects, Stack, Education, Contact, Footer],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {}
