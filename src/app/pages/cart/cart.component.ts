import { IProduct } from './../../shared/models/product';
import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { RemoveItem, SumItems } from 'src/app/shared/store/action/product.action';
import { selectAmount, selectSelectedItens } from 'src/app/shared/store/selectors/product.selector';
import { IAppState } from 'src/app/shared/store/states/app.state';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cartItens$ = this.store.pipe(select(selectSelectedItens));
  amount = this.store.pipe(select(selectAmount));

  constructor(private store: Store<IAppState>) { }

  ngOnInit(): void {
    this.store.dispatch(new SumItems());
  }

  removeItem(item: IProduct): void {
    this.store.dispatch(new RemoveItem(item));

    this.store.dispatch(new SumItems());
  }

}
