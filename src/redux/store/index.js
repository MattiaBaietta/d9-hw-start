// Nello store si dichiara la costruzione del Redux Store
import { configureStore } from '@reduxjs/toolkit';
import mainReducer from '../reducers'; // chiamando il file del reducer index.js, questo import punta alla cartella reducers, che per prima cosa va a cercare un file index

const store = configureStore({
	reducer: mainReducer,
});

export default store;