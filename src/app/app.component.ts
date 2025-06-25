import { Component, inject } from '@angular/core';
import { RouterOutlet, ChildrenOutletContexts } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { slideInAnimation } from './animations/route-animations';
import { ScrollService } from './services/scroll.service';
import { RouteAnimationService } from './services/route-animation.service';

@Component({
    selector: 'app-root',
    imports: [RouterOutlet, HeaderComponent, FooterComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    animations: [slideInAnimation]
})
export class AppComponent {
  private contexts = inject(ChildrenOutletContexts);
  private scrollService = inject(ScrollService);
  private routeAnimationService = inject(RouteAnimationService);

  getRouteAnimationData() {
    if (this.routeAnimationService.isFirstPageLoad()) {
      return 'none';
    }

    return this.contexts.getContext('primary')?.route?.snapshot?.data?.[
      'animation'
    ];
  }
}
