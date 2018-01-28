import { Component, OnInit, HostListener } from '@angular/core';
import { ApiconnectionService } from '../../services/apiconnection.service';

@Component({
  selector: 'app-m1dashboard',
  templateUrl: './m1dashboard.component.html',
  styleUrls: ['./m1dashboard.component.css']
})
export class M1dashboardComponent implements OnInit {
  showLoader: boolean;
  showSecondaryLoader: boolean;
  resultdata: any;
  mySubscription: any;
  projectData = [];
  counterposition = 0;

  constructor(private api: ApiconnectionService) { }

  ngOnInit() {
    // this.api.getData('').subscribe( (data) => {
    //    this.projectData = data; console.log(data); console.log(this.projectData );
    //   });
    // console.log(this.api.hitcounter() );
    this.mydata();
  }

  public mydata() {
    this.showLoader = true;
    setTimeout(() => {
      this.mySubscription = this.api.getData('').subscribe(result => {

        this.resultdata = result;
        // console.log(result);
        if(result.length > 10) { this.counterposition = 10 ;}
        for (let index = 0; index < this.counterposition; index++) {
          if (index > 0) {
             this.projectData.push(result[index]);
            // console.log(result[index]);
            // this.datacopy.push(result[index]);
          }
        }
        // this.data = result;
        // console.log(result);
      });
       this.showLoader = false;
    }, 3000);
  }
  

  addMoreData() {
    this.showSecondaryLoader = true;
    setTimeout(() => {
      let start = this.counterposition;
      let finish = ( (this.counterposition + 10 ) < this.resultdata.length) ? (this.counterposition + 10) : this.resultdata.length ;
      for (let index = start; index < finish; index++) {
          this.projectData.push(this.resultdata[index]);
          // console.log(result[index]);
      }
      this.counterposition = this.counterposition + 10 ;
      this.showSecondaryLoader = false;
    }, 2500);
    
  }

}
