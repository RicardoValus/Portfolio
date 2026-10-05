import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { hasProfilePhoto, profile, profilePhotoSize, profilePhotoUrl } from '../../data/profile';
import { siteConfig } from '../../data/site.config';

@Component({
  selector: 'app-about',
  imports: [NgOptimizedImage],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './about.html',
})
export class About {
  protected readonly profile = profile;
  protected readonly siteName = siteConfig.name;
  protected readonly hasProfilePhoto = hasProfilePhoto;
  protected readonly profilePhotoUrl = profilePhotoUrl;
  protected readonly profilePhotoSize = profilePhotoSize;
}
