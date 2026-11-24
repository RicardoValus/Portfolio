import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  libraryBooks,
  libraryIntro,
  libraryShelfHeight,
  libraryShelfImage,
  libraryShelfWidth,
} from '../../data/library';
import { Reveal } from '../../reveal';

@Component({
  selector: 'app-library',
  imports: [NgOptimizedImage, Reveal],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './library.html',
})
export class Library {
  protected readonly intro = libraryIntro;
  protected readonly books = libraryBooks;
  protected readonly shelfImage = libraryShelfImage;
  protected readonly shelfWidth = libraryShelfWidth;
  protected readonly shelfHeight = libraryShelfHeight;
}
