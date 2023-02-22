import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Room } from '../models/room';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  private baseUrl = `http://${environment.API_URL}:8080/api/v1/rooms`;

  constructor(private http: HttpClient) { }

  getRoom(id: number): Observable<any>{
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  getRoomList(): Observable<any>{
    console.log(environment.API_URL);
    return this.http.get(`${this.baseUrl}`);
  }

  createRoom(room: Room): Observable<any>{
    return this.http.post(this.baseUrl, room);
  }

  updateRoom(id: number, value: Room): Observable<any>{
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteRoom(id: number): Observable<any>{
    return this.http.delete(`${this.baseUrl}/${id}`, {responseType: 'text'});
  }

}
