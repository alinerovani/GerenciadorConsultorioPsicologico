import { Component, OnInit } from '@angular/core';
import { ClinicRoom, Category } from 'src/app/models/clinicRoom';
import { ApiService } from 'src/app/services/api.service';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-list-consultorios',
  templateUrl: './list-consultorios.component.html',
  styleUrls: ['./list-consultorios.component.scss'],
})
export class ListConsultoriosComponent implements OnInit {

  rooms: ClinicRoom[];

  constructor(private apiService: ApiService, private router: Router) {
    this.rooms = [];
  }

  ngOnInit() {
    this.getRooms();
  }
  
  getCategoryRoom(room: ClinicRoom) {
    return Category[room.category];
  }

  getRooms() {
    this.apiService.getConsultorios()
      .subscribe(response => {
        this.rooms = response;
      })
  }

  openFormConsultorio(index: number) {
    let navigationExtras: NavigationExtras = { state: { clinic_room: this.rooms[index] } };
    this.router.navigate(['/consultorio'], navigationExtras);
  }

}
