import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListEspaciosComponent } from './list-espacios.component';

describe('ListEspaciosComponent', () => {
  let component: ListEspaciosComponent;
  let fixture: ComponentFixture<ListEspaciosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListEspaciosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListEspaciosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
