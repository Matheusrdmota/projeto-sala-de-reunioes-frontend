import { RoomService } from './../core/room.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Room } from '../models/room';

@Component({
  selector: 'app-update-room',
  templateUrl: './update-room.component.html',
  styleUrls: ['./update-room.component.css']
})
export class UpdateRoomComponent implements OnInit {
  id!: number;
  room: Room = this.createBlankRoom();
  submitted = false;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private roomService: RoomService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.roomService.getRoom(this.id)
        .subscribe(data => {
          console.log(data);
          this.room = data;
        }, error => console.log(error));
  }

  updateRoom(){
    this.roomService.updateRoom(this.id, this.room)
        .subscribe(data => console.log(data), error => console.log(error));
        this.goToList();
  }

  onSubmit(){
    this.updateRoom();
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
