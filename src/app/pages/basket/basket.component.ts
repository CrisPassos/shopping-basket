import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { selectSelectedItens } from 'src/app/shared/store/selectors/product.selector';
import { IAppState } from 'src/app/shared/store/states/app.state';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})
export class BasketComponent implements OnInit {
  basketItens$ = this.store.pipe(select(selectSelectedItens));

  constructor(private store: Store<IAppState>) { }

  ngOnInit(): void {
  }


}
