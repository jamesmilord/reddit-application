import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { RedditService } from './reddit.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  count:any=null;

  constructor(private redditService: RedditService, private router: Router) {
    this.count = this.redditService.getFavoritesCount();
    console.log(this.count);
}

ngOnInit() {
  this.router.navigate(['/']);

}


}
