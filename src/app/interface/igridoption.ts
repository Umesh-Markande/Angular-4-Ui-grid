export interface IGridoption {
    enableFiltering: boolean,
    showGridFooter: boolean,
    showColumnFooter: boolean,
    enableSorting: boolean,
    treeRowHeaderAlwaysVisible: boolean,
    enableGridMenu: boolean,
    paginationPageSizes: number[],
    paginationPageSize: number,
    headerCellClass: IGridHeaderCellClass,
    enableColumnResizing:boolean,
    width: boolean,
    exporterMenuPdf: boolean,
    exporterMenuCsv: boolean,
    exporterMenuExcel: boolean,
    columnDefs:IGridColumnDefs[]
}

export enum IGridHeaderCellClass {
    white = <any>"white",
    black = <any>"black",
    red = <any>"red"
}

export interface IGridColumnDefs {
    field:string;
    width:number;
    cellTemplate:string;
    displayName:string;
    enableSorting:boolean;
}
