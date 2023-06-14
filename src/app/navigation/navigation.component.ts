import { Component } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
})
export class NavigationComponent {
  constructor(private translocoService: TranslocoService) {}
  public languagesList: Array<Record<'code' | 'name' | 'shorthand', string>> = [
    {
      code: 'en',
      name: 'English',
      shorthand: 'ENG',
    },
    {
      code: 'pl',
      name: 'Polish',
      shorthand: 'POL',
    },
  ];
  public changeLanguage(languageCode: string): void {
    this.translocoService.setActiveLang(languageCode);
  }

  show = false;

  toggleMenu() {
    this.show = !this.show;
  }

  closeMenu(event: Event) {
    const target = event.target as HTMLUListElement;
    if (target.classList.contains('link')) {
      this.show = false;
    }
  }
}
