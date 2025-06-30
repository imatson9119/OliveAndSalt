import { Component, OnInit, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-terms',
  imports: [RouterLink],
  templateUrl: './terms.component.html',
  styleUrl: './terms.component.scss',
})
export class TermsComponent implements OnInit {
  private meta = inject(Meta);
  private title = inject(Title);

  ngOnInit() {
    // Update page title and meta tags
    this.title.setTitle('Terms of Service | Olive & Salt Personal Chef');
    this.meta.updateTag({
      name: 'description',
      content:
        'Review the terms and conditions for Olive & Salt personal chef services, including booking policies, cancellation terms, and service agreements.',
    });
    this.meta.updateTag({
      name: 'keywords',
      content:
        'terms of service, service agreement, booking terms, cancellation policy',
    });
    this.meta.updateTag({
      property: 'og:title',
      content: 'Terms of Service | Olive & Salt',
    });
    this.meta.updateTag({
      property: 'og:description',
      content:
        'Terms and conditions for personal chef services, including policies and agreements.',
    });
  }
}
