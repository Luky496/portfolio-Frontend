import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgCircleProgressModule } from 'ng-circle-progress';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LogoAppComponent } from './components/header/logo-app/logo-app.component';
import { SocialComponent } from './components/header/social/social.component';
import { BannerComponent } from './components/header/banner/banner.component';
import { AcercaDeComponent } from './components/acerca-de/acerca-de.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { ModeloComponent } from './components/experiencia/modelo/modelo.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { ModeloEduComponent } from './components/educacion/modelo-edu/modelo-edu.component';
import { SkillsComponent } from './components/skills/skills.component';
import { CirculoComponent } from './components/skills/circulo/circulo.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { ProyectoComponent } from './components/proyectos/proyecto/proyecto.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogoAppComponent,
    SocialComponent,
    BannerComponent,
    AcercaDeComponent,
    ExperienciaComponent,
    ModeloComponent,
    EducacionComponent,
    ModeloEduComponent,
    SkillsComponent,
    CirculoComponent,
    ProyectosComponent,
    ProyectoComponent,
    HomeComponent,
    AdminComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgCircleProgressModule.forRoot({
      // set defaults here
      radius: 120,
      outerStrokeWidth: 8,
      innerStrokeWidth: 0,
      outerStrokeColor: '#78C000',
      innerStrokeColor: '#C7E596',
      animationDuration: 300,
      showTitle: true,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
