import { Component, OnInit } from '@angular/core';
import { VersionService } from 'src/app/shared/services/version.service';
import { UtileService } from 'src/app/shared/services/utile.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public title: string;
  public heart$: BehaviorSubject<number>;

  constructor(public vs: VersionService, private us: UtileService) { }  // public car je peux now l' acceder dans le html.

  ngOnInit() {
    this.title = 'Mon appli ng';
    this.heart$ = this.us.heart$;
  }

}
