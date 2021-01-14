import { Component } from '@angular/core';
import{ GifsServiceService } from 'src/app/Service/gifs-service.service'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  results:any;
  constructor(private gifsservice:GifsServiceService) {}

  /**loadGifs Function Takes input the search term and passes it to getGifs fuction from gifs-service module and stores the result in results variable */
  loadGifs(searchTerm:string){
    this.gifsservice.getGifs(searchTerm).subscribe(data =>{
      this.results=data['data'];
      console.log(this.results)
    })
  }

  /**To input search value from search bar*/

  _ionChange(event){
    this.loadGifs(event.detail.value)

  }
}
