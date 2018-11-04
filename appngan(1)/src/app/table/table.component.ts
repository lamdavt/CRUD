import { Component, OnInit } from '@angular/core';

declare interface TableData {
    headerRow: string[];
    dataRows: string[][];
}

@Component({
    selector: 'table-cmp',
    moduleId: module.id,
    templateUrl: 'table.component.html'
})

export class TableComponent implements OnInit{
    public tableData1: TableData;
    public tableData2: TableData;
    ngOnInit(){
        this.tableData1 = {
            headerRow: [ 'ID', 'Question', 'Answer', 'Edit'],
            dataRows: [
                ['1', 'How to implement somthing in Angular', 'I dont know', 'Edit|Remove'],
                ['1', 'How to implement somthing in Angular', 'I dont know', 'Edit|Remove'],
                ['1', 'How to implement somthing in Angular', 'I dont know', 'Edit|Remove'],
                ['1', 'How to implement somthing in Angular', 'I dont know', 'Edit|Remove'],
                ['1', 'How to implement somthing in Angular', 'I dont know', 'Edit|Remove'],
            ]
        };
        this.tableData2 = {
            headerRow: [ 'ID', 'Question', 'Answer', 'Edit'],
            dataRows: [
                ['1', 'How to implement somthing in Angular', 'I dont know', 'Edit|Remove'],
                ['1', 'How to implement somthing in Angular', 'I dont know', 'Edit|Remove'],
                ['1', 'How to implement somthing in Angular', 'I dont know', 'Edit|Remove'],
                ['1', 'How to implement somthing in Angular', 'I dont know', 'Edit|Remove'],
                ['1', 'How to implement somthing in Angular', 'I dont know', 'Edit|Remove'],
            ]
        };
    }
}
