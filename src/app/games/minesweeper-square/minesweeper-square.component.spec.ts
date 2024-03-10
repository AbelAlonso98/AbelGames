import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinesweeperSquareComponent } from './minesweeper-square.component';

describe('MinesweeperSquareComponent', () => {
  let component: MinesweeperSquareComponent;
  let fixture: ComponentFixture<MinesweeperSquareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MinesweeperSquareComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MinesweeperSquareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
