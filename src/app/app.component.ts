import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, CUSTOM_ELEMENTS_SCHEMA, Component, ContentChild, DoCheck, ElementRef, OnChanges, OnDestroy, OnInit, Renderer2, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DashboardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppComponent implements OnChanges, OnInit, DoCheck,
  AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  title = 'first-app';
  @ContentChild("BHeader", { read: ElementRef }) hRef!: ElementRef;
  @ViewChild("BStatement1", { read: ElementRef }) pStmt1!: ElementRef;
  @ViewChild("BStatement2", { read: ElementRef }) pStmt2!: ElementRef;

  constructor(private renderer: Renderer2) {
    setTimeout(() => {
      this.title = "New Title will be change ASAP.";
    }, 3000);
  }

  ngOnChanges() {
    console.log(">>> Ng On Changes Hit");
  }

  ngOnInit() {
    console.log(">>> Ng On Init Hit");
  }

  ngDoCheck() {
    console.log(">>> Ng Do Check Hit");
  }

  ngAfterContentInit() {
    console.log(">>> Ng After Content Init Hit");
    // this.renderer.setStyle(this.hRef.nativeElement, 'background-color', 'yellow')
  }

  ngAfterContentChecked() {
    console.log(">>> Ng After Content Checked Hit");
    // this.renderer.setStyle(this.hRef.nativeElement, 'background-color', this.randomRGB());
  }

  randomRGB(): string {
    return `rgb(${Math.floor(Math.random() * 256)},
    ${Math.floor(Math.random() * 256)},
    ${Math.floor(Math.random() * 256)})`;
  }

  ngAfterViewInit() {
    console.log(">>> Ng After View Init Hit");
    this.renderer.setStyle(this.pStmt1.nativeElement, 'background-color', 'red');
  }

  ngAfterViewChecked() {
    console.log(">>> Ng After View Checked Hit");
    this.renderer.setStyle(this.pStmt2.nativeElement, 'background-color', this.randomRGB());
  }

  ngOnDestroy() {
    console.log("Goodbye World!");
  }
}
