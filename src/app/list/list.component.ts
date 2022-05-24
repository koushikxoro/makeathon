import { Component, Input, OnInit } from '@angular/core';
import { ListSchema } from "./list-schema";
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor() { }
  @Input() fields:Array<ListSchema>=[];
  @Input() editAllowed:boolean=true;
  ngOnInit(): void {
  }

}
