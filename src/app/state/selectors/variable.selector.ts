import { createSelector, createFeatureSelector } from '@ngrx/store';
import { AppState } from '../app.state';

export const selectVariable = createFeatureSelector<AppState, string>('variable');
