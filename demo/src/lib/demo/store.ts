import { signalStore, withState } from '@ngrx/signals';

import { inject } from '@angular/core';
import { BOOKS_STATE } from './book.token';

export const BooksStore = signalStore(withState(() => inject(BOOKS_STATE)));
