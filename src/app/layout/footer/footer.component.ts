import { Component, OnInit, Input } from '@angular/core';
import { ThemecolorsService } from '../../services/themecolors.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  @Input() footerBg: String;

  constructor(private theme: ThemecolorsService) { }

  ngOnInit() {
    this.footerBg = this.theme.emmit1.subscribe(res => console.log(res));
    this.theme.applicationLoad();
  }

  set1() {
    this.theme.set_hB('#d35400');
  }
  set2(colour) {
    this.theme.set_hB( colour );
  }

}
