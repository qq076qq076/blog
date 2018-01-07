import { Injectable } from '@angular/core';
import { DataService } from '../data.service';

@Injectable()
export class UserService {
  constructor(private DataServicer: DataService) {}
}
