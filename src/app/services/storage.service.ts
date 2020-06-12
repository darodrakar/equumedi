import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  public store = [
    {
      name: 'test1'
    },
    {
      name: 'test2'
    }
  ]

  constructor() { }

  public add(){

  }


}
