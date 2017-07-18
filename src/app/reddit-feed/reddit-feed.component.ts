import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, DoCheck} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
declare var jquery:any;
declare var $ :any;

import { RedditService } from '../reddit.service';

@Component({
  selector: 'app-reddit-feed',
  templateUrl: './reddit-feed.component.html',
  styleUrls: ['./reddit-feed.component.css'],

})
export class RedditFeedComponent implements OnInit {
  @ViewChild('hearticon') icon: ElementRef;
  reddits:any;
  date:any;
  seconds:any;
  minutes:any;
  hours:any;
  days:any;
  thumbnail:any;
  id:any;
  y:any;

  constructor(private redditservice: RedditService, private router: Router, icon: ElementRef) {

  }

  ngOnInit() {
      this.getreddits('food', 10);

  }

  getreddits(subrerdit, limit){
    this.redditservice.fetchposts(subrerdit, limit).subscribe(res=>{
      this.reddits = res.data.children;
      console.log(this.reddits);
    });
  }

  getDate(millisec) {

         this.seconds = (millisec / 1000).toFixed(0);

         this.minutes = (millisec / (1000 * 60)).toFixed(0);

        this.hours = (millisec / (1000 * 60 * 60)).toFixed(0);

         this.days = (millisec / (1000 * 60 * 60 * 24)).toFixed(0);

         if (this.seconds < 60) {
             return this.seconds + " Sec";
         } else if (this.minutes < 60) {
             return this.minutes + " Min";
         } else if (this.hours < 24) {
             return this.hours + " Hrs";
         } else {
             return this.days + " Days"
         }
     }

     ngDoCheck(){


     }

     ngAfterViewInit(){

     }


     onHover(id, reddit){

       if (!$("#"+id+"")[0].classList.contains('favorite')){
         $("#"+id+"").removeClass('hidden');
         $("#"+id+"").addClass('select');
         $("#"+id+"").addClass('animated bounceInLeft');
       }
     }



     onMouseLeave(id){

     if (!$("#"+id+"")[0].classList.contains('favorite')){
       $("#"+id+"").removeClass('animated bounceInLeft');
       $("#"+id+"").addClass('hidden');
     }


     }

     onClick(id, reddit){
      $("#"+id+"").removeClass('select');
      $("#"+id+"").removeClass('animated bounceInLeft');
      $("#"+id+"").addClass('favorite');
      $("#"+id+"").addClass('animated bounceInLeft');
      this.redditservice.addToFavorites(reddit);
      console.log(this.redditservice.getFavoritesCount())
     }



}
