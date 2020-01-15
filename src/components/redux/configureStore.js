import { createStore } from 'redux';
import rootReducer from './rootReducer';

export default function configureStore(initialState){
  createStore(rootReducer, initialState);
}
