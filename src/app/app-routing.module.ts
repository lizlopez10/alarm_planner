import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'registrar',
    loadChildren: () => import('./registrar/registrar.module').then( m => m.RegistrarPageModule)
  },
  {
    path: 'calendario',
    loadChildren: () => import('./calendario/calendario.module').then( m => m.CalendarioPageModule)
  },
  {
    path: 'nueva-tarea',
    loadChildren: () => import('./nueva-tarea/nueva-tarea.module').then( m => m.NuevaTareaPageModule)
  },
  {
    path: 'lista-tareas',
    loadChildren: () => import('./lista-tareas/lista-tareas.module').then( m => m.ListaTareasPageModule)
  },
  {
    path: 'editar-tarea',
    loadChildren: () => import('./editar-tarea/editar-tarea.module').then( m => m.EditarTareaPageModule)
  },
  {
    path: 'ver-tarea',
    loadChildren: () => import('./ver-tarea/ver-tarea.module').then( m => m.VerTareaPageModule)
  },
  {
    path: 'lista-categorias',
    loadChildren: () => import('./lista-categorias/lista-categorias.module').then( m => m.ListaCategoriasPageModule)
  },
  {
    path: 'nueva-categoria',
    loadChildren: () => import('./nueva-categoria/nueva-categoria.module').then( m => m.NuevaCategoriaPageModule)
  },
  {
    path: 'editar-categoria',
    loadChildren: () => import('./editar-categoria/editar-categoria.module').then( m => m.EditarCategoriaPageModule)
  },
  {
    path: 'ver-categoria',
    loadChildren: () => import('./ver-categoria/ver-categoria.module').then( m => m.VerCategoriaPageModule)
  },
  {
    path: 'ver-alarma',
    loadChildren: () => import('./ver-alarma/ver-alarma.module').then( m => m.VerAlarmaPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
