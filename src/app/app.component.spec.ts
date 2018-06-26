import { ContatoComponent } from './contato/contato.component';
import { FotosComponent } from './fotos/fotos.component';
import { NormasComponent } from './normas/normas.component';
import { ProximosRituaisComponent } from './proximos-rituais/proximos-rituais.component';
import { InscreverComponent } from './inscrever/inscrever.component';
import { AboutComponent } from './about/about.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
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
      imports: [ RouterTestingModule ]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app');
  }));
  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Instituto Servidores da Luz');
  }));
});
