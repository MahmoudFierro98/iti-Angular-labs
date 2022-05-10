import { Component, EventEmitter, Input, Output, OnChanges, OnInit, SimpleChanges } from '@angular/core';


@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnInit, OnChanges {

  @Input('rate') rate = 0;
  width = 0;

  @Output() rateclicked: EventEmitter<number> = new EventEmitter<number>();

  constructor() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.width = this.rate * (75 / 5);
  }

  rateFunc() {
    this.rateclicked.emit(this.rate);
  }
  ngOnInit(): void {
  }

}
