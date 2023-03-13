import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TensorSpacePageComponent } from './tensor-space-page.component';

describe('TensorSpacePageComponent', () => {
  let component: TensorSpacePageComponent;
  let fixture: ComponentFixture<TensorSpacePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TensorSpacePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TensorSpacePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
