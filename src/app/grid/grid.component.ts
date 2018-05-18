import { Component, OnInit } from '@angular/core';
import { IGridColumnDefs, IGridoption } from '../interface/igridoption';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {

  employee:any;
  gridOptions:IGridoption;

  ngOnInit(){

    setTimeout(()=>{
      this.employee =  [{
        "ID": 1,
        "Name": "Kevin",
        "City": "Santa Clara",
        "Address": "Longmen",
        "Designation": "VP Marketing"
      }, {
        "ID": 2,
        "Name": "Tina",
        "City": "São Bartolomeu",
        "Address": "Bojongloa",
        "Designation": "Computer Systems Analyst III"
      }, {
        "ID": 3,
        "Name": "Kevin",
        "City": "Cilolohan",
        "Address": "Tai’an",
        "Designation": "Paralegal"
      }, {
        "ID": 4,
        "Name": "Rebecca",
        "City": "Runović",
        "Address": "Tessaoua",
        "Designation": "Human Resources Manager"
      }, {
        "ID": 5,
        "Name": "Nancy",
        "City": "Merritt",
        "Address": "Yur’yevets",
        "Designation": "Assistant Manager"
      }, {
        "ID": 6,
        "Name": "Anne",
        "City": "Pio Duran",
        "Address": "Kuala Lumpur",
        "Designation": "Sales Representative"
      }, {
        "ID": 7,
        "Name": "Scott",
        "City": "Xiamao",
        "Address": "Banjarmasin",
        "Designation": "Computer Systems Analyst II"
      }, {
        "ID": 8,
        "Name": "Howard",
        "City": "Rzeczenica",
        "Address": "Nanyo",
        "Designation": "Recruiting Manager"
      }, {
        "ID": 9,
        "Name": "Frances",
        "City": "Tubuhue",
        "Address": "Rambatan",
        "Designation": "Senior Quality Engineer"
      }, {
        "ID": 10,
        "Name": "Bruce",
        "City": "Gandi",
        "Address": "Manuel Roxas",
        "Designation": "Senior Financial Analyst"
      }, {
        "ID": 11,
        "Name": "Victor",
        "City": "Liuhou",
        "Address": "Sambirejo",
        "Designation": "Actuary"
      }, {
        "ID": 12,
        "Name": "Phillip",
        "City": "Fubei",
        "Address": "Ulset",
        "Designation": "Account Representative II"
      }, {
        "ID": 13,
        "Name": "Cheryl",
        "City": "Chasŏng",
        "Address": "Otok",
        "Designation": "Mechanical Systems Engineer"
      }, {
        "ID": 14,
        "Name": "Arthur",
        "City": "Shimodate",
        "Address": "Morada Nova",
        "Designation": "Payment Adjustment Coordinator"
      }, {
        "ID": 15,
        "Name": "Jean",
        "City": "Mojo",
        "Address": "Pushkino",
        "Designation": "Budget/Accounting Analyst II"
      }, {
        "ID": 16,
        "Name": "Russell",
        "City": "Qīrah",
        "Address": "Vista Hermosa",
        "Designation": "Research Assistant III"
      }, {
        "ID": 17,
        "Name": "Larry",
        "City": "Garoua Boulaï",
        "Address": "Guanchi",
        "Designation": "Office Assistant I"
      }, {
        "ID": 18,
        "Name": "Kathleen",
        "City": "Thongwa",
        "Address": "Awilega",
        "Designation": "Social Worker"
      }, {
        "ID": 19,
        "Name": "Michael",
        "City": "Hongqi",
        "Address": "Karatau",
        "Designation": "Electrical Engineer"
      }, {
        "ID": 20,
        "Name": "Anna",
        "City": "Xiacang",
        "Address": "K Bang",
        "Designation": "Product Engineer"
      }];
  
      this.gridOptions = <IGridoption>{}
      this.gridOptions.exporterMenuPdf = true;
      this.gridOptions.columnDefs = [];
      Object.keys(this.employee[0]).map((key, index) => {
        let gridColumnDefs = <IGridColumnDefs>{}
        gridColumnDefs.field = key;
        gridColumnDefs.cellTemplate = "<div class='ui-grid-cell-contents tooltip-uigrid' title='{{COL_FIELD}}'><a>{{COL_FIELD CUSTOM_FILTERS}}</a></div>"
        this.gridOptions.columnDefs.push(gridColumnDefs);
      });
      let gridColumnDefs = <IGridColumnDefs>{}
      gridColumnDefs.field = 'edit';
      gridColumnDefs.enableSorting = false;
      gridColumnDefs.cellTemplate = "<div class='ui-grid-cell-contents tooltip-uigrid' title='edit'><a href='JavaScript:Void(0);' ng-click='grid.appScope.editEmployee(row.entity);'>edit</a></div>"
      this.gridOptions.columnDefs.push(gridColumnDefs);
    },2000)
    
  }

  onEditFunction = ($event) =>{
    console.log($event);
    alert('City: '+$event.City+', Designation: '+$event.Designation+', ID: '+$event.ID+', Name: '+$event.Name)
  }

}
