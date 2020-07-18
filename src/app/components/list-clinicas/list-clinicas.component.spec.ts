import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListClinicasComponent } from './list-clinicas.component';

describe('ListClinicasComponent', () => {
  let component: ListClinicasComponent;
  let fixture: ComponentFixture<ListClinicasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListClinicasComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListClinicasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
