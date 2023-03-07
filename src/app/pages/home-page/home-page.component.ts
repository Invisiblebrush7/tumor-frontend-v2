import { AfterViewInit, Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements AfterViewInit {
  @ViewChild('firstCard') first_card: any;
  @ViewChild('secondCard') second_card: any;
  @ViewChild('topCard') top_card: any;
  @ViewChild('thirdCard') third_card: any;
  @ViewChild('fourthCard') fourth_card: any;

  async ngAfterViewInit(): Promise<void> {
    const cards: any[] = [
      this.first_card,
      this.second_card,
      this.top_card,
      this.third_card,
      this.fourth_card,
    ];
    while (true) {
      await new Promise((r) => setTimeout(r, 2000));
      rotateCards(cards);
    }
  }
}

function rotateCards(cards: any[]) {
  const classes: any = {
    0: 'first-card',
    1: 'second-card',
    2: 'top-card',
    3: 'third-card',
    4: 'fourth-card',
  };
  // const cards = Array.from(document.querySelectorAll('.card-image'));
  cards = cards.map((card) => card.nativeElement);
  cards.forEach((card: any) => {
    let i = Number.parseInt(card.dataset.position);

    if (i >= 4) {
      i = 0;
    } else {
      i++;
    }

    card.classList = ['card-image'];
    card.classList.add(classes[i]);

    card.dataset.position = i;
  });
}
