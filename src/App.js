import React from 'react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import DataTableContainer from './features/DataTable/DataTableContainer';
import dataTableReducer from './features/DataTable/DataTableSlice'; // Import reducer

const store = configureStore({
  reducer: {
    dataTable: dataTableReducer, // Add the reducer to store
    // Add other reducers if any
  },
});

const App = () => {
  return (
    <Provider store={store}>
      <DataTableContainer />
      {/* Other components or containers */}
    </Provider>
  );
};

export default App;
