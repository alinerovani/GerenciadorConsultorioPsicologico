import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-aprovacao-card',
  templateUrl: './aprovacao-card.component.html',
  styleUrls: ['./aprovacao-card.component.scss'],
})
export class AprovacaoCardComponent implements OnInit {

  @Input() psicologo: string;
  @Input() data: string;

  constructor() { }

  ngOnInit() {}

}
