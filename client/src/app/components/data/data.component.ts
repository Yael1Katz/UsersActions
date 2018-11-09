import { Component, OnInit } from '@angular/core';
import { ActionsService } from '../../services/actions.service';
import { User } from '../../models/user.model';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {
  users: Array<User>;

  constructor(private actionsService: ActionsService, private dataService: DataService) {
  }

  ngOnInit() {
    this.users = this.actionsService.getUsersWithActions();
  }

  syncData() {
    this.dataService.insertNewData(this.actionsService.getUsersWithActions()).toPromise()
      .then(() => {
        this.dataService.getAllData().toPromise()
          .then((data) => {
            this.users = data;
            this.actionsService.clearLocalStorage();
          }).catch((err) => {
            console.error(err);
          });
      })
      .catch((err) => {
        console.error(err);
      });
  }
}
