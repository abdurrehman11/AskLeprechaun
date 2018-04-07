import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../services/admin.service';
import { FilterPipe } from '../../filter.pipe';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users;
  userId;
  enableButton;
  message;
  messageClass;

  constructor(
    private adminService: AdminService
  ) { }

  getAllUsers() {
    this.adminService.getAllUsers().subscribe(data => {  
      this.users = data.users;
      console.log(this.users);
      //console.log(this.users[0].username);
    });
  }

  

  ngOnInit() {
    this.getAllUsers();
  }

  blockUser(event, id) {
    this.userId = id;
    this.adminService.blockUser(id).subscribe(data => {
      if(!data.success) {
        this.message = data.message;
        this.messageClass = 'alert alert-danger';
      } else {
        console.log('blocked');
        this.message = data.message;
        this.messageClass = 'alert alert-success';
        setTimeout(() => {
          this.getAllUsers();
        }, 1000);
      }
    })
  }

  unblockUser(event, id) {
    this.userId = id;
    this.adminService.unblockUser(id).subscribe(data => {
      if(!data.success) {
        this.message = data.message;
        this.messageClass = 'alert alert-danger';
      } else {
        console.log('unblocked');
        this.message = data.message;
        this.messageClass = 'alert alert-success';
        setTimeout(() => {
          this.getAllUsers();
        }, 1000);
      }
    })
  }

  // delete user
  deleteUser(event, id) {
    this.adminService.deleteUser(id).subscribe(data => {
      if(!data.success) {
        this.message = data.message;
        this.messageClass = 'alert alert-danger';
      } else {
        console.log('deleted');
        this.message = data.message;
        this.messageClass = 'alert alert-success';
        setTimeout(() => {
          this.getAllUsers();
        }, 1000);
      }
    });
  }

  

}
