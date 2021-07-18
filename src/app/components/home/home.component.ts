import { Component } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'  
})
export class HomeComponent{

  nuevasCanciones: any[] = [];
  loading: boolean;

  error:boolean = false;
  mensajeError : string;

  constructor(private spotifyService: SpotifyService) { 

    this.loading = true;
    
    this.spotifyService.getNewReleases()
      .subscribe( data =>{
        this.nuevasCanciones = data;
        this.loading = false;
      }, ( errorServicio )=>{
        this.error = true;
        this.loading = false;
        this.mensajeError = errorServicio.error.error.message;
      });    

  }

  

}
