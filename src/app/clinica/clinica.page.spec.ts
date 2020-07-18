import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ClinicaPage } from './clinica.page';

describe('ClinicaPage', () => {
  let component: ClinicaPage;
  let fixture: ComponentFixture<ClinicaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClinicaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ClinicaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
