import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-relatorio-card',
  templateUrl: './relatorio-card.component.html',
  styleUrls: ['./relatorio-card.component.scss'],
})
export class RelatorioCardComponent implements OnInit {

  @Input() name: string;
  @Input() description: string;
  @Input() icon: string;

  constructor() { }

  ngOnInit() {}

}
