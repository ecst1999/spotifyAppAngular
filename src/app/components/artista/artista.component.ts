import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html'
})
export class ArtistaComponent {

  artista: any = {};
  loading: boolean;
  topTracks: any[] = [];

  constructor(private activatedRoute: ActivatedRoute,
    private spotify: SpotifyService) {

    this.loading = true;

    this.activatedRoute.params.subscribe(params => {      
      this.getArtista(params['id']);
      this.getTopTrack(params['id']);
    });


  }

  getArtista(id: string) {
    this.spotify.getArtista(id)
      .subscribe(res => {
        this.artista = res;
        this.loading = false;
      });
  }

  getTopTrack(id: string)
  {
    this.spotify.getTopTracks(id)
      .subscribe(resp =>{     
        console.log(resp);   
        this.topTracks = resp;
        this.loading = false;
      });
  }


}
