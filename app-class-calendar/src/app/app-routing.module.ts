import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'materia',
    loadChildren: () => import('./materia/materia.module').then( m => m.MateriaPageModule)
  },
  {
    path: 'agendamento',
    loadChildren: () => import('./agendamento/agendamento.module').then( m => m.AgendamentoPageModule)
  },
  {
    path: 'perfil',
    loadChildren: () => import('./perfil/perfil.module').then( m => m.PerfilPageModule)
  },
  {
    path: 'professor',
    loadChildren: () => import('./professor/professor.module').then( m => m.ProfessorPageModule)
  },
  {
    path: 'menu',
    loadChildren: () => import('./menu/menu.module').then( m => m.MenuPageModule)
  },
  {
    path: 'cadastro',
    loadChildren: () => import('./cadastro/cadastro.module').then( m => m.CadastroPageModule)
  },
  {
    path: 'professor-detalhe',
    loadChildren: () => import('./professor-detalhe/professor-detalhe.module').then( m => m.ProfessorDetalhePageModule)
  },
  {
    path: 'aluno',
    loadChildren: () => import('./aluno/aluno.module').then( m => m.AlunoPageModule)
  },
  {
    path: 'tecnico',
    loadChildren: () => import('./tecnico/tecnico.module').then( m => m.TecnicoPageModule)
  },
  {
    path: 'aluno-detalhe',
    loadChildren: () => import('./aluno-detalhe/aluno-detalhe.module').then( m => m.AlunoDetalhePageModule)
  },
  {
    path: 'tecnico-detalhe',
    loadChildren: () => import('./tecnico-detalhe/tecnico-detalhe.module').then( m => m.TecnicoDetalhePageModule)
  },
  {
    path: 'disciplina',
    loadChildren: () => import('./disciplina/disciplina.module').then( m => m.DisciplinaPageModule)
  },
  {
    path: 'horario',
    loadChildren: () => import('./horario/horario.module').then( m => m.HorarioPageModule)
  }




];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
