import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TecnicoPage } from './tecnico.page';

describe('TecnicoPage', () => {
  let component: TecnicoPage;
  let fixture: ComponentFixture<TecnicoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TecnicoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
