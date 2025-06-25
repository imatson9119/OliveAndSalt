import { Component, OnInit, OnDestroy, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';
import { FadeInDirective } from '../../directives';
import { StructuredDataService } from '../../services/structured-data.service';

@Component({
    selector: 'app-about',
    imports: [RouterLink, FadeInDirective],
    templateUrl: './about.component.html',
    styleUrl: './about.component.scss'
})
export class AboutComponent implements OnInit, OnDestroy {
  private structuredDataService = inject(StructuredDataService);
  private meta = inject(Meta);
  private title = inject(Title);

  ngOnInit() {
    // Update page title and meta tags
    this.title.setTitle('About Emma Matson | Olive & Salt Personal Chef');
    this.meta.updateTag({
      name: 'description',
      content:
        'Meet Emma Matson; your personal chef with a passion for cooking and hospitality as an art form. I specialize in fresh, seasonal, nutrition-focused cuisine.',
    });
    this.meta.updateTag({
      name: 'keywords',
      content:
        'Emma Matson, personal chef, culinary experience, about chef, biography',
    });
    this.meta.updateTag({
      property: 'og:title',
      content: 'About Emma Matson | Personal Chef',
    });
    this.meta.updateTag({
      property: 'og:description',
      content:
        'Meet Emma Matson; your personal chef with a passion for cooking and hospitality as an art form. I specialize in fresh, seasonal, nutrition-focused cuisine.',
    });
    this.meta.updateTag({
      property: 'og:type',
      content: 'profile',
    });

    // Add structured data for about page (Chef and Organization)
    const aboutPageSchema = this.structuredDataService.getAboutPageSchema();
    this.structuredDataService.insertStructuredData(aboutPageSchema);
  }

  ngOnDestroy() {
    // Clean up structured data
    this.structuredDataService.removeStructuredData();
  }
}
