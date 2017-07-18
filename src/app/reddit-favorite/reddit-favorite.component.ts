import { Component, OnInit } from '@angular/core';
declare var jquery:any;
declare var $ :any;

import { RedditService } from '../reddit.service';

@Component({
  selector: 'app-reddit-favorite',
  templateUrl: './reddit-favorite.component.html',
  styleUrls: ['./reddit-favorite.component.css']
})
export class RedditFavoriteComponent implements OnInit {
  favorites:any= null || [];
  favorite:any;
  date:any;
  seconds:any;
  minutes:any;
  hours:any;
  days:any;
  constructor(private redditservice: RedditService) {
    this.favorites = this.redditservice.pushToFavorites();
    this.favorite = this.getFavorite();
  }

  ngOnInit() {

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

   getFavorite(){
     if(this.favorites.length > 1) return true;
     return false;
   }


    onHover(id, reddit){
        $("#"+id+"").removeClass('hidden');
        $("#"+id+"").addClass('delete');
        $("#"+id+"").addClass('animated bounceInLeft');

    }


     onMouseLeave(id){
       $("#"+id+"").removeClass('animated bounceInLeft');
       $("#"+id+"").addClass('hidden');
   }

     onClick(id, reddit){
       let index = this.favorites.indexOf(reddit);
       this.favorites.splice(index, 1);
     }

}
