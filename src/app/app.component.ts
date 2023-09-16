import {Component, OnInit} from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Countdown-Timer-Pipe';
  dueDate = '2023-11-30T00:00:00' // Also, Works with YYYY-MM-DDTHH:mm:ss.msz date format.
  pauseTimerSubject = new BehaviorSubject<boolean>(false);
  isPaused = false;

  ngOnInit(): void {
    this.pauseTimerSubject.subscribe(v => {
      this.isPaused = v;
    })
  }

  pauseTime() {
    this.pauseTimerSubject.next(true);
  }

  resumeTime() {
    this.pauseTimerSubject.next(false);
  }


}
