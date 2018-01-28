import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { HostListener } from '@angular/core';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  suggestionBoxOpen: boolean;
  mySubscription: any;
  searchData = [];
  loadedData: any;
  toggleMenu: boolean;

  // constructor(private http: Http) { }

  ngOnInit() {
    this.toggleMenu = false;
    // this.mySubscription = this.http.get('../../../assets/data.json')
    //                 .map(res => res.json()).subscribe(data => {
    //                   this.loadedData = data;
    //                 });
  }
  searchform(f) {
    this.suggestionBoxOpen = true;
    let searchstr = f.value;
    let str = '';
    this.searchData = [];
    for (let index = 0; index < this.loadedData.length; index++) {
      str = this.loadedData[index].blurb;
      if (str !== undefined) {
        str = str.toLowerCase();
        searchstr = searchstr.toLowerCase();
        const x = str.search(searchstr);
        if (x >= 0) {
          if (this.searchData.length < 10) {
            this.searchData.push(str);
          }
        }
      }
    }
    this.searchData.reverse();
  }
  mydataSelect(searchbox, j) {
    this.suggestionBoxOpen = false;
    searchbox.value = this.searchData[j];
    this.searchData = [];
  }

  // @HostListener('window:scroll', [])
  // onWindowScroll() {
  //   alert('scrolled');
  // }

  mobileResponsiveNavBar(event: MouseEvent, tMenu: any) {
    if (this.toggleMenu === false) {
      tMenu.setAttribute('class', 'expand navbar-collapse');
      this.toggleMenu = true;
    } else {
      tMenu.setAttribute('class', 'collapse navbar-collapse');
      this.toggleMenu = false;
    }
  }

  @HostListener('document:click', [])
  onDocumentClicked() {
    if (this.suggestionBoxOpen === true) {
      this.suggestionBoxOpen = false;
      this.searchData = [];
    }
    // alert('clicked');
  }

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnDestroy() {
    try {
      this.mySubscription.unsubscribe();
    } catch (error) { }
  }
}
