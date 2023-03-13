import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { ApiServiceService } from 'src/app/services/api-service.service';

@Component({
  selector: 'app-predict-page',
  templateUrl: './predict-page.component.html',
  styleUrls: ['./predict-page.component.scss'],
})
export class PredictPageComponent implements AfterViewInit {
  @ViewChild('firstCard') first_card: any;
  @ViewChild('secondCard') second_card: any;
  @ViewChild('topCard') top_card: any;
  @ViewChild('thirdCard') third_card: any;
  @ViewChild('fourthCard') fourth_card: any;

  @ViewChild('imageInput') imageInput: any;

  imageUploaded: File | null = null;
  animationFinished: boolean = false;

  uploadedImage: File | null = null;

  prediction: string = '';

  constructor(private apiService: ApiServiceService) {}

  testApi(_: any) {
    this.apiService.testApi().subscribe((res: any) => {
      console.log(res);
    });
  }

  async ngAfterViewInit(): Promise<void> {
    const cards: any[] = [
      this.first_card,
      this.second_card,
      this.top_card,
      this.third_card,
      this.fourth_card,
    ];

    this.imageInput.nativeElement.addEventListener('change', (e: any) => {
      const image: File = e.target.files[0];

      this.imageUploaded = image;

      this.apiService.postImage(image).subscribe((res: any) => {
        if (res.status === 200 && res.body.prediction) {
          this.prediction = res.body.prediction;
        } else if (res.status === 200) {
          console.log(res);
          this.prediction = 'No prediction';
        } else {
          this.prediction = 'Something went wrong!';
        }
      });
    });

    while (true) {
      if (!this.imageUploaded) {
        await new Promise((r) => setTimeout(r, 1000));
        rotateCards(cards);
      } else {
        // TODO: This should be changed when the API returns the prediction
        for (let i = 1000; i > 200; i -= 100) {
          await new Promise((r) => setTimeout(r, i));
          rotateCards(cards);
        }

        for (let i = 0; i < 25; i++) {
          await new Promise((r) => setTimeout(r, 150));
          rotateCards(cards);
        }
        shrinkCards(cards);
        for (let i = 0; i < 25; i++) {
          await new Promise((r) => setTimeout(r, 150));
          if (i == 3) {
            this.animationFinished = true;
          }
        }

        break;
      }
    }
  }
}

function shrinkCards(cards: any[]) {
  cards.forEach((card: any) => {
    card.nativeElement.classList.remove('big-card');
    card.nativeElement.classList.add('small-card');
  });
}

function rotateCards(cards: any[]) {
  const classes: any = {
    0: 'first-card',
    1: 'second-card',
    2: 'top-card',
    3: 'third-card',
    4: 'fourth-card',
  };

  cards.forEach((card: any) => {
    card = card.nativeElement;
    let i = Number.parseInt(card.dataset.position);

    if (i >= 4) {
      i = 0;
    } else {
      i++;
    }
    if (card.classList.contains('small-card')) {
      card.classList = ['card-image'];
      card.classList.add('small-card');
    } else {
      card.classList = ['card-image'];
      card.classList.add('big-card');
    }
    card.classList.add(classes[i]);

    card.dataset.position = i;
  });
}
