import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TecnicoDetalhePage } from './tecnico-detalhe.page';

describe('TecnicoDetalhePage', () => {
  let component: TecnicoDetalhePage;
  let fixture: ComponentFixture<TecnicoDetalhePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TecnicoDetalhePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
