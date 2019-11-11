import { Component, OnInit } from '@angular/core';
import { TranslateService } from '../translate.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor(private translateService: TranslateService) {
    console.log(this.translateService.data);
  }

  ngOnInit() {}
  onUseLanguage(lang: string) {
    this.translateService.use(lang);
  }
}
