import { ChangeDetectionStrategy, Component, OnDestroy, OnInit, effect, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs/internal/Subscription';
import { User, UserService } from 'src/app/services/user.service';
import { interval } from 'rxjs';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit, OnDestroy {

  userListSubscription!:Subscription;
  
  userId = 10;
  users = signal<User[]>([]);

  constructor(private userService: UserService){
    effect(() => {
      console.log('users:', this.users());
    }
  )
  }

  ngOnInit(): void {
      this.userListSubscription = this.userService.getUsers().subscribe((data:User[])=>{
        this.users.set(data);
      })
  }

  addUser(name:string,email:string):void{
    this.users.update((users:User[])=>{
      const user = {
        id: ++this.userId,
        name,
        email
      }
      return [...users,user];
    })
  }

  removeUser(id: number | undefined) {
    this.users.update((users) => users.filter((u) => u.id !== id));
  }

  updateUser(id: number | undefined) {
    
    this.users.mutate((users) => {
      const index:number = users.findIndex((user:User)=>user.id === id)
      users[index].name = "Changed Name";
      users[index].email = "Changed Email";
    });
  }

  ngOnDestroy(): void{
    if(typeof this.userListSubscription !== "undefined"){
      this.userListSubscription.unsubscribe();
    }
  }

}
