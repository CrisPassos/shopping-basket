import { AddItem, GetProducts } from './../../shared/store/action/product.action';
import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';

import { IProduct } from '../../shared/models/product';
import { IAppState } from './../../shared/store/states/app.state';
import { selectProduct } from './../../shared/store/selectors/product.selector';
import { ProductActionsTypes } from 'src/app/shared/store/action/product.action';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.scss']
})
export class ShoppingComponent implements OnInit {

  products$ = this.store.pipe(select(selectProduct));
  show = false;

  constructor(private store: Store<IAppState>) {
  }

  ngOnInit(): void {
    this.store.dispatch(new GetProducts());
  }

  protected addItem(item: IProduct) {
    this.store.dispatch(new AddItem(item));
    this.show = true;

    setTimeout(() => {
      this.show = false;
    }, 2000);
  }

}
