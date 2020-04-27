import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  scatterData: any = {
    1: ["18", "2", "6", "0"],
    2: ["3", "3", "13", "1"],
    3: ["1", "1", "2", "0"],
    4: ["14", "24", "15", "0"],
    dates: ["2020-04-24", "2020-04-25", "2020-04-26", "2020-04-27"]
  }

  slMapData = {1: "0", 2: "3", 3: "4", 4: "0", 5: "13", 6: "2", 7: "25", 8: "0", 9: "2", 10: "25", 11: "5", 12: "3", 13: "1", 14: "4", 15: "2", 16: "18", 17: "3", 18: "0", 19: "0", 20: "0", 21: "0", 22: "3", 23: "0", 24: "0", 25: "0", "": "2"};

  constructor() { }

  getDotGraphDataDashboard() {
    let promise = new Promise((resolve, reject) => {
      console.log();
      resolve({data : this.scatterData});
    });

    return promise;

  }

  getSlMapData() {
    let promise = new Promise((resolve, reject) => {
      console.log();
      resolve({data : this.slMapData});
    });

    return promise;

  }
}
