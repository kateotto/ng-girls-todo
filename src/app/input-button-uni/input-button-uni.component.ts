import { Component, OnInit, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-input-button-uni",
  template: `
    <input
    class="todo-input"
    #inputElementRef
    [value]="title"  
    (keyup.enter)="submitValue($event.target.value)"/>

    <button class="btn" (click)="submitValue(inputElementRef.value)">Save</button>
    <br/>
  `,
  styleUrls: ["./input-button-uni.component.css"]
})
export class InputButtonUniComponent implements OnInit {
  title = "Hello world";
  constructor() {}

  ngOnInit() {
  }

  submitValue(newTitle:string){
    this.submit.emit(newTitle);
  }

  @Output() submit: EventEmitter<string> = new EventEmitter();
 
}
