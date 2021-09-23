import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { OverlayPanel } from 'primeng/overlaypanel';
import { AuthService } from 'src/app/auth/services/auth.service';
import { clearUserInfo, getUserInfo } from 'src/app/redux/actions/user.actions';
import { Login } from 'src/app/shop/models/login.interface';
import { Register } from 'src/app/shop/models/register.interface';

@Component({
  selector: 'app-account-dropdown',
  templateUrl: './account-dropdown.component.html',
  styleUrls: ['./account-dropdown.component.scss'],
})
export class AccountDropdownComponent implements OnInit {
  @ViewChild('op') public op: OverlayPanel;

  public profileForm: FormGroup;

  public loginForm: FormGroup;

  public showOverlayModal: boolean = false;

  public showLoginModal: boolean = false;

  public showRegisterModal: boolean = false;

  public isLogin: boolean;

  public userLogin: string | null;

  constructor(private authService: AuthService, private store: Store) {}

  public ngOnInit(): void {
    this.loginForm = new FormGroup({
      login: new FormControl('you login'),
      password: new FormControl('you password'),
    });

    this.profileForm = new FormGroup({
      firstName: new FormControl('', [
        Validators.required,
        Validators.minLength(2),
      ]),
      lastName: new FormControl('', [
        Validators.required,
        Validators.minLength(2),
      ]),
      login: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
      ]),
    });

    this.authService.isAuth();

    this.userLogin = localStorage.getItem('userLogin');

    this.authService.isLogin$.subscribe((res) => {
      this.isLogin = res;
      if (this.isLogin) {
        this.store.dispatch(getUserInfo());
      }
    });
  }

  public onLogin() {
    this.op.hide();
    this.showOverlayModal = true;
    this.showLoginModal = true;
    document.body.classList.add('scroll-block');
  }

  public onLogout() {
    this.authService.logout();
    this.op.hide();
    this.store.dispatch(clearUserInfo());
  }

  public onRegister() {
    this.showRegisterModal = true;
    this.showLoginModal = false;
    document.body.classList.add('scroll-block');
  }

  public onOverlay(event: Event) {
    if (
      (event.target as HTMLDivElement).classList.contains('overlay-modal') ||
      (event.target as HTMLDivElement).classList.contains('close') ||
      (event.target as HTMLDivElement).classList.contains('pi-times')
    ) {
      this.profileForm.reset();
      this.showOverlayModal = false;
      this.showRegisterModal = false;
      this.showLoginModal = false;
      document.body.classList.remove('scroll-block');
    }
  }

  get firstName() {
    return this.profileForm.get('firstName');
  }

  get lastName() {
    return this.profileForm.get('lastName');
  }

  get login() {
    return this.profileForm.get('login');
  }

  get password() {
    return this.profileForm.get('password');
  }

  public onSubmitLogin() {
    const user: Login = { ...this.loginForm.value };
    this.authService.login(user);
    this.loginForm.reset();
    this.showOverlayModal = false;
    this.showRegisterModal = false;
    this.showLoginModal = false;
    document.body.classList.remove('scroll-block');
    this.userLogin = localStorage.getItem('userLogin');
  }

  public onSubmitProfile() {
    const user: Register = { ...this.profileForm.value };
    this.authService.register(user);
    this.profileForm.reset();
    this.showOverlayModal = false;
    this.showRegisterModal = false;
    this.showLoginModal = false;
    document.body.classList.remove('scroll-block');
    this.userLogin = localStorage.getItem('userLogin');
  }
}
