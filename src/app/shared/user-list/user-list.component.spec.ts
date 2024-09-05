import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserListComponent } from './user-list.component';

describe('Suite UserListComponent', () => {
  let fixture: ComponentFixture<UserListComponent>;
  let componentUserList: UserListComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserListComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(UserListComponent);
    componentUserList = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(componentUserList).toBeTruthy();
  });

});
