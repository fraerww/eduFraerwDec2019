import { Component, OnInit } from '@angular/core';
import { VersionService } from 'src/app/shared/services/version.service';
import { UtileService } from 'src/app/shared/services/utile.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  constructor(public vs: VersionService, private us: UtileService) { }

  ngOnInit() {
  }

  public upgradeVersion() {
    this.vs.versionUpgrade();
  }

  public upgradeUtile() {
    this.us.utilUpgrade();
  }

  public heartUpgrade(){
    this.us.upgrade();
  }

}
