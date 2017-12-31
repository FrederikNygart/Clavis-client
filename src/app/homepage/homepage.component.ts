import { LockOwnerService } from './../services/lock-owner.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  public owners: ILockOwner[] = [];

  constructor(private lockOwners: LockOwnerService) { }

  ngOnInit() {
    this.getLockOwners();
    console.log('users: ', this.owners);
  }

  getLockOwners() {
    this.lockOwners.GetLockOwners().subscribe((lockOwners: any[]) => {
      console.log('lockowrs: ', lockOwners);
      lockOwners.forEach(
        (owner, i) => {
          this.owners.push({
            id: owner.LockOwnerId,
            lockGroups: owner.LockGroups
          });
        });
    });
  }
}

interface ILockOwner {
  id: string;
  lockGroups: any;
}
