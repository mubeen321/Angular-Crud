import { Component, OnInit, ViewChild } from '@angular/core';
import { AppInitService } from '../app-init.service';
import { AppModule } from '../app.module';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-app-init',
  templateUrl: './app-init.component.html',
  styleUrls: ['./app-init.component.css']
})
export class AppInitComponent implements OnInit {

  @ViewChild('matTable') matTable;

  displayedColumns: string[] = ['id', 'login' ,'node_id', 'url','action'];

  items :  any = [];
  userdata;

  constructor(private data: AppInitService, private item: AppModule, private data2: CommonService) { }

  ngOnInit(): void {
    this.data.init().then(data => {
      this.items = data
    }); 

    this.data2.getUsers().subscribe(el => {
      console.log("><><>< : ",el);
      this.userdata = el;
      
    })

  }

  deleteRecord(i: number){
    this.items.splice(i,1);
    this.matTable.renderRows();
  }

}
