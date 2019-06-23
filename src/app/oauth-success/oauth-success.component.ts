import { Component, OnInit } from '@angular/core';
import { InstagramService } from '../services/instagram.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-oauth-success',
  templateUrl: './oauth-success.component.html',
  styleUrls: ['./oauth-success.component.scss']
})
export class OauthSuccessComponent implements OnInit {

  constructor(
    private instagramServices: InstagramService,
    private activatedRoute: ActivatedRoute
  ) { }
  token:string;
  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(p => {
      console.log(p);
      
      this.token = p.code;
    })
  }
  getAccess(){
    this.instagramServices.getAccess(this.token).subscribe(data => {
      console.log(data);
    })
    
     
  }
}
