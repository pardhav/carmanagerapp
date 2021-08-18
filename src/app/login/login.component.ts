import { Component, OnInit } from '@angular/core';
import { CarService } from '../car.service';
import { Router } from '@angular/router';
import {Login} from '../login';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit
 {
    userId!: string;
    userPassword!: string;
    userType!: string;
    message: any;
    status = false;
    newPassword!: string;
    login!:Login;
    constructor(private service: CarService,
        private route: Router) { }

    ngOnInit() {
        console.log(this.route.events)
    }


    loginvalidate() {
        this.service.validateLogin(this.userId, this.userPassword, this.userType).subscribe(
            (res) => {
                console.log(res);
                if (res == "success login") {
                    sessionStorage.setItem("userid", this.userId);
                    sessionStorage.setItem("usertype", this.userType);
                    console.log(sessionStorage.getItem("userid"));


                    // if (this.userType == "Customer") 
                    // {
                    //     this.route.navigate(['customer'])
                    // }
                    // else {
                    //     this.route.navigate(['admin'])
                    // }
                }
                else {
                    alert("invalid credentials")
                }

            }

        );
    }


}









