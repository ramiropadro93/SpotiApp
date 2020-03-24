import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) { }

  public servidor = 'https://api.spotify.com/v1/';
  public token = 'BQAzqzBt0W6E3CkDdpQ-p-ysHH63Lbo0hvRy9o_iahur1zTd5XZNsoZTUbSQM0zBecvmSobQKZMNlryOqeg';
  // public getToken(){
  //   const params = new HttpParams().set('grant_type','client_credentials')
  //                                  .set('client_id', '1043f7a6257c4a26a6e2a1991b90f1e0')
  //                                  .set('client_secret', '3ab9112f5d454586a052050d529bfbe5');
  //   return this.http.post('https://accounts.spotify.com/api/token',{params})
  // }

  public getQuery( query: string) {
    const headers =  new HttpHeaders({
      'Authorization':   'Bearer ' +
                          this.token
    });

    const url = this.servidor + query;
    return this.http.get(url , {headers});
  }

  public getNewReleases() {

    return this.getQuery('browse/new-releases')
                .pipe(map(data => data['albums'].items));
  }

  public getArtistas(termino: string) {
    return this.getQuery('search?q=' + termino + '&type=artist&limit=15')
                .pipe(map( data =>  data['artists'].items ));
  }

  public getArtista( id: string) {
    return this.getQuery('artists/' + id);
  }

  public getTopTracks( id: string) {
    return this.getQuery('artists/' + id + '/top-tracks?country=us')
                .pipe( map ( data => data['tracks']));
  }
}
