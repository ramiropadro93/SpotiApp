import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  public artistas: any[] = [];
  public loading: boolean;
  error: boolean = false;
  errorMessage: string;

  constructor(private spotify: SpotifyService) {
   }

  buscar(termino: any) {
    this.loading = true;
    this.spotify.getArtistas(termino).subscribe((data: any) => {
      this.artistas = data;
      this.loading = false;
    }, (errorServicio) => {
      this.error = true;
      this.errorMessage = errorServicio.error.error.message;
    });
  }

}
