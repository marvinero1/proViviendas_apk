import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'splash', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'mapa', loadChildren: './mapa/mapa.module#MapaPageModule' },
  { path: 'splash', loadChildren: './splash/splash.module#SplashPageModule' },
  { path: 'log-in', loadChildren: './log-in/log-in.module#LogInPageModule' },
  { path: 'pais-provincia', loadChildren: './pais-provincia/pais-provincia.module#PaisProvinciaPageModule' },
  { path: 'vista1', loadChildren: './vista1/vista1.module#Vista1PageModule' },
  { path: 'perfil-empresa', loadChildren: './perfil-empresa/perfil-empresa.module#PerfilEmpresaPageModule' },
  { path: 'perfil-contacto', loadChildren: './perfil-contacto/perfil-contacto.module#PerfilContactoPageModule' },
  { path: 'perfil-corredor', loadChildren: './perfil-corredor/perfil-corredor.module#PerfilCorredorPageModule' },
  { path: 'mi-cuenta', loadChildren: './mi-cuenta/mi-cuenta.module#MiCuentaPageModule' },
  { path: 'mis-favoritos', loadChildren: './mis-favoritos/mis-favoritos.module#MisFavoritosPageModule' },
  { path: 'mis-corredores', loadChildren: './mis-corredores/mis-corredores.module#MisCorredoresPageModule' },
  { path: 'siguiendo', loadChildren: './siguiendo/siguiendo.module#SiguiendoPageModule' },
  { path: 'contactanos', loadChildren: './contactanos/contactanos.module#ContactanosPageModule' },
  { path: 'publicaciones-corredor', loadChildren: './publicaciones-corredor/publicaciones-corredor.module#PublicacionesCorredorPageModule' },
  { path: 'destacados', loadChildren: './destacados/destacados.module#DestacadosPageModule' },
  { path: 'empresa-publicaciones', loadChildren: './empresa-publicaciones/empresa-publicaciones.module#EmpresaPublicacionesPageModule' },
  { path: 'demanda', loadChildren: './demanda/demanda.module#DemandaPageModule' },
  { path: 'estadisticas', loadChildren: './estadisticas/estadisticas.module#EstadisticasPageModule' },
  { path: 'corredor-contacto', loadChildren: './corredor-contacto/corredor-contacto.module#CorredorContactoPageModule' },
  { path: 'home-tabs', loadChildren: './home-tabs/home-tabs.module#HomeTabsPageModule' },
  { path: '', loadChildren: './home-tabs/home-tabs.module#HomeTabsPageModule' },
  { path: 'corredor-tabs', loadChildren: './corredor-tabs/corredor-tabs.module#CorredorTabsPageModule' },
  { path: '', loadChildren: './corredor-tabs/corredor-tabs.module#CorredorTabsPageModule' },
  { path: 'inmobiliaria-tabs', loadChildren: './inmobiliaria-tabs/inmobiliaria-tabs.module#InmobiliariaTabsPageModule' },
  { path: '', loadChildren: './inmobiliaria-tabs/inmobiliaria-tabs.module#InmobiliariaTabsPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }