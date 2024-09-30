import { InjectionToken } from '@angular/core';
import { Model } from '@test/demo/test';

export const BOOKS_STATE = new InjectionToken<Model.BooksState>('BooksState', {
  factory: () => Model.initialState,
});
