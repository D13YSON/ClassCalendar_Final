import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AlunoPage } from './aluno.page';

describe('AlunoPage', () => {
  let component: AlunoPage;
  let fixture: ComponentFixture<AlunoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AlunoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
