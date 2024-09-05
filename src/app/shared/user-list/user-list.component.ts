import { Component, inject, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { UserItemComponent } from '../user-item/user-item.component';
import { UserService } from '../../core/service/user.service';
import { UsersNs } from '../../core/interfaces/users/users.ns';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [AsyncPipe, UserItemComponent],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent implements OnInit {
  userService = inject(UserService);
  users$!:Observable<UsersNs.AllI>;

  ngOnInit(): void {
    this.users$ = this.userService.getUser();
  }
}
