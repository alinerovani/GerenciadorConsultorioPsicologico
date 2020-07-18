import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ConsultorioPage } from './consultorio.page';

describe('ConsultorioPage', () => {
  let component: ConsultorioPage;
  let fixture: ComponentFixture<ConsultorioPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultorioPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ConsultorioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
