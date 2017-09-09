import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { User } from '../models/user';

@Injectable()
export class DataService {
    public user = new User();

    public messageSource = new BehaviorSubject(this.user);
    currentMessage = this.messageSource.asObservable();

    constructor() {
        this.user.Name = "Haisenberg";
    }

    changeMessage(user: User) {
        this.messageSource.next(user)
    }

}