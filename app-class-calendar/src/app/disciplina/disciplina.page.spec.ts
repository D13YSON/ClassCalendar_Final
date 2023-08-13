import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DisciplinaPage } from './disciplina.page';

describe('DisciplinaPage', () => {
  let component: DisciplinaPage;
  let fixture: ComponentFixture<DisciplinaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DisciplinaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
