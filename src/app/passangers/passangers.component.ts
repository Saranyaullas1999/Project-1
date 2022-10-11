import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-passangers',
  templateUrl: './passangers.component.html',
  styleUrls: ['./passangers.component.css']
})
export class PassangersComponent implements OnInit {

  constructor(private myapi:ApiService) {
    this.fetchPass()
   }

  fetchPass=()=>{
    this.myapi.passAll().subscribe(
      (data)=>{
        this.passData=data
      }
    )
  }

  passData:any={}

  ngOnInit(): void {
  }

}
