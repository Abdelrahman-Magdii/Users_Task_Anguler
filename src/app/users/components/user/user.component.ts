import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  @Input() data:any=[];
  loading: boolean = false; //!spinner
  
  Users : User[]=[];
  filteredUsers: any[] = [];

  constructor(private service:UserService){}

ngOnInit():void{
  this.getUsers();
}


  getUsers(){
    this.loading = true; //!spinner
    this.service.getAllUsers().subscribe(
      (res :any)=>{
        this.loading = false; //!spinner
        this.data=res.data;
        this.Users=res.data;
        this.filteredUsers=res.data;
        // console.log(res);

    },
    (err:any)=>{
      this.loading = false; //!spinner
      alert(err);
    }
  );}

  onSearchUserId(userId: any): void {
    const id = parseInt(userId.data, 10); // Parse userId.data to a number
    // console.log(id);
    // console.log(this.Users[id-1]);
    if(isNaN(id) || id != this.Users[id-1].id || id == undefined){
      this.filteredUsers = this.Users;
      
    }else {
    this.filteredUsers = this.Users.filter(u => u.id === id);
    }

  }

}
