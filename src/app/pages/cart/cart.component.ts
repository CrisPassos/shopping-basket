import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { SumItems } from 'src/app/shared/store/action/product.action';
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
    this.amountItems();
  }

  amountItems(): void {
    // this.cartItens$.subscribe(i => {
    //   debugger
    //   let sum: number;
    //   i.forEach(p => sum = sum + p.price);

    //   this.amount = sum;
    // })
  }


}
