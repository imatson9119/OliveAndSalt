import { Component, OnInit, OnDestroy, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FadeInDirective } from '../../directives';
import { StructuredDataService } from '../../services/structured-data.service';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RouterLink, FadeInDirective],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent implements OnInit, OnDestroy {
  private structuredDataService = inject(StructuredDataService);

  ngOnInit() {
    // Add structured data for about page (Chef and Organization)
    const aboutPageSchema = this.structuredDataService.getAboutPageSchema();
    this.structuredDataService.insertStructuredData(aboutPageSchema);
  }

  ngOnDestroy() {
    // Clean up structured data
    this.structuredDataService.removeStructuredData();
  }
}
