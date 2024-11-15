import { createAction, props } from '@ngrx/store';

export const changeVariable = createAction(
    '[Variable Component] Change Variable',
    props<{ newVariable: string }>()
);
