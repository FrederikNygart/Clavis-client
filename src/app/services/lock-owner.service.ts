import { constants } from './../../config/const';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class LockOwnerService {

  constructor(private _http: Http) { }

  GetLockOwners() {
    return this._http
      .get(constants.ClavisService.LockOwnersUrl)
      .map((res: Response) => res.json());
  }
}
