import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) { }

  getQuery(query: string) {

    const url = `https://api.spotify.com/v1/${ query }`;

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQB3VYepBjmbTRr7xKkcw92DM32mBFVLJQ51x0QlIklde5elndraLTqxt9dmU2yke0Ydnl51-5p395Lov-o'
    });

    return this.http.get(url, {headers});

  }

  getNewReleases() {

    return this.getQuery('browse/new-releases')
      .pipe(map(data => data['albums'].items));
  }


  getArtistas(termino: string) {

    return this.getQuery(`search?q=${termino}&type=artist&limit=15`)
      .pipe(map(data => data['artists'].items));          

  }

  getArtista(id: string) {

    return this.getQuery(`artists/${id}`);      

  }

  getTopTracks(id: string){

    return this.getQuery(`artists/${id}/top-tracks?market=ec`)
        .pipe(map(data => data['tracks']));            
  }

}
