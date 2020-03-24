import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  public nuevasCanciones: any[] = [];
  loading: boolean;
  error: boolean = false;
  errorMessage: string;

  constructor( private spotify: SpotifyService) {
    this.loading = true;
    this.spotify.getNewReleases().subscribe((data: any) => {
      this.nuevasCanciones = data;
    }, (errorServicio) => {
      console.log(errorServicio.error.error.message);
      this.error = true;
      this.errorMessage = errorServicio.error.error.message;
    });
    this.loading = false;
  }
}
