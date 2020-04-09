import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireObject } from '@angular/fire/database';
import { map } from 'rxjs/operators';
import { Product } from 'shared/models/Product';
import { Observable } from 'rxjs';
import { AngularFireModule } from '@angular/fire';

@Injectable({
  providedIn: 'root'
})
export class ProductAddService {

  constructor(private db:AngularFireDatabase) { }

  save(product)
  {
    return this.db.list('/products').push(product);
  }

getAll()
{
  return this.db.list('/products').snapshotChanges().pipe(
    map(changes =>  changes.map(c=>({key : c.payload.key , ...c.payload.val() as Product}))
    ))
}

get(productId):AngularFireObject<Product>
{
  return this.db.object('/products/'+productId);
}



update(productId,product)
{
return this.db.object('/products/'+ productId).update(product);
}

delete(productId)
{
  return this.db.object('/products/'+productId).remove();
}


}
