import { Component, OnInit } from '@angular/core';
import { VersionService } from 'src/app/shared/services/version.service';
import { UtileService } from 'src/app/shared/services/utile.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  public heart$: BehaviorSubject<number>;
  public tab$: BehaviorSubject<number[]>;
  constructor(public vs: VersionService, private us: UtileService) { }

  ngOnInit() {
    this.heart$ = this.us.heart$;
    this.tab$ = this.us.tab$;
  }

}
