import { Injectable } from "@angular/core";
import { urls } from "../../../../../../src/app/common/constants/apiList";
import { URL } from "src/app/common/models/login";
import { ApiService } from "../api.service";


@Injectable({
  providedIn: "root",
})
export class ManageInfoService {
  url: URL = {} as URL;

  constructor(private api: ApiService) {}

  getTypeOfIllness() {
    this.url = urls.getTypeOfIllness();
    return this.api.get(this.url.endPoint);
  }

 

}
