// src/app/app.component.ts
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { app } from './firebase.config';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'finance-tracker';
  items: any[] = [];

  async ngOnInit() {
    const db = getFirestore(app);
    const querySnapshot = await getDocs(collection(db, 'items'));
    querySnapshot.forEach((doc) => {
      this.items.push(doc.data());
    });
  }
}
