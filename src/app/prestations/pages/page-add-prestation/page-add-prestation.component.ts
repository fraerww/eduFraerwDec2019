import { Component, OnInit, Input } from '@angular/core';
import { PrestationsService } from '../../services/prestations.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page-add-prestation',
  templateUrl: './page-add-prestation.component.html',
  styleUrls: ['./page-add-prestation.component.scss']
})
export class PageAddPrestationComponent implements OnInit {


  constructor(
    private ps: PrestationsService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {

  }

  public add(item: any){
    this.ps.add(item).subscribe((res) => {
      console.log(res);
      // redirection classiq
      //this.router.navigate(['prestations']);
      // redirecction relative paar rapport à la route ou vous êtes
      this.router.navigate(['../'], {relativeTo: this.route});
    });
  }

}
