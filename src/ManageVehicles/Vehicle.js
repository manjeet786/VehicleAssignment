import React from 'react';



import {vehicle} from './data.js';
import DataGrid, {
  Editing,
  
  Column,
 
 
HeaderFilter,
  FilterPanel,
  FilterBuilderPopup,
  Scrolling
} from 'devextreme-react/data-grid';
class Vehicle extends React.Component {
  constructor(props) {
    super(props);
    this.state = { events: [] };
    this.logEvent = this.logEvent.bind(this);
    this.onEditingStart = this.logEvent.bind(this, 'EditingStart');
    this.onInitNewRow = this.logEvent.bind(this, 'InitNewRow');
    this.onRowInserting = this.logEvent.bind(this, 'RowInserting');
    this.onRowInserted = this.logEvent.bind(this, 'RowInserted');
    this.onRowUpdating = this.logEvent.bind(this, 'RowUpdating');
    this.onRowUpdated = this.logEvent.bind(this, 'RowUpdated');
    this.onRowRemoving = this.logEvent.bind(this, 'RowRemoving');
    this.onRowRemoved = this.logEvent.bind(this, 'RowRemoved');

  
  }

  logEvent(eventName) {
    this.setState((state) => {
      return { events: [eventName].concat(state.events) };
    });
  }

  
  render() {
    return (
      <React.Fragment>
        <DataGrid
          id="gridContainer"
          dataSource={vehicle}
         
          allowColumnReordering={true}
          
          onEditingStart={this.onEditingStart}
          onInitNewRow={this.onInitNewRow}
          onRowInserting={this.onRowInserting}
          onRowInserted={this.onRowInserted}
          onRowUpdating={this.onRowUpdating}
          onRowUpdated={this.onRowUpdated}
          onRowRemoving={this.onRowRemoving}
          onRowRemoved={this.onRowRemoved}>

          
          <Editing
            mode="row"
            allowUpdating={true}
            allowDeleting={true}
            allowAdding={true} />
        <FilterPanel visible={true} />
        <FilterBuilderPopup position={filterBuilderPopupPosition} />
        <HeaderFilter visible={true} />
        <Scrolling mode="infinite" />
          <Column dataField="name" caption="Vehicles" />
          <Column dataField="color" caption="Color" />
          <Column dataField="size" caption="Size" />
          <Column dataField="brand" caption="Brand" />
          
          
        
          
        </DataGrid>

       
      </React.Fragment>
    );
  }
}
const filterBuilderPopupPosition = {
  of: window,
  at: 'top',
  my: 'top',
  offset: { y: 10 }
};
export default Vehicle;
