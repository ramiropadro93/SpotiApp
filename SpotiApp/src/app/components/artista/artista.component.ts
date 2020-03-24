import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styleUrls: ['./artista.component.css']
})
export class ArtistaComponent {
  loading: boolean;
  artista: any = {};

  constructor(private router: ActivatedRoute,
              private spotify: SpotifyService) {
    this.loading = true;
    this.router.params.subscribe( params => {
      this.getArtista(params['id']);

    });
  }

  getArtista( id: string){
    this.loading = true;
    this.spotify.getArtista(id).subscribe((data: any) => {
      console.log(data);
      this.artista = data;
      this.loading = false;
    });
  }
}
