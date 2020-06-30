import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ReservaConsultorioPage } from './reserva-consultorio.page';

describe('ReservaConsultorioPage', () => {
  let component: ReservaConsultorioPage;
  let fixture: ComponentFixture<ReservaConsultorioPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReservaConsultorioPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ReservaConsultorioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
