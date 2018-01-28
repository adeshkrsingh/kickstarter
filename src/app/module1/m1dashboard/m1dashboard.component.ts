import { Component, OnInit, HostListener } from '@angular/core';
import { ApiconnectionService } from '../../services/apiconnection.service';

@Component({
  selector: 'app-m1dashboard',
  templateUrl: './m1dashboard.component.html',
  styleUrls: ['./m1dashboard.component.css']
})
export class M1dashboardComponent implements OnInit {
  pageDataEndStatus: boolean;
  x = 0;
  arrowkeyLocation = 0;
  searchingValue: any;
  showSuggestion: boolean;
  searchData: any[];
  Displaydata: any[];
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
      this.counterposition = this.counterposition + (finish - start) ;
      this.showSecondaryLoader = false;
    }, 100);
    if (this.counterposition == this.resultdata.length ) { this.pageDataEndStatus = true; }
  }

  getfiltered(search1, propert) {
    this.Displaydata = [];
    this.searchData = [];
    let searchstr = search1;
    let str = '';
    if (searchstr === '') {
      this.Displaydata = this.projectData;
    } else {
      for (let index = 0; index < this.resultdata.length; index++) {
        if (propert === 'name') {
          str = this.resultdata[index]['title'];
        } else if (propert === 'location') {
          str = this.resultdata[index]['location'];
        } else {
          str = this.resultdata[index].title;
        }
       
        if (str !== undefined) {
          str = str.toLowerCase();
          searchstr = searchstr.toLowerCase();
          const searchStartposition = str.search(searchstr);
          // console.log(searchStartposition);
          if (searchStartposition >= 0) {
            // this.data[index] = result[index];
            this.Displaydata.push(this.resultdata[index]);
            if (this.searchData.length < 10 && this.showSuggestion === true) {
              this.searchData.push(str);
            }
          }
        }

      }
      this.showSuggestion = true;
    }
    // console.log(this.Displaydata );
    this.projectData = this.Displaydata;
  }

  submitSearchForm(myform) {
    const s = myform.value.search;
    this.searchingValue = s;
    const k = myform.value.opt;
    this.getfiltered(s, k);
  }

  mydataSelect(search, option, indexposition) {
    search.value = this.searchData[indexposition];
    this.getfiltered(this.searchData[indexposition], option );
    this.searchData = [];
    this.showSuggestion = false;
  }

  getFilteredValue() {
    //
  }

  keyDown(event: KeyboardEvent) {
    switch (event.keyCode) {
      case 38: // this is the ascii of arrow up
        if(this.arrowkeyLocation !== 0) {
          const i = document.getElementById('Suggestion' + this.arrowkeyLocation);
          i.setAttribute('style', 'background-color:');
        }
        
        if (this.arrowkeyLocation > 1) {
          this.arrowkeyLocation--;
          const i = document.getElementById('Suggestion' + this.arrowkeyLocation);
          i.setAttribute('style', 'background-color:#ced4da');
        } else {
          this.arrowkeyLocation = 10;
          const i = document.getElementById('Suggestion' + this.arrowkeyLocation);
          i.setAttribute('style', 'background-color:#ced4da');
        }
        
        break;
      case 40: // this is the ascii of arrow down
        if (this.arrowkeyLocation !== 0) {
          const i = document.getElementById('Suggestion' + this.arrowkeyLocation);
          i.setAttribute('style', 'background-color:');
        }
        
        if(this.arrowkeyLocation < 10 ) {
          this.arrowkeyLocation++;
          const j = document.getElementById('Suggestion'+this.arrowkeyLocation);
          j.setAttribute('style', 'background-color:#fed8da');
        } else {
          this.arrowkeyLocation = 1;
          const j = document.getElementById('Suggestion' + this.arrowkeyLocation);
          j.setAttribute('style', 'background-color:#fed8da');
        }
        
        break;
    }
  }

  getSortedValue(value) {
    this.SortedValue(value);
    // this.SortedValue('percentage.funded');
  }


  SortedValue(keyparameter) {
    // tslint:disable-next-line:prefer-const
    let copyd = this.projectData;
    let temp = [];
    for (let index = 0; index < copyd.length; index++) {
      for (let index2 = index; index2 < copyd.length; index2++) {
        if (copyd[index][keyparameter] !== undefined && copyd[index2][keyparameter] !== undefined) {
          if (copyd[index2][keyparameter] > copyd[index][keyparameter]) {
            temp = copyd[index];
            copyd[index] = copyd[index2];
            copyd[index2] = temp;
          }
        }
      }
    }
    this.projectData = copyd;
  }

  @HostListener('document:click', [])
  onDocumentClicked() {
    if (this.showSuggestion === true) {
      this.arrowkeyLocation = 0;
      this.searchData = [];
    }
  }

  onScroll() {
    if (this.projectData.length > 0 ) {
      console.log('scrolled!!');
      this.addMoreData();
    }
    
  }

}
