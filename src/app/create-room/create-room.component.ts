import { RoomService } from './../core/room.service';
import { Component, OnInit } from '@angular/core';
import { Room } from '../models/room';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-room',
  templateUrl: './create-room.component.html',
  styleUrls: ['./create-room.component.css']
})
export class CreateRoomComponent implements OnInit {

  room: Room = this.createBlankRoom();
  submitted = false;

  constructor(private roomService: RoomService,
              private router: Router) { }

  ngOnInit(): void {

  }

  newRoom(): void{
    this.submitted = false;
    this.room = this.createBlankRoom();
  }

  save() {
    console.log(this.room);

    this.roomService.createRoom(this.room)
        .subscribe((data) => {
          console.log(data);
        },
        (error) => {
          console.log(error);
        });

    this.room = this.createBlankRoom();
    this.goToList();
  }

  onSubmit(){
    this.submitted = true;
    this.save();
  }

  goToList(){
    this.router.navigate(['/rooms']);
  }

  private createBlankRoom(): Room{
    return{
      id: null,
      name: null,
      date: null,
      startHour: null,
      endHour: null,
      active: null,
    } as unknown as Room;
  }

}
