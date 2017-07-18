import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class RedditService {
  http:any;
  url:string;
  favorites=[];
  favoritesCounts:number;

  constructor(http:Http) {
    this.http = http;
    this.url = 'https://www.reddit.com/r';
  }

  fetchposts(subrerdit, limit){
    return this.http.get(this.url+'/'+subrerdit+'/top.json?limit='+limit)
      .map(res => res.json());
  }

  addToFavorites(reddit) {
    function contains(arr, value) {
    var i = arr.length;
    while (i--) {
        if (arr[i] === value) return true;
    }
    return false;
    }

    if(!contains(this.favorites, reddit)){
      this.favorites.push(reddit);
      this.favoritesCounts = this.favorites.length;
    }
  }

  getFavoritesCount(){
    return this.favoritesCounts;
  }

  pushToFavorites(){
    return this.favorites;
  }

}
