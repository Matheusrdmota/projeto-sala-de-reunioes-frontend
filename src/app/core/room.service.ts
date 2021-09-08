import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Room } from '../models/room';

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  private baseUrl = 'http://localhost:8080/api/v1/rooms';

  constructor(private http: HttpClient) { }

  getRoom(id: number): Observable<any>{
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  getRoomList(): Observable<any>{
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
