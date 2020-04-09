import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class ReadCategoryService {

  constructor(private db:AngularFireDatabase)
   {
   }

   getCategories()
   {
     return this.db.list('/categories',ref => ref.orderByChild('name')).snapshotChanges();
     //this.db.ref('/categories').orderByChild('name').snapshotChanges()
   }
}
