import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-airlines',
  templateUrl: './airlines.component.html',
  styleUrls: ['./airlines.component.css']
})
export class AirlinesComponent implements OnInit {

  constructor(private myapi:ApiService) {
    this.fetchAir()
   }

  fetchAir=()=>{
    this.myapi.airAll().subscribe(
      (data)=>{
        this.airData=data
      }
    )
  }

  airData:any=[]

  ngOnInit(): void {
  }

}
