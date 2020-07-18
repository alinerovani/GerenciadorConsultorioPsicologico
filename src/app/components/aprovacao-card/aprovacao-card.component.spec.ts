import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AprovacaoCardComponent } from './aprovacao-card.component';

describe('AprovacaoCardComponent', () => {
  let component: AprovacaoCardComponent;
  let fixture: ComponentFixture<AprovacaoCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AprovacaoCardComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AprovacaoCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
