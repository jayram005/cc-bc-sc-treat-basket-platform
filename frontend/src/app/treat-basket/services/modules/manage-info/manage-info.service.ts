import { Injectable } from "@angular/core";
import { urls } from "../../../../../../src/app/common/constants/apiList";
import { URL } from "src/app/common/models/login";
import { ApiService } from "../api.service";


@Injectable({
  providedIn: "root",
})
export class ManageInfoService {
  url: URL = {} as URL;

  constructor(private api: ApiService) { }

  getTypeOfIllness() {
    this.url = urls.typeOfIllness();
    return this.api.get(this.url.endPoint);
  }

  getDeliveredBasketCount() {
    this.url = urls.deliveredBaskets();
    return this.api.get(this.url.endPoint);
  }

  order(orderRequest:any){
    this.url = urls.order();
    return this.api.post(this.url.endPoint,orderRequest);
  }
}