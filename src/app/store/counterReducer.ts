import { ActionReducer, Action } from '@ngrx/store';

export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const RESET = 'RESET';

export interface CounterState {
	count: number;
	buttonPressed: string;
	pressedCount: number | null;
};

export const initialState: CounterState = {
	count: 0,
	buttonPressed: 'no button pressed!',
	pressedCount: 0
  };

export const getPressedCount = (state: CounterState) => state.pressedCount;

export function counterReducer(state = initialState, action: Action): CounterState {
	console.log('state=', state);
	console.log('action=', action);
	switch (action.type) {
		case INCREMENT:
			return {
				count: state.count + action.payload.amount,
				buttonPressed: action.payload.button,
				pressedCount: state.pressedCount + 1
			};

		case DECREMENT:
		return {
			count: state.count - action.payload.amount,
			buttonPressed: action.payload.button,
			pressedCount: state.pressedCount + 1
		};

		case RESET:
		return {
			count: 0,
			buttonPressed: action.payload.button,
			pressedCount: state.pressedCount + 1
		};

		default:
			return state;
	}
}
