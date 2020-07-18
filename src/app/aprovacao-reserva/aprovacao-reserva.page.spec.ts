import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AprovacaoReservaPage } from './aprovacao-reserva.page';

describe('AprovacaoReservaPage', () => {
  let component: AprovacaoReservaPage;
  let fixture: ComponentFixture<AprovacaoReservaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AprovacaoReservaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AprovacaoReservaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
