import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProfessorDetalhePage } from './professor-detalhe.page';

describe('ProfessorDetalhePage', () => {
  let component: ProfessorDetalhePage;
  let fixture: ComponentFixture<ProfessorDetalhePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ProfessorDetalhePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
