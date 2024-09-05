import { Component } from '@angular/core';
import { UserListComponent } from '../../shared/user-list/user-list.component';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [UserListComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

}
