import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AlunoDetalhePage } from './aluno-detalhe.page';

describe('AlunoDetalhePage', () => {
  let component: AlunoDetalhePage;
  let fixture: ComponentFixture<AlunoDetalhePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AlunoDetalhePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
