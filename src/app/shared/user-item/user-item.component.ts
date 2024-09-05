import { Component, input } from '@angular/core';
import { UsersNs } from '../../core/interfaces/users/users.ns';

@Component({
  selector: 'app-user-item',
  standalone: true,
  imports: [],
  templateUrl: './user-item.component.html',
  styleUrl: './user-item.component.css'
})
export class UserItemComponent {
  dataUser = input<UsersNs.ItemI>();
}
