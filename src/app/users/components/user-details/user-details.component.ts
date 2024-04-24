import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})

export class UserDetailsComponent implements OnInit {
  id :any;
  data: any = [];
  support: any={}; 
  loading: boolean = false;
  
  constructor(private route:ActivatedRoute , private service:UserService) {
    this.id = this.route.snapshot.paramMap.get('id'); 
    // console.log(this.id);

  }

  ngOnInit():void{
    this.getUser();
  }

  getUser(){
    this.loading = true; //!spinner
    this.service.getUsersById(this.id).subscribe(
      (res :any)=>{
        this.loading = false; //!spinner
        this.data=res.data;
        this.support=res.support;
        // console.log(res);
      },
      (err:any)=>{
        this.loading = false;//!spinner
        alert(err);
        // console.log("Error" + err)
      }
    );}

}
