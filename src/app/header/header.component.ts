import { Component, OnInit } from '@angular/core';
import { TranslateService } from '../shared/translate.service';
import { TranslateSyncService } from '../shared/translate-sync.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor(
    private translateService: TranslateService,
    private translateSyncService: TranslateSyncService
  ) {}

  ngOnInit() {}
  onUseLanguage(lang: string) {
    this.translateService.use(lang);
    this.translateSyncService.sync();
  }
}
