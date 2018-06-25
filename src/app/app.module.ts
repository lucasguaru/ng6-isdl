import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';
import { InscreverComponent } from './inscrever/inscrever.component';
import { ProximosRituaisComponent } from './proximos-rituais/proximos-rituais.component';
import { NormasComponent } from './normas/normas.component';
import { FotosComponent } from './fotos/fotos.component';
import { ContatoComponent } from './contato/contato.component';
import { ContentfulService } from './service/contentful.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    AboutComponent,
    InscreverComponent,
    ProximosRituaisComponent,
    NormasComponent,
    FotosComponent,
    ContatoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ContentfulService],
  bootstrap: [AppComponent]
})
export class AppModule { }
