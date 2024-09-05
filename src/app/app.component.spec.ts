import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

let fixture: ComponentFixture<AppComponent>;

describe('Suite AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(AppComponent);
  });

  it('should create the app', () => {
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'angular-testing-with-jest'`, () => {
    const app = fixture.componentInstance;
    expect(app.title).toEqual('angular-testing-with-jest');
  });

  it('should render title', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain(
      'angular-testing-with-jest'
    );
  });
});
