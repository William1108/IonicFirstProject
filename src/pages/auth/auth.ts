import {Component, OnInit} from "@angular/core";
import {AuthService} from "../../services/auth.service";
import {MenuController, NavController, NavParams} from "ionic-angular";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {TabsPage} from "../tabs/tabs";

@Component({
  selector: 'page-auth',
  templateUrl:'./auth.html'
})

export class AuthPage implements OnInit{

  mode: string;
  authForm: FormGroup;
  errorMessage : string;
  constructor(private authservice : AuthService,
              private  navparam: NavParams,
              private menuCtrl: MenuController,
              private formBuilder:FormBuilder,
              private navCtrl:NavController){

  }

  ngOnInit(){
    this.mode=this.navparam.get('mode');
    this.initForm();
  }
  onToggleMenu(){
    this.menuCtrl.open();
  }
  initForm() {
    this.authForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  onSubmitForm(){
    const email = this.authForm.get('email').value;
    const password = this.authForm.get('password').value

    if(this.mode === 'new'){
      this.authservice.signUpUser(email,password).then(
        ()=>{
          this.navCtrl.setRoot(TabsPage)
        }).catch((error)=>
      {
          this.errorMessage=error;
      });
    }else if (this.mode === 'connect'){
      this.authservice.signInUser(email,password).then(
        ()=>{
          this.navCtrl.setRoot(TabsPage)
        }).catch((error)=>
      {
        this.errorMessage=error;
      });
    }
  }
}
