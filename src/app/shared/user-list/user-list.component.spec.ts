import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserListComponent } from './user-list.component';
import { UserService } from '../../core/service/user.service';
import { of } from 'rxjs';
import { DebugElement } from '@angular/core';
import { UserItemComponent } from '../user-item/user-item.component';

const userServiceMock = {
  getUser: jest.fn(),
};

// Datos de prueba
const mockUsers = {
  users: [
    { id: 1, username: 'User 1' },
    { id: 2, username: 'User 2' }
  ]
};

describe('Suite UserListComponent', () => {
  let fixture: ComponentFixture<UserListComponent>;
  let componentUserList: UserListComponent;
  let el: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserListComponent, UserItemComponent], // Para standalone components
      providers: [
        { provide: UserService, useValue: userServiceMock },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(UserListComponent);
    componentUserList = fixture.componentInstance;
    el = fixture.debugElement;
    userServiceMock.getUser.mockReturnValue(of(mockUsers)); // Mock de la llamada a getUser
  });

  it('should create the app', () => {
    expect(componentUserList).toBeTruthy();
  });

  it('should call getUser on ngOnInit', () => {
    const spy = jest.spyOn(userServiceMock, 'getUser');
    componentUserList.ngOnInit();
    expect(spy).toHaveBeenCalled();
  });

  it('should render title', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h2')?.textContent).toContain(
      'Listado de usuarios'
    );
  });

});
