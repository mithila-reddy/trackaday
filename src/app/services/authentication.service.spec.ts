import { TestBed } from '@angular/core/testing';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { IndividualConfig, ToastrModule, ToastrService } from 'ngx-toastr';
import { environment } from 'src/environments/environment';
import { AuthenticationService } from "./authentication.service";

describe("AuthenticationService", () => {
  let service: AuthenticationService;

  beforeEach(() => {
    const toastrService = {
      success: (message?: string, title?: string, override?: Partial<IndividualConfig>) => { },
      error: (message?: string, title?: string, override?: Partial<IndividualConfig>) => { }
    };

    TestBed.configureTestingModule({
      imports: [
      AngularFireModule.initializeApp(environment.firebase),
    ],
    providers: [
      AngularFireAuth,
      { provide: ToastrService, useValue: toastrService },
      { provide: AngularFireModule }
    ]});
    service = TestBed.inject(AuthenticationService);
  });

  describe('AuthService', () => {
    it('should be created', () => {
      expect(service).toBeTruthy();
    });
  });

  // describe('AuthService', () => {
  //   it('should ...', () => {

  //     service.SignIn("vineethdasi1999@gmail.com","123456");
  //     service.SignUp("vineeth","vineethtest@gmail.com","123456");
  //     service.SignOut();

  //     });
  //   });
});
