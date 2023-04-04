import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-excel-data',
  templateUrl: './excel-data.component.html',
  styleUrls: ['./excel-data.component.css']
})
export class ExcelDataComponent implements OnInit {

  dataSource = [];
  dataSource2 = [];

  fileName= 'Github_Data.xlsx';

  displayedColumns: string[] = ['id', 'login', 'node_id', 'url','type'];
  // displayedColumns2: string[] = ['id','Name','Number','Address'];

  constructor(
    private aRoute: ActivatedRoute, 
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.getExcelData();
  }

  getExcelData(){
    this.aRoute.data.subscribe( res => {
      res.excelData.excelData.subscribe( result => {
        console.log("result : " , result);        
        this.dataSource = result;
      })

      res.excelData.excelData2.subscribe( result => {
        console.log("excelData2 : ",result);       
        this.dataSource2 = result; 
      })
    })
  }
  // *** json-to-sheet will download the whole data from api ***
  // *** table-to-sheet will download the data i.e. being displayed in table only ***

  // let element = document.getElementById('excel-table');

  exportExcel()
  {
    const ws: XLSX.WorkSheet =XLSX.utils.json_to_sheet(this.dataSource);
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

    XLSX.writeFile(wb, this.fileName);
  }
  // const ws2: XLSX.WorkSheet =XLSX.utils.json_to_sheet(this.dataSource2);
  // const wb2: XLSX.WorkBook = XLSX.utils.book_new();
  // XLSX.utils.book_append_sheet(wb2, ws2, 'Sheet2');
}
