import { Component, OnInit } from '@angular/core';
import { PrestationsService } from '../../services/prestations.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { isNgTemplate } from '@angular/compiler';
import { Prestation } from 'src/app/shared/models/prestation';

@Component({
  selector: 'app-page-edit',
  templateUrl: './page-edit.component.html',
  styleUrls: ['./page-edit.component.scss']
})
export class PageEditComponent implements OnInit {
  itemN$: Observable<Prestation>;
  id: string;


  constructor(private ps: PrestationsService,
              private route: ActivatedRoute,
              private router: Router
    ) { }

  ngOnInit() {
    this.itemN$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => {
        this.id = params.get('id');
        return this.ps.getItemById(params.get('id'));
      }
      )
    );
  }

  public update(item: any) {
    item.id = this.id;
    this.ps.update(item).subscribe((data) => {
      this.router.navigate(['prestations']);
    });
  }

}
