import { Component, OnInit, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-privacy',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './privacy.component.html',
  styleUrl: './privacy.component.scss',
})
export class PrivacyComponent implements OnInit {
  private meta = inject(Meta);
  private title = inject(Title);

  ngOnInit() {
    // Update page title and meta tags
    this.title.setTitle('Privacy Policy | Olive & Salt Personal Chef Service');
    this.meta.updateTag({
      name: 'description',
      content:
        'Learn how Olive & Salt protects your personal information and privacy. Our commitment to data security and transparent privacy practices.',
    });
    this.meta.updateTag({
      name: 'keywords',
      content:
        'privacy policy, data protection, personal information, privacy practices',
    });
    this.meta.updateTag({
      property: 'og:title',
      content: 'Privacy Policy | Olive & Salt',
    });
    this.meta.updateTag({
      property: 'og:description',
      content:
        'Our privacy policy and commitment to protecting your personal information.',
    });
  }
}
