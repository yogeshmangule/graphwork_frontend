/* eslint-disable react-hooks/exhaustive-deps */
// import React, { Component } from 'react';
// import { Link } from 'react-router-dom'
// // import { Card, CardHeader, CardBody, Input, InputGroup, InputGroupAddon, Button } from 'reactstrap';
// import { Card, CardHeader, CardBody, Input, InputGroup, InputGroupText, Button } from 'reactstrap';
// import { confirmAlert } from 'react-confirm-alert';
// import { toast } from 'react-toastify';
// import async from 'async';

// import TextTruncate from 'react-text-truncate';
// import BootstrapTable from 'react-bootstrap-table-next';
// import paginationFactory from 'react-bootstrap-table2-paginator';
// import filterFactory, { textFilter, numberFilter } from 'react-bootstrap-table2-filter';
// import ToolkitProvider, { CSVExport } from 'react-bootstrap-table2-toolkit';

// import EstablishmentsEditor from './Editor';

// import Lang from './languages';
// import Config from './config';

// import 'react-confirm-alert/src/react-confirm-alert.css';
// import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
// import './List.css';

// const { ExportCSVButton } = CSVExport;

// class EstablishmentsList extends Component {
//    constructor(props) {
//       super(props);

//       this.state = {
//          page: 1,
//          data: [],
//          totalSize: 0,
//          sizePerPage: 10,
//          sortField: 'name',
//          editorWindow: false,
//          confirmValue: '',
//          selected: [],
//          selectedEstablishment: null
//       };

//       this.filters = { 'text': {}, 'number': {}, 'date': {} }

//       if (window.innerWidth <= 768) {
//          this.columns = [
//             { dataField: 'name', text: Lang[this.props.session.language].Establishments.columns.name, formatter: (cellContent, row) => { return <Link to={this.props.location.pathname + '/' + row.ID}>{cellContent}</Link> }, sort: true }
//          ]
//       } else {
//          this.columns = [
//             { dataField: 'name', text: Lang[this.props.session.language].Establishments.columns.name, filter: textFilter({ getFilter: (filter) => { this.filters['text'].name = filter } }), formatter: (cellContent, row) => { return <Link to={this.props.location.pathname + '/' + row.ID}>{cellContent}</Link> }, sort: true },
//             { dataField: 'description', text: Lang[this.props.session.language].Establishments.columns.description, filter: textFilter({ getFilter: (filter) => { this.filters['text'].description = filter } }), formatter: (cellContent, row) => { return <TextTruncate line={1} element="span" truncateText="…" text={cellContent.replace(/<[^>]+>/g, '').replace(/\&nbsp;/g, '')} /> }, sort: false },
//             { dataField: 'full_address', text: Lang[this.props.session.language].Establishments.columns.full_address, filter: textFilter({ getFilter: (filter) => { this.filters['text'].full_address = filter } }), sort: false },
//             {
//                dataField: 'ID', text: 'ID', headerStyle: () => { return { width: '108px' } }, headerFormatter: () => (
//                   <Button className="float-right" title="Restablecer filtros" onClick={this.resetFilters}><i className="fa fa-filter"></i>&nbsp;{Lang[this.props.session.language].tableReset}</Button>
//                ), formatter: (cellContent, row) => {
//                   return (
//                      <div className="checkbox disabled">
//                         {
//                            this.props.session.permissions.controllers.establishments.find(el => el == 'update') ?
//                               <Button color="primary" onClick={() => this.openEditor(row.ID)}><i className="fa fa-edit"></i></Button>
//                               : this.props.session.user.ID == row.owner ?
//                                  <Button color="primary" onClick={() => this.openEditor(row.ID)}><i className="fa fa-edit"></i></Button>
//                                  : null
//                         }
//                         {' '}
//                         {
//                            this.props.session.permissions.controllers.establishments.find(el => el == 'delete') ?
//                               <Button color="danger" onClick={() => this.doDelete(row.ID)}><i className="fa fa-trash"></i></Button>
//                               : this.props.session.user.ID == row.owner ?
//                                  <Button color="danger" onClick={() => this.doDelete(row.ID)}><i className="fa fa-trash"></i></Button>
//                                  : null
//                         }
//                      </div>
//                   )
//                }
//             }
//          ]
//       }

//       this.doDelete = this.doDelete.bind(this);

//       this.openEditor = this.openEditor.bind(this);
//       this.closeEditor = this.closeEditor.bind(this);

//       this.resetFilters = this.resetFilters.bind(this);
//       this.handleOnSelect = this.handleOnSelect.bind(this);
//       this.handleOnSelectAll = this.handleOnSelectAll.bind(this);
//       this.handleTableChange = this.handleTableChange.bind(this);
//       this.handleClickDelete = this.handleClickDelete.bind(this);
//    }

//    resetFilters() {
//       Object.keys(this.filters).forEach(type => {
//          Object.keys(this.filters[type]).forEach(key => {
//             var filterFunction = this.filters[type][key];
//             switch (type) {
//                case 'text': filterFunction(''); break;
//                case 'date': filterFunction({ date: new Date(), comparator: '' }); break;
//                case 'number': filterFunction({ number: '', comparator: '' }); break;
//             }
//          });
//       })
//    }

//    handleOnSelect(row, isSelect, rowIndex, e) {
//       if (isSelect) {
//          this.setState({ selected: [...this.state.selected, row.ID] });
//       } else {
//          this.setState({ selected: this.state.selected.filter(x => x !== row.ID) });
//       }
//    }

//    handleOnSelectAll(isSelect, rows, e) {
//       const IDs = rows.map(r => r.ID);
//       if (isSelect) {
//          this.setState({ selected: [...this.state.selected, ...IDs] });
//       } else {
//          this.setState({ selected: this.state.selected.filter((e) => { return IDs.indexOf(e) < 0 }) });
//       }
//    }

//    handleTableChange(type, { page, sizePerPage, filters, sortField, sortOrder }) {
//       this.props.reqAPI(Config.apiURI + '/api/establishments', 'POST', { page, sizePerPage, filters, sortField, sortOrder, language: this.props.session.language }).then(data => {
//          this.setState(() => ({ page, data: data.items, totalSize: data.total, sizePerPage, filters, sortField, sortOrder }));
//       });
//    }

//    handleClickDelete(IDs, onClose) {
//       if (this.state.confirmValue == Lang[this.props.session.language].DeleteConfirmValue) {
//          var jobs = [];
//          var self = this;
//          IDs.map((ID) => {
//             jobs.push(function (callback) {
//                self.props.reqAPI(Config.apiURI + '/api/establishments/' + ID, 'DELETE').then(result => {
//                   callback(false, result);
//                });
//             })
//          })

//          async.parallel(jobs, function (err, results) {
//             onClose();
//             self.setState({ confirmValue: '' }, () => {
//                self.handleTableChange('reload', {
//                   page: self.state.page,
//                   sizePerPage: self.state.sizePerPage,
//                   filters: self.state.filters,
//                   sortField: self.state.sortField,
//                   sortOrder: self.state.sortOrder
//                });
//             })

//             for (var key = 0; key < results.length; key++) {
//                if (results[key].success) toast.success(Lang[self.props.session.language].Establishments.hasBeenDeleted(results[key].name));
//                else toast.error(Lang[self.props.session.language].Establishments.hasNotBeenDeleted(results[key].name), { autoClose: 10000 });
//             }
//          });
//       }
//    }


//    doDelete(ID, error = false) {
//       var IDs = ID === null ? this.state.selected : typeof (ID) === 'object' ? ID : [ID];
//       confirmAlert({
//          customUI: ({ onClose }) => {
//             return (
//                <Card className='confirm-delete alert-danger'>
//                   <CardBody>
//                      <h2>{Lang[this.props.session.language].DeleteConfirmTitle}</h2>
//                      <p>{Lang[this.props.session.language].Establishments.isGoingToDelete(IDs)}</p>
//                      <p><strong>{Lang[this.props.session.language].DeleteConfirmMessage}</strong></p>
//                      <InputGroup>
//                         <Input type="text" placeholder={Lang[this.props.session.language].DeleteConfirmPlaceholder}
//                            onKeyPress={(event) => { if (event.key === 'Enter') this.handleClickDelete(IDs, onClose); }}
//                            onChange={(e) => { this.setState({ confirmValue: e.target.value }); }}
//                            className={error ? 'border border-danger' : ''}
//                         />
//                         {/* <InputGroupAddon addonType="append">
//                            <Button color="danger" onClick={() => { this.handleClickDelete(IDs, onClose); }}>{Lang[this.props.session.language].DeleteConfirmYES}</Button>
//                            <Button color="primary" onClick={onClose}>{Lang[this.props.session.language].DeleteConfirmNO}</Button>
//                         </InputGroupAddon> */}
//                         <InputGroup>
//                            <InputGroupText>
//                               <Button color="danger" onClick={() => { this.handleClickDelete(IDs, onClose); }}>
//                                  {Lang[this.props.session.language].DeleteConfirmYES}
//                               </Button>
//                            </InputGroupText>
//                            <InputGroupText>
//                               <Button color="primary" onClick={onClose}>
//                                  {Lang[this.props.session.language].DeleteConfirmNO}
//                               </Button>
//                            </InputGroupText>
//                         </InputGroup>

//                      </InputGroup>
//                   </CardBody>
//                </Card>
//             );
//          }
//       });
//    }


//    openEditor(ID) {
//       if (ID === null) {
//          this.setState({ selectedEstablishment: null }, function () {
//             this.setState({ editorWindow: true });
//          });
//       } else {
//          this.props.reqAPI(Config.apiURI + '/api/establishments/' + ID + '?full').then(establishment => {
//             this.setState({ selectedEstablishment: establishment }, function () {
//                this.setState({ editorWindow: true });
//             });
//          })
//       }
//    }

//    closeEditor(state) {
//       if (state) toast.success('Los cambios han sido guardados');
//       this.setState({ selectedEstablishment: null, editorWindow: false });
//       this.handleTableChange('reload', {
//          page: this.state.page,
//          sizePerPage: this.state.sizePerPage,
//          filters: this.state.filters,
//          sortField: this.state.sortField,
//          sortOrder: this.state.sortOrder
//       });
//    }

//    componentDidMount() {
//       this.handleTableChange('reload', {
//          page: this.state.page,
//          sizePerPage: this.state.sizePerPage,
//          filters: this.state.filters,
//          sortField: this.state.sortField,
//          sortOrder: this.state.sortOrder
//       });
//    }


//    render() {
//       return (
//          <Card>
//             <ToolkitProvider keyField="ID" data={this.state.data} columns={this.columns} exportCSV>
//                {
//                   props => (
//                      <CardBody>
//                         <ExportCSVButton className="btn btn-primary" {...props.csvProps}>{Lang[this.props.session.language].ExportCSV}</ExportCSVButton>
//                         {' '}
//                         {this.props.session.permissions.controllers.establishments.find(el => el == 'create') ? <Button color="success" onClick={() => this.openEditor(null)}><i className="fa fa-plus"></i> {Lang[this.props.session.language].Establishments.buttons.add}</Button> : null}
//                         {' '}
//                         {this.state.selected.length > 0 ? <Button color="danger" onClick={() => this.doDelete(null)}><i className="fa fa-minus"></i> {Lang[this.props.session.language].Establishments.buttons.delSelected}</Button> : ''}

//                         <BootstrapTable
//                            remote
//                            striped
//                            condensed
//                            bootstrap4
//                            bordered={false}
//                            keyField="ID"
//                            data={this.state.data}
//                            columns={this.columns}
//                            selectRow={{
//                               mode: 'checkbox',
//                               onSelect: this.handleOnSelect,
//                               onSelectAll: this.handleOnSelectAll
//                            }}
//                            defaultSorted={[{
//                               dataField: 'name',
//                               order: 'asc'
//                            }]}
//                            filter={filterFactory()}
//                            pagination={
//                               paginationFactory({
//                                  page: this.state.page,
//                                  sizePerPage: this.state.sizePerPage,
//                                  sizePerPageList: [
//                                     { text: '5', value: 5 },
//                                     { text: '10', value: 10 },
//                                     { text: '25', value: 25 },
//                                     { text: '50', value: 50 },
//                                     { text: '100', value: 100 }
//                                  ],
//                                  showTotal: true,
//                                  totalSize: this.state.totalSize,
//                                  firstPageText: Lang[this.props.session.language].pagination.firstPageText,
//                                  prePageText: Lang[this.props.session.language].pagination.prePageText,
//                                  nextPageText: Lang[this.props.session.language].pagination.nextPageText,
//                                  lastPageText: Lang[this.props.session.language].pagination.lastPageText,
//                                  firstPageTitle: Lang[this.props.session.language].pagination.firstPageTitle,
//                                  nextPageTitle: Lang[this.props.session.language].pagination.nextPageTitle,
//                                  prePageTitle: Lang[this.props.session.language].pagination.prePageTitle,
//                                  lastPageTitle: Lang[this.props.session.language].pagination.lastPageTitle,
//                                  paginationTotalRenderer: (from, to, size) => (
//                                     <span className="react-bootstrap-table-pagination-total" dangerouslySetInnerHTML={{ __html: '&nbsp;' + Lang[this.props.session.language].paginationFooter(from, to, size) + ' ' + Lang[this.props.session.language].Establishments.name }} />
//                                  )
//                               })
//                            }
//                            onTableChange={this.handleTableChange}
//                            noDataIndication={Lang[this.props.session.language].tableEmpty}
//                            {...props.baseProps} />
//                      </CardBody>
//                   )
//                }
//             </ToolkitProvider>

//             <EstablishmentsEditor {...this.props} open={this.state.editorWindow} establishment={this.state.selectedEstablishment} handleClose={this.closeEditor} onComplete={this.closeEditor} />
//          </Card>
//       )
//    }
// }

// export default EstablishmentsList;


// import React, { useState, useEffect, useCallback } from 'react';
// import { Link } from 'react-router-dom';
// import { Card, CardHeader, CardBody, Input, InputGroup, InputGroupText, Button } from 'reactstrap';
// import { confirmAlert } from 'react-confirm-alert';
// import { toast } from 'react-toastify';
// import async from 'async';

// import TextTruncate from 'react-text-truncate';
// import BootstrapTable from 'react-bootstrap-table-next';
// import paginationFactory from 'react-bootstrap-table2-paginator';
// import filterFactory, { textFilter, numberFilter } from 'react-bootstrap-table2-filter';
// import ToolkitProvider, { CSVExport } from 'react-bootstrap-table2-toolkit';

// import EstablishmentsEditor from './Editor';

// import Lang from './languages';
// import Config from './config';

// import 'react-confirm-alert/src/react-confirm-alert.css';
// import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
// import './List.css';

// // const { ExportCSVButton } = CSVExport;

// const EstablishmentsList = (props) => {

//    console.log(props,"props");
//    const [state, setState] = useState({
//       page: 1,
//       data: [],
//       totalSize: 0,
//       sizePerPage: 10,
//       sortField: 'name',
//       editorWindow: false,
//       confirmValue: '',
//       selected: [],
//       selectedEstablishment: null
//    });

//    const filters = { 'text': {}, 'number': {}, 'date': {} };

//    const columns = window.innerWidth <= 768 ? [
//       { dataField: 'name', text: Lang["es_ES"].Establishments.columns.name, formatter: (cellContent, row) => { return <Link to={props.location.pathname + '/' + row.ID}>{cellContent}</Link> }, sort: true }
//    ] : [
//       { dataField: 'name', text: Lang["es_ES"].Establishments.columns.name, filter: textFilter({ getFilter: (filter) => { filters['text'].name = filter } }), formatter: (cellContent, row) => { return <Link to={props.location.pathname + '/' + row.ID}>{cellContent}</Link> }, sort: true },
//       { dataField: 'description', text: Lang["es_ES"].Establishments.columns.description, filter: textFilter({ getFilter: (filter) => { filters['text'].description = filter } }), formatter: (cellContent, row) => { return <TextTruncate line={1} element="span" truncateText="…" text={cellContent.replace(/<[^>]+>/g, '').replace(/\&nbsp;/g, '')} /> }, sort: false },
//       { dataField: 'full_address', text: Lang["es_ES"].Establishments.columns.full_address, filter: textFilter({ getFilter: (filter) => { filters['text'].full_address = filter } }), sort: false },
//       {
//          dataField: 'ID', text: 'ID', headerStyle: () => { return { width: '108px' } }, headerFormatter: () => (
//             <Button className="float-right" title="Restablecer filtros" onClick={resetFilters}><i className="fa fa-filter"></i>&nbsp;{Lang[props.session.language].tableReset}</Button>
//          ), formatter: (cellContent, row) => {
//             return (
//                <div className="checkbox disabled">
//                   {
//                      props.session.permissions.controllers.establishments.find(el => el == 'update') ?
//                         <Button color="primary" onClick={() => openEditor(row.ID)}><i className="fa fa-edit"></i></Button>
//                         : props.session.user.ID == row.owner ?
//                            <Button color="primary" onClick={() => openEditor(row.ID)}><i className="fa fa-edit"></i></Button>
//                            : null
//                   }
//                   {' '}
//                   {
//                      props.session.permissions.controllers.establishments.find(el => el == 'delete') ?
//                         <Button color="danger" onClick={() => doDelete(row.ID)}><i className="fa fa-trash"></i></Button>
//                         : props.session.user.ID == row.owner ?
//                            <Button color="danger" onClick={() => doDelete(row.ID)}><i className="fa fa-trash"></i></Button>
//                            : null
//                   }
//                </div>
//             )
//          }
//       }
//    ];

//    const resetFilters = useCallback(() => {
//       Object.keys(filters).forEach(type => {
//          Object.keys(filters[type]).forEach(key => {
//             var filterFunction = filters[type][key];
//             switch (type) {
//                case 'text': filterFunction(''); break;
//                case 'date': filterFunction({ date: new Date(), comparator: '' }); break;
//                case 'number': filterFunction({ number: '', comparator: '' }); break;
//             }
//          });
//       });
//    }, [filters]);

//    const handleOnSelect = (row, isSelect) => {
//       if (isSelect) {
//          setState(prevState => ({ ...prevState, selected: [...prevState.selected, row.ID] }));
//       } else {
//          setState(prevState => ({ ...prevState, selected: prevState.selected.filter(x => x !== row.ID) }));
//       }
//    };

//    const handleOnSelectAll = (isSelect, rows) => {
//       const IDs = rows.map(r => r.ID);
//       if (isSelect) {
//          setState(prevState => ({ ...prevState, selected: [...prevState.selected, ...IDs] }));
//       } else {
//          setState(prevState => ({ ...prevState, selected: prevState.selected.filter((e) => !IDs.includes(e)) }));
//       }
//    };

//    const handleTableChange = useCallback((type, { page, sizePerPage, filters, sortField, sortOrder }) => {
//       // props.reqAPI(Config.apiURI + '/api/establishments', 'POST', { page, sizePerPage, filters, sortField, sortOrder, language: "es_ES" }).then(data => {
//       //    setState(prevState => ({ ...prevState, page, data: data.items, totalSize: data.total, sizePerPage, filters, sortField, sortOrder }));
//       // });
//    }, [props]);

//    const handleClickDelete = useCallback((IDs, onClose) => {
//       if (state.confirmValue == Lang[props.session.language].DeleteConfirmValue) {
//          const jobs = IDs.map(ID => callback => {
//             props.reqAPI(Config.apiURI + '/api/establishments/' + ID, 'DELETE').then(result => {
//                callback(false, result);
//             });
//          });

//          async.parallel(jobs, (err, results) => {
//             onClose();
//             setState(prevState => ({ ...prevState, confirmValue: '' }));
//             handleTableChange('reload', {
//                page: state.page,
//                sizePerPage: state.sizePerPage,
//                filters: state.filters,
//                sortField: state.sortField,
//                sortOrder: state.sortOrder
//             });

//             results.forEach(result => {
//                if (result.success) toast.success(Lang[props.session.language].Establishments.hasBeenDeleted(result.name));
//                else toast.error(Lang[props.session.language].Establishments.hasNotBeenDeleted(result.name), { autoClose: 10000 });
//             });
//          });
//       }
//    }, [state.confirmValue, props, handleTableChange]);

//    const doDelete = useCallback((ID) => {
//       const IDs = ID === null ? state.selected : Array.isArray(ID) ? ID : [ID];
//       confirmAlert({
//          customUI: ({ onClose }) => (
//             <Card className='confirm-delete alert-danger'>
//                <CardBody>
//                   <h2>{Lang[props.session.language].DeleteConfirmTitle}</h2>
//                   <p>{Lang[props.session.language].Establishments.isGoingToDelete(IDs)}</p>
//                   <p><strong>{Lang[props.session.language].DeleteConfirmMessage}</strong></p>
//                   <InputGroup>
//                      <Input type="text" placeholder={Lang[props.session.language].DeleteConfirmPlaceholder}
//                         onKeyPress={(event) => { if (event.key === 'Enter') handleClickDelete(IDs, onClose); }}
//                         onChange={(e) => { setState(prevState => ({ ...prevState, confirmValue: e.target.value })); }}
//                         className={state.confirmValue ? '' : 'border border-danger'}
//                      />
//                      <InputGroupText>
//                         <Button color="danger" onClick={() => { handleClickDelete(IDs, onClose); }}>
//                            {Lang[props.session.language].DeleteConfirmYES}
//                         </Button>
//                      </InputGroupText>
//                      <InputGroupText>
//                         <Button color="primary" onClick={onClose}>
//                            {Lang[props.session.language].DeleteConfirmNO}
//                         </Button>
//                      </InputGroupText>
//                   </InputGroup>
//                </CardBody>
//             </Card>
//          )
//       });
//    }, [state.selected, state.confirmValue, handleClickDelete, props]);

//    const openEditor = useCallback((ID) => {
//       if (ID === null) {
//          setState(prevState => ({ ...prevState, selectedEstablishment: null, editorWindow: true }));
//       } else {
//          props.reqAPI(Config.apiURI + '/api/establishments/' + ID + '?full').then(establishment => {
//             setState(prevState => ({ ...prevState, selectedEstablishment: establishment, editorWindow: true }));
//          });
//       }
//    }, [props]);

//    const closeEditor = useCallback((state) => {
//       if (state) toast.success('Los cambios han sido guardados');
//       setState(prevState => ({ ...prevState, selectedEstablishment: null, editorWindow: false }));
//       handleTableChange('reload', {
//          page: state.page,
//          sizePerPage: state.sizePerPage,
//          filters: state.filters,
//          sortField: state.sortField,
//          sortOrder: state.sortOrder
//       });
//    }, [handleTableChange]);

//    useEffect(() => {
//       handleTableChange('reload', {
//          page: state.page,
//          sizePerPage: state.sizePerPage,
//          filters: state.filters,
//          sortField: state.sortField,
//          sortOrder: state.sortOrder
//       });
//    }, [handleTableChange]);

//    return (
//       <Card>
//          {/* <ToolkitProvider keyField="ID" data={state.data} columns={columns} exportCSV>
//             {
//                props => (
//                   <CardBody>
//                      <ExportCSVButton className="btn btn-primary" {...props.csvProps}>{Lang[props.session.language].ExportCSV}</ExportCSVButton>
//                      {' '}
//                      {props.session.permissions.controllers.establishments.find(el => el == 'create') ? <Button color="success" onClick={() => openEditor(null)}><i className="fa fa-plus"></i> {Lang[props.session.language].Establishments.buttons.add}</Button> : null}
//                      {' '}
//                      {state.selected.length > 0 ? <Button color="danger" onClick={() => doDelete(null)}><i className="fa fa-minus"></i> {Lang[props.session.language].Establishments.buttons.delSelected}</Button> : ''}

//                      <BootstrapTable
//                         remote
//                         striped
//                         condensed
//                         bootstrap4
//                         bordered={false}
//                         keyField="ID"
//                         data={state.data}
//                         columns={columns}
//                         selectRow={{
//                            mode: 'checkbox',
//                            onSelect: handleOnSelect,
//                            onSelectAll: handleOnSelectAll
//                         }}
//                         defaultSorted={[{
//                            dataField: 'name',
//                            order: 'asc'
//                         }]}
//                         filter={filterFactory()}
//                         pagination={
//                            paginationFactory({
//                               page: state.page,
//                               sizePerPage: state.sizePerPage,
//                               sizePerPageList: [
//                                  { text: '5', value: 5 },
//                                  { text: '10', value: 10 },
//                                  { text: '25', value: 25 },
//                                  { text: '50', value: 50 },
//                                  { text: '100', value: 100 }
//                               ],
//                               showTotal: true,
//                               totalSize: state.totalSize,
//                               firstPageText: Lang[props.session.language].pagination.firstPageText,
//                               prePageText: Lang[props.session.language].pagination.prePageText,
//                               nextPageText: Lang[props.session.language].pagination.nextPageText,
//                               lastPageText: Lang[props.session.language].pagination.lastPageText,
//                               firstPageTitle: Lang[props.session.language].pagination.firstPageTitle,
//                               nextPageTitle: Lang[props.session.language].pagination.nextPageTitle,
//                               prePageTitle: Lang[props.session.language].pagination.prePageTitle,
//                               lastPageTitle: Lang[props.session.language].pagination.lastPageTitle,
//                               paginationTotalRenderer: (from, to, size) => (
//                                  <span className="react-bootstrap-table-pagination-total" dangerouslySetInnerHTML={{ __html: '&nbsp;' + Lang[props.session.language].paginationFooter(from, to, size) + ' ' + Lang[props.session.language].Establishments.name }} />
//                               )
//                            })
//                         }
//                         onTableChange={handleTableChange}
//                         noDataIndication={Lang[props.session.language].tableEmpty}
//                         {...props.baseProps} />
//                   </CardBody>
//                )
//             }
//          </ToolkitProvider>

//          <EstablishmentsEditor {...props} open={state.editorWindow} establishment={state.selectedEstablishment} handleClose={closeEditor} onComplete={closeEditor} /> */}
//       </Card>
//    );
// };

// export default EstablishmentsList;

// import React, { useEffect, useState } from 'react';
// import Header from '../comp_dashboard/header';
// import Sidebar from '../comp_dashboard/Sidebar';
// import './EstablishmentsList.css'; // Import your CSS file

// function EstablishmentsList() {
//    const [establishments, setEstablishments] = useState([]);
//    const [selectedEstablishments, setSelectedEstablishments] = useState([]);
//    const [showCount, setShowCount] = useState(10);

//    useEffect(() => {
//       const fetchData = async () => {
//          try {
//             const response = await fetch('https://quality.fiestaismadrid.net/api/establishments', {
//                method: 'POST',
//                headers: {
//                   'Content-Type': 'application/json',
//                   'Host': 'quality.fiestaismadrid.net',
//                   'Origin': 'https://quality.fiestaismadrid.net',
//                   'Referer': 'https://quality.fiestaismadrid.net/establishments'
//                },
//                body: JSON.stringify({
//                   filters: {},
//                   language: "es_ES",
//                   page: 1,
//                   sizePerPage: 10,
//                   sortField: "name",
//                   sortOrder: "asc"
//                })
//             });

//             if (!response.ok) {
//                throw new Error('Network response was not ok');
//             }

//             const data = await response.json();
//             setEstablishments(data.items);
//          } catch (error) {
//             console.error('Error fetching data:', error);
//          }
//       };

//       fetchData();
//    }, []);



//    const handleSelectAll = (e) => {
//       if (e.target.checked) {
//          setSelectedEstablishments(establishments.map(est => est.ID));
//       } else {
//          setSelectedEstablishments([]);
//       }
//    };

//    const handleSelect = (ID) => {
//       if (selectedEstablishments.includes(ID)) {
//          setSelectedEstablishments(selectedEstablishments.filter(id => id !== ID));
//       } else {
//          setSelectedEstablishments([...selectedEstablishments, ID]);
//       }
//    };

//    const handleShowCountChange = (e) => {
//       setShowCount(Number(e.target.value));
//    };

//    return (
//       <div>
//          <Header />
//          <Sidebar>
//             <div className='mt-2 row'>
//                <div className='cuadro_princal'>
//                   <div className='parent-label titulo_cuadro'>Establishments: Establecimientos</div>
//                </div>
//             </div>
//             <div className="table-container">
//                <div className="table-header">
//                   <button className="btn-export">Exportar a CSV</button>
//                   <button className="btn-add">+ Añadir establecimiento</button>
//                   <button className="btn-delete-selected">Eliminar seleccionados</button>
//                </div>
//                <table className="table">
//                   <thead>
//                      <tr>
//                         <th>
//                            <input
//                               type="checkbox"
//                               onChange={handleSelectAll}
//                               checked={selectedEstablishments.length === establishments.length}
//                            />
//                         </th>
//                         <th>Nombre del establecimiento</th>
//                         <th>Descripción</th>
//                         <th>Dirección completa</th>
//                         <th>Actions</th>
//                      </tr>
//                   </thead>
//                   <tbody>
//                      {establishments.slice(0, showCount).map(est => (
//                         <tr key={est.ID}>
//                            <td>
//                               <input
//                                  type="checkbox"
//                                  checked={selectedEstablishments.includes(est.ID)}
//                                  onChange={() => handleSelect(est.ID)}
//                               />
//                            </td>
//                            <td>{est.name}</td>
//                            <td>{est.description}</td>
//                            <td>{est.full_address}</td>
//                            <td>
//                               <button className="btn btn-edit">✎</button>
//                               <button className="btn btn-delete">🗑</button>
//                            </td>
//                         </tr>
//                      ))}
//                   </tbody>
//                </table>
//                <div className="table-footer">
//                   <select value={showCount} onChange={handleShowCountChange}>
//                      <option value="10">10</option>
//                      <option value="20">20</option>
//                      <option value="30">30</option>
//                      <option value="40">40</option>
//                   </select>
//                   <span>Mostrando un total de {establishments.length} establecimientos</span>
//                </div>
//             </div>
//          </Sidebar>
//       </div>
//    );
// }

// export default EstablishmentsList;

//=============================================================================================
// import React, { useEffect, useState } from 'react';
// import Header from '../comp_dashboard/header';
// import Sidebar from '../comp_dashboard/Sidebar';
// import AddEstablishmentModal from './AddEstablishmentModal'; // Import the modal component
// import './EstablishmentsList.css'; // Import your CSS file
// import Map from './Map';

// function EstablishmentsList() {
//    const [establishments, setEstablishments] = useState([]);
//    const [selectedEstablishments, setSelectedEstablishments] = useState([]);
//    const [showCount, setShowCount] = useState(10);
//    const [isModalOpen, setIsModalOpen] = useState(false); // State to manage modal

//    useEffect(() => {
//       const fetchData = async () => {
//          try {
//             const response = await fetch('https://quality.fiestaismadrid.net/api/establishments', {
//                method: 'POST',
//                headers: {
//                   'Content-Type': 'application/json',
//                   'Host': 'quality.fiestaismadrid.net',
//                   'Origin': 'https://quality.fiestaismadrid.net',
//                   'Referer': 'https://quality.fiestaismadrid.net/establishments'
//                },
//                body: JSON.stringify({
//                   filters: {},
//                   language: "es_ES",
//                   page: 1,
//                   sizePerPage: 10,
//                   sortField: "name",
//                   sortOrder: "asc"
//                })
//             });

//             if (!response.ok) {
//                throw new Error('Network response was not ok');
//             }

//             const data = await response.json();
//             setEstablishments(data.items);
//          } catch (error) {
//             console.error('Error fetching data:', error);
//          }
//       };

//       fetchData();
//    }, []);

//    const handleSelectAll = (e) => {
//       if (e.target.checked) {
//          setSelectedEstablishments(establishments.map(est => est.ID));
//       } else {
//          setSelectedEstablishments([]);
//       }
//    };

//    const handleSelect = (ID) => {
//       if (selectedEstablishments.includes(ID)) {
//          setSelectedEstablishments(selectedEstablishments.filter(id => id !== ID));
//       } else {
//          setSelectedEstablishments([...selectedEstablishments, ID]);
//       }
//    };

//    const handleShowCountChange = (e) => {
//       setShowCount(Number(e.target.value));
//    };

//    const toggleModal = () => {
//       setIsModalOpen(!isModalOpen);
//    };

//    return (
//       <div>
//          <Header />
//          <Sidebar>
//             <div className='mt-2 row'>
//                <div className='cuadro_princal'>
//                   <div className='parent-label titulo_cuadro'>Establishments: Establecimientos</div>
//                </div>
//             </div>
//             <div className="table-container">
//                <div className="table-header">
//                   <button className="btn-export">Exportar a CSV</button>
//                   <button className="btn-add" onClick={toggleModal}>+ Añadir establecimiento</button>
//                   <button className="btn-delete-selected">Eliminar seleccionados</button>
//                </div>
//                <table className="table">
//                   <thead>
//                      <tr>
//                         <th>
//                            <input
//                               type="checkbox"
//                               onChange={handleSelectAll}
//                               checked={selectedEstablishments.length === establishments.length}
//                            />
//                         </th>
//                         <th>Nombre del establecimiento</th>
//                         <th>Descripción</th>
//                         <th>Dirección completa</th>
//                         <th>Actions</th>
//                      </tr>
//                   </thead>
//                   <tbody>
//                      {establishments.slice(0, showCount).map(est => (
//                         <tr key={est.ID}>
//                            <td>
//                               <input
//                                  type="checkbox"
//                                  checked={selectedEstablishments.includes(est.ID)}
//                                  onChange={() => handleSelect(est.ID)}
//                               />
//                            </td>
//                            <td>{est.name}</td>
//                            <td>{est.description}</td>
//                            <td>{est.full_address}</td>
//                            <td>
//                               <button className="btn btn-edit">✎</button>
//                               <button className="btn btn-delete">🗑</button>
//                            </td>
//                         </tr>
//                      ))}
//                   </tbody>
//                </table>
//                <div className="table-footer">
//                   <select value={showCount} onChange={handleShowCountChange}>
//                      <option value="10">10</option>
//                      <option value="20">20</option>
//                      <option value="30">30</option>
//                      <option value="40">40</option>
//                   </select>
//                   <span>Mostrando un total de {establishments.length} establecimientos</span>
//                </div>
//             </div>
//          </Sidebar>
//          <AddEstablishmentModal isOpen={isModalOpen} toggle={toggleModal} setIsModalOpen={setIsModalOpen} />
//          <Map />
//       </div>
//    );
// }

// export default EstablishmentsList;
//===================================================================================================
// import React, { useEffect, useState } from 'react';
// import Header from '../comp_dashboard/header';
// import Sidebar from '../comp_dashboard/Sidebar';
// import AddEstablishmentModal from './AddEstablishmentModal'; // Import the modal component
// import './EstablishmentsList.css'; // Import your CSS file
// import Map from './Map';

// function EstablishmentsList() {
//    const [establishments, setEstablishments] = useState([]);
//    const [selectedEstablishments, setSelectedEstablishments] = useState([]);
//    const [showCount, setShowCount] = useState(10);
//    const [isModalOpen, setIsModalOpen] = useState(false); // State to manage modal
//    const [filters, setFilters] = useState({
//       name: '',
//       description: '',
//       full_address: ''
//    });

//    useEffect(() => {
//       const fetchData = async () => {
//          try {
//             // const response = await fetch('https://quality.fiestaismadrid.net/api/establishments', {
//             const response = await fetch('http://localhost:8000/establishments/', {
//                method: 'POST',
//                headers: {
//                   'Content-Type': 'application/json'
//                },
//                body: JSON.stringify({
//                   filters: {
//                      name: {
//                         filterVal: filters.name,
//                         filterType: 'TEXT',
//                         comparator: 'LIKE',
//                         caseSensitive: false
//                      },
//                      description: {
//                         filterVal: filters.description,
//                         filterType: 'TEXT',
//                         comparator: 'LIKE',
//                         caseSensitive: false
//                      },
//                      full_address: {
//                         filterVal: filters.full_address,
//                         filterType: 'TEXT',
//                         comparator: 'LIKE',
//                         caseSensitive: false
//                      }
//                   },
//                   language: 'es_ES',
//                   page: 1,
//                   sizePerPage: showCount,
//                   sortField: 'name',
//                   sortOrder: 'asc'
//                })
//             });

//             if (!response.ok) {
//                throw new Error('Network response was not ok');
//             }

//             const data = await response.json();
//             setEstablishments(data.items);
//          } catch (error) {
//             console.error('Error fetching data:', error);
//          }
//       };

//       fetchData();
//    }, [filters, showCount]);

//    const handleSelectAll = (e) => {
//       if (e.target.checked) {
//          setSelectedEstablishments(establishments.map(est => est.ID));
//       } else {
//          setSelectedEstablishments([]);
//       }
//    };

//    const handleSelect = (ID) => {
//       if (selectedEstablishments.includes(ID)) {
//          setSelectedEstablishments(selectedEstablishments.filter(id => id !== ID));
//       } else {
//          setSelectedEstablishments([...selectedEstablishments, ID]);
//       }
//    };

//    const handleShowCountChange = (e) => {
//       setShowCount(Number(e.target.value));
//    };

//    const toggleModal = () => {
//       setIsModalOpen(!isModalOpen);
//    };

//    const handleFilterChange = (e) => {
//       const { name, value } = e.target;
//       setFilters(prevFilters => ({ ...prevFilters, [name]: value }));
//    };

//    // Utility function to strip HTML tags, HTML entities and limit text length
//    const truncateDescription = (description, maxLength = 100) => {
//       let strippedDescription = description.replace(/<[^>]*>/g, ''); // Remove HTML tags
//       strippedDescription = strippedDescription.replace(/&nbsp;/g, ' '); // Replace &nbsp;
//       strippedDescription = strippedDescription.replace(/&amp;/g, '&'); // Replace &amp;
//       strippedDescription = strippedDescription.replace(/&lt;/g, '<'); // Replace &lt;
//       strippedDescription = strippedDescription.replace(/&gt;/g, '>'); // Replace &gt;
//       strippedDescription = strippedDescription.replace(/&quot;/g, '"'); // Replace &quot;
//       strippedDescription = strippedDescription.replace(/&#39;/g, "'"); // Replace &#39;

//       return strippedDescription.length > maxLength
//          ? strippedDescription.substring(0, maxLength) + "..."
//          : strippedDescription;
//    };

//    return (
//       <div>
//          <Header />
//          <Sidebar>
//             <div className='mt-2 row'>
//                <div className='cuadro_princal'>
//                   <div className='parent-label titulo_cuadro'>Establishments: Establecimientos</div>
//                </div>
//             </div>
//             <div className="table-container">
//                <div className="table-header">
//                   <button className="btn-export">Exportar a CSV</button>
//                   <button className="btn-add" onClick={toggleModal}>+ Añadir establecimiento</button>
//                   <button className="btn-delete-selected">Eliminar seleccionados</button>
//                </div>
//                <table className="table">
//                   <thead>
//                      <tr>
//                         <th>
//                            <input
//                               type="checkbox"
//                               onChange={handleSelectAll}
//                               checked={selectedEstablishments.length === establishments.length}
//                            />
//                         </th>
//                         <th>
//                            <input
//                               type="text"
//                               name="name"
//                               placeholder="Enter Nombre del establecimiento..."
//                               value={filters.name}
//                               onChange={handleFilterChange}
//                            />
//                         </th>
//                         <th>
//                            <input
//                               type="text"
//                               name="description"
//                               placeholder="Enter Descripción..."
//                               value={filters.description}
//                               onChange={handleFilterChange}
//                            />
//                         </th>
//                         <th>
//                            <input
//                               type="text"
//                               name="full_address"
//                               placeholder="Enter Dirección completa..."
//                               value={filters.full_address}
//                               onChange={handleFilterChange}
//                            />
//                         </th>
//                         <th>
//                            <button className="btn-filter-clear" onClick={() => setFilters({ name: '', description: '', full_address: '' })}>Limpiar</button>
//                         </th>
//                      </tr>
//                   </thead>
//                   <tbody>
//                      {establishments.slice(0, showCount).map(est => (
//                         <tr key={est.ID}>
//                            <td>
//                               <input
//                                  type="checkbox"
//                                  checked={selectedEstablishments.includes(est.ID)}
//                                  onChange={() => handleSelect(est.ID)}
//                               />
//                            </td>
//                            <td>{est.name}</td>
//                            <td>{truncateDescription(est.description)}</td>
//                            <td>{est.full_address}</td>
//                            <td style={{ display: 'flex' }}>
//                               <button className="btn btn-edit">✎</button>
//                               <button className="btn btn-delete">🗑</button>
//                            </td>
//                         </tr>
//                      ))}
//                   </tbody>
//                </table>
//                <div className="table-footer">
//                   <select value={showCount} onChange={handleShowCountChange}>
//                      <option value="10">10</option>
//                      <option value="20">20</option>
//                      <option value="30">30</option>
//                      <option value="40">40</option>
//                   </select>
//                   <span>Mostrando un total de {establishments.length} establecimientos</span>
//                </div>
//             </div>
//          </Sidebar>
//          <AddEstablishmentModal isOpen={isModalOpen} toggle={toggleModal} setIsModalOpen={setIsModalOpen} />
//          <Map />
//       </div>
//    );
// }

// export default EstablishmentsList;
//================================================================================
// import React, { useEffect, useState } from 'react';
// import Header from '../comp_dashboard/header';
// import Sidebar from '../comp_dashboard/Sidebar';
// import AddEstablishmentModal from './AddEstablishmentModal';
// import './EstablishmentsList.css';
// import Map from './Map';

// function EstablishmentsList() {
//    const [establishments, setEstablishments] = useState([]);
//    const [selectedEstablishments, setSelectedEstablishments] = useState([]);
//    const [showCount, setShowCount] = useState(10);
//    const [isModalOpen, setIsModalOpen] = useState(false);
//    const [filters, setFilters] = useState({
//       name: '',
//       description: '',
//       full_address: ''
//    });
//    const [currentEstablishment, setCurrentEstablishment] = useState(null);

//    useEffect(() => {
//       const fetchData = async () => {
//          try {
//             const response = await fetch('http://localhost:8000/establishments/', {
//                method: 'POST',
//                headers: {
//                   'Content-Type': 'application/json'
//                },
//                body: JSON.stringify({
//                   filters: {
//                      name: {
//                         filterVal: filters.name,
//                         filterType: 'TEXT',
//                         comparator: 'LIKE',
//                         caseSensitive: false
//                      },
//                      description: {
//                         filterVal: filters.description,
//                         filterType: 'TEXT',
//                         comparator: 'LIKE',
//                         caseSensitive: false
//                      },
//                      full_address: {
//                         filterVal: filters.full_address,
//                         filterType: 'TEXT',
//                         comparator: 'LIKE',
//                         caseSensitive: false
//                      }
//                   },
//                   language: 'es_ES',
//                   page: 1,
//                   sizePerPage: showCount,
//                   sortField: 'name',
//                   sortOrder: 'asc'
//                })
//             });

//             if (!response.ok) {
//                throw new Error('Network response was not ok');
//             }

//             const data = await response.json();
//             setEstablishments(data.items);
//          } catch (error) {
//             console.error('Error fetching data:', error);
//          }
//       };

//       fetchData();
//    }, [filters, showCount]);

//    const handleSelectAll = (e) => {
//       if (e.target.checked) {
//          setSelectedEstablishments(establishments.map(est => est.ID));
//       } else {
//          setSelectedEstablishments([]);
//       }
//    };

//    const handleSelect = (ID) => {
//       if (selectedEstablishments.includes(ID)) {
//          setSelectedEstablishments(selectedEstablishments.filter(id => id !== ID));
//       } else {
//          setSelectedEstablishments([...selectedEstablishments, ID]);
//       }
//    };

//    const handleShowCountChange = (e) => {
//       setShowCount(Number(e.target.value));
//    };

//    const toggleModal = () => {
//       setIsModalOpen(!isModalOpen);
//       setCurrentEstablishment(null); // Reset current establishment when closing the modal
//    };

//    const handleFilterChange = (e) => {
//       const { name, value } = e.target;
//       setFilters(prevFilters => ({ ...prevFilters, [name]: value }));
//    };

//    const handleEditClick = (establishment) => {
//       setCurrentEstablishment(establishment);
//       setIsModalOpen(true);
//    };

//    // Utility function to strip HTML tags, HTML entities and limit text length
//    const truncateDescription = (description, maxLength = 100) => {
//       let strippedDescription = description.replace(/<[^>]*>/g, ''); // Remove HTML tags
//       strippedDescription = strippedDescription.replace(/&nbsp;/g, ' '); // Replace &nbsp;
//       strippedDescription = strippedDescription.replace(/&amp;/g, '&'); // Replace &amp;
//       strippedDescription = strippedDescription.replace(/&lt;/g, '<'); // Replace &lt;
//       strippedDescription = strippedDescription.replace(/&gt;/g, '>'); // Replace &gt;
//       strippedDescription = strippedDescription.replace(/&quot;/g, '"'); // Replace &quot;
//       strippedDescription = strippedDescription.replace(/&#39;/g, "'"); // Replace &#39;

//       return strippedDescription.length > maxLength
//          ? strippedDescription.substring(0, maxLength) + "..."
//          : strippedDescription;
//    };

//    return (
//       <div>
//          <Header />
//          <Sidebar>
//             <div className='mt-2 row'>
//                <div className='cuadro_princal'>
//                   <div className='parent-label titulo_cuadro'>Establishments: Establecimientos</div>
//                </div>
//             </div>
//             <div className="table-container">
//                <div className="table-header">
//                   <button className="btn-export">Exportar a CSV</button>
//                   <button className="btn-add" onClick={toggleModal}>+ Añadir establecimiento</button>
//                   <button className="btn-delete-selected">Eliminar seleccionados</button>
//                </div>
//                <table className="table">
//                   <thead>
//                      <tr>
//                         <th>
//                            <input
//                               type="checkbox"
//                               onChange={handleSelectAll}
//                               checked={selectedEstablishments.length === establishments.length}
//                            />
//                         </th>
//                         <th>
//                            <input
//                               type="text"
//                               name="name"
//                               placeholder="Enter Nombre del establecimiento..."
//                               value={filters.name}
//                               onChange={handleFilterChange}
//                            />
//                         </th>
//                         <th>
//                            <input
//                               type="text"
//                               name="description"
//                               placeholder="Enter Descripción..."
//                               value={filters.description}
//                               onChange={handleFilterChange}
//                            />
//                         </th>
//                         <th>
//                            <input
//                               type="text"
//                               name="full_address"
//                               placeholder="Enter Dirección completa..."
//                               value={filters.full_address}
//                               onChange={handleFilterChange}
//                            />
//                         </th>
//                         <th>
//                            <button className="btn-filter-clear" onClick={() => setFilters({ name: '', description: '', full_address: '' })}>Limpiar</button>
//                         </th>
//                      </tr>
//                   </thead>
//                   <tbody>
//                      {establishments.slice(0, showCount).map(est => (
//                         <tr key={est.ID}>
//                            <td>
//                               <input
//                                  type="checkbox"
//                                  checked={selectedEstablishments.includes(est.ID)}
//                                  onChange={() => handleSelect(est.ID)}
//                               />
//                            </td>
//                            <td>{est.name}</td>
//                            <td>{truncateDescription(est.description)}</td>
//                            <td>{est.full_address}</td>
//                            <td style={{ display: 'flex' }}>
//                               <button className="btn btn-edit" onClick={() => handleEditClick(est)}>✎</button>
//                               <button className="btn btn-delete">🗑</button>
//                            </td>
//                         </tr>
//                      ))}
//                   </tbody>
//                </table>
//                <div className="table-footer">
//                   <select value={showCount} onChange={handleShowCountChange}>
//                      <option value="10">10</option>
//                      <option value="20">20</option>
//                      <option value="30">30</option>
//                      <option value="40">40</option>
//                   </select>
//                   <span>Mostrando un total de {establishments.length} establecimientos</span>
//                </div>
//             </div>
//          </Sidebar>
//          <AddEstablishmentModal
//             isOpen={isModalOpen}
//             toggle={toggleModal}
//             setIsModalOpen={setIsModalOpen}
//             establishment={currentEstablishment}
//          />
//          <Map />
//       </div>
//    );
// }

// export default EstablishmentsList;
//----------------------------===============================
// import React, { useEffect, useState } from 'react';
// import Header from '../comp_dashboard/header';
// import Sidebar from '../comp_dashboard/Sidebar';
// import AddEstablishmentModal from './AddEstablishmentModal';
// import './EstablishmentsList.css';
// import Map from './Map';

// function EstablishmentsList() {
//    const [establishments, setEstablishments] = useState([]);
//    const [selectedEstablishments, setSelectedEstablishments] = useState([]);
//    const [showCount, setShowCount] = useState(10);
//    const [isModalOpen, setIsModalOpen] = useState(false);
//    const [filters, setFilters] = useState({
//       name: '',
//       description: '',
//       full_address: ''
//    });
//    const [currentEstablishment, setCurrentEstablishment] = useState(null);

//    useEffect(() => {
//       const fetchData = async () => {
//          try {
//             const response = await fetch('http://localhost:8000/establishments/', {
//                method: 'POST',
//                headers: {
//                   'Content-Type': 'application/json'
//                },
//                body: JSON.stringify({
//                   filters: {
//                      name: {
//                         filterVal: filters.name,
//                         filterType: 'TEXT',
//                         comparator: 'LIKE',
//                         caseSensitive: false
//                      },
//                      description: {
//                         filterVal: filters.description,
//                         filterType: 'TEXT',
//                         comparator: 'LIKE',
//                         caseSensitive: false
//                      },
//                      full_address: {
//                         filterVal: filters.full_address,
//                         filterType: 'TEXT',
//                         comparator: 'LIKE',
//                         caseSensitive: false
//                      }
//                   },
//                   language: 'es_ES',
//                   page: 1,
//                   sizePerPage: showCount,
//                   sortField: 'name',
//                   sortOrder: 'asc'
//                })
//             });

//             if (!response.ok) {
//                throw new Error('Network response was not ok');
//             }

//             const data = await response.json();
//             setEstablishments(data.items);
//          } catch (error) {
//             console.error('Error fetching data:', error);
//          }
//       };

//       fetchData();
//    }, [filters, showCount]);

//    const handleSelectAll = (e) => {
//       if (e.target.checked) {
//          setSelectedEstablishments(establishments.map(est => est.ID));
//       } else {
//          setSelectedEstablishments([]);
//       }
//    };

//    const handleSelect = (ID) => {
//       if (selectedEstablishments.includes(ID)) {
//          setSelectedEstablishments(selectedEstablishments.filter(id => id !== ID));
//       } else {
//          setSelectedEstablishments([...selectedEstablishments, ID]);
//       }
//    };

//    const handleShowCountChange = (e) => {
//       setShowCount(Number(e.target.value));
//    };

//    const toggleModal = () => {
//       setIsModalOpen(!isModalOpen);
//       setCurrentEstablishment(null); // Reset current establishment when closing the modal
//    };

//    const handleFilterChange = (e) => {
//       const { name, value } = e.target;
//       setFilters(prevFilters => ({ ...prevFilters, [name]: value }));
//    };

//    const handleEditClick = (establishment) => {
//       setCurrentEstablishment(establishment);
//       setIsModalOpen(true);
//    };

//    // Utility function to strip HTML tags, HTML entities and limit text length
//    const truncateDescription = (description, maxLength = 100) => {
//       let strippedDescription = description.replace(/<[^>]*>/g, ''); // Remove HTML tags
//       strippedDescription = strippedDescription.replace(/&nbsp;/g, ' '); // Replace &nbsp;
//       strippedDescription = strippedDescription.replace(/&amp;/g, '&'); // Replace &amp;
//       strippedDescription = strippedDescription.replace(/&lt;/g, '<'); // Replace &lt;
//       strippedDescription = strippedDescription.replace(/&gt;/g, '>'); // Replace &gt;
//       strippedDescription = strippedDescription.replace(/&quot;/g, '"'); // Replace &quot;
//       strippedDescription = strippedDescription.replace(/&#39;/g, "'"); // Replace &#39;

//       return strippedDescription.length > maxLength
//          ? strippedDescription.substring(0, maxLength) + "..."
//          : strippedDescription;
//    };

//    return (
//       <div>
//          <Header />
//          <Sidebar>
//             <div className='mt-2 row'>
//                <div className='cuadro_princal'>
//                   <div className='parent-label titulo_cuadro'>Establishments: Establecimientos</div>
//                </div>
//             </div>
//             <div className="table-container">
//                <div className="table-header">
//                   <button className="btn-export">Exportar a CSV</button>
//                   <button className="btn-add" onClick={toggleModal}>+ Añadir establecimiento</button>
//                   <button className="btn-delete-selected">Eliminar seleccionados</button>
//                </div>
//                <table className="table">
//                   <thead>
//                      <tr>
//                         <th>
//                            <input
//                               type="checkbox"
//                               onChange={handleSelectAll}
//                               checked={selectedEstablishments.length === establishments.length}
//                            />
//                         </th>
//                         <th>
//                            <input
//                               type="text"
//                               name="name"
//                               placeholder="Enter Nombre del establecimiento..."
//                               value={filters.name}
//                               onChange={handleFilterChange}
//                            />
//                         </th>
//                         <th>
//                            <input
//                               type="text"
//                               name="description"
//                               placeholder="Enter Descripción..."
//                               value={filters.description}
//                               onChange={handleFilterChange}
//                            />
//                         </th>
//                         <th>
//                            <input
//                               type="text"
//                               name="full_address"
//                               placeholder="Enter Dirección completa..."
//                               value={filters.full_address}
//                               onChange={handleFilterChange}
//                            />
//                         </th>
//                         <th>
//                            <button className="btn-filter-clear" onClick={() => setFilters({ name: '', description: '', full_address: '' })}>Limpiar</button>
//                         </th>
//                      </tr>
//                   </thead>
//                   <tbody>
//                      {establishments.slice(0, showCount).map(est => (
//                         <tr key={est.ID}>
//                            <td>
//                               <input
//                                  type="checkbox"
//                                  checked={selectedEstablishments.includes(est.ID)}
//                                  onChange={() => handleSelect(est.ID)}
//                               />
//                            </td>
//                            <td>{est.name}</td>
//                            <td>{truncateDescription(est.description)}</td>
//                            <td>{est.full_address}</td>
//                            <td style={{ display: 'flex' }}>
//                               <button className="btn btn-edit" onClick={() => handleEditClick(est)}>✎</button>
//                               <button className="btn btn-delete">🗑</button>
//                            </td>
//                         </tr>
//                      ))}
//                   </tbody>
//                </table>
//                <div className="table-footer">
//                   <select value={showCount} onChange={handleShowCountChange}>
//                      <option value="10">10</option>
//                      <option value="20">20</option>
//                      <option value="30">30</option>
//                      <option value="40">40</option>
//                   </select>
//                   <span>Mostrando un total de {establishments.length} establecimientos</span>
//                </div>
//             </div>
//          </Sidebar>
//          <AddEstablishmentModal
//             isOpen={isModalOpen}
//             toggle={toggleModal}
//             setIsModalOpen={setIsModalOpen}
//             establishment={currentEstablishment}
//          />
//          <Map />
//       </div>
//    );
// }

// export default EstablishmentsList;
//==================================-------------------------
import React, { useEffect, useState } from 'react';
import Header from '../comp_dashboard/header';
import Sidebar from '../comp_dashboard/Sidebar';
import AddEstablishmentModal from './AddEstablishmentModal';
import './EstablishmentsList.css';
import Map from './Map';
import EditEstablishmentModal from './Editor';
import { api } from '../servicios/api';


const URI = api + 'establishments/';

function EstablishmentsList() {
   const [establishments, setEstablishments] = useState([]);
   const [selectedEstablishments, setSelectedEstablishments] = useState([]);
   const [showCount, setShowCount] = useState(10);
   const [isModalOpen, setIsModalOpen] = useState(false);
   const [isEditModalOpen, setIsEditModalOpen] = useState(false);

   const [filters, setFilters] = useState({
      name: '',
      description: '',
      full_address: ''
   });
   const [currentEstablishment, setCurrentEstablishment] = useState('');

   useEffect(() => {

      fetchData();
   }, [filters, showCount]);
   const fetchData = async () => {
      try {
         // const response = await fetch('https://apiquality.fiestaismadrid.net/establishments/', {
         const response = await fetch(`${URI}`, {
            method: 'POST',
            headers: {
               'Content-Type': 'application/json'
            },
            body: JSON.stringify({
               filters: {
                  name: {
                     filterVal: filters.name,
                     filterType: 'TEXT',
                     comparator: 'LIKE',
                     caseSensitive: false
                  },
                  description: {
                     filterVal: filters.description,
                     filterType: 'TEXT',
                     comparator: 'LIKE',
                     caseSensitive: false
                  },
                  full_address: {
                     filterVal: filters.full_address,
                     filterType: 'TEXT',
                     comparator: 'LIKE',
                     caseSensitive: false
                  }
               },
               language: 'es_ES',
               page: 1,
               sizePerPage: showCount,
               sortField: 'name',
               sortOrder: 'asc'
            })
         });

         if (!response.ok) {
            throw new Error('Network response was not ok');
         }

         const data = await response.json();
         setEstablishments(data.items);
      } catch (error) {
         console.error('Error fetching data:', error);
      }
   };


   const handleSelectAll = (e) => {
      if (e.target.checked) {
         setSelectedEstablishments(establishments.map(est => est.ID));
      } else {
         setSelectedEstablishments([]);
      }
   };

   const handleSelect = (ID) => {
      if (selectedEstablishments.includes(ID)) {
         setSelectedEstablishments(selectedEstablishments.filter(id => id !== ID));
      } else {
         setSelectedEstablishments([...selectedEstablishments, ID]);
      }
   };

   const handleShowCountChange = (e) => {
      setShowCount(Number(e.target.value));
   };

   const toggleModal = () => {
      setIsModalOpen(!isModalOpen);
      setCurrentEstablishment(null); // Reset current establishment when closing the modal
   };

   const handleFilterChange = (e) => {
      const { name, value } = e.target;
      setFilters(prevFilters => ({ ...prevFilters, [name]: value }));
   };

   const handleEditClick = async (ID) => {
      console.log(ID, "ID")
      setCurrentEstablishment(ID);
      setIsEditModalOpen(true);
   };

   // Utility function to strip HTML tags, HTML entities and limit text length
   const truncateDescription = (description, maxLength = 100) => {
      let strippedDescription = description.replace(/<[^>]*>/g, ''); // Remove HTML tags
      strippedDescription = strippedDescription.replace(/&nbsp;/g, ' '); // Replace &nbsp;
      strippedDescription = strippedDescription.replace(/&amp;/g, '&'); // Replace &amp;
      strippedDescription = strippedDescription.replace(/&lt;/g, '<'); // Replace &lt;
      strippedDescription = strippedDescription.replace(/&gt;/g, '>'); // Replace &gt;
      strippedDescription = strippedDescription.replace(/&quot;/g, '"'); // Replace &quot;
      strippedDescription = strippedDescription.replace(/&#39;/g, "'"); // Replace &#39;

      return strippedDescription.length > maxLength
         ? strippedDescription.substring(0, maxLength) + "..."
         : strippedDescription;
   };

   return (
      <div>
         <Header />
         <Sidebar>
            <div className='mt-2 row'>
               <div className='cuadro_princal'>
                  <div className='parent-label titulo_cuadro'>Establishments: Establecimientos</div>
               </div>
            </div>
            <div className="table-container">
               <div className="table-header">
                  <button className="btn-export">Exportar a CSV</button>
                  <button className="btn-add" onClick={toggleModal}>+ Añadir establecimiento</button>
                  <button className="btn-delete-selected">Eliminar seleccionados</button>
               </div>
               <table className="table">
                  <thead>
                     <tr>
                        <th>
                           <input
                              type="checkbox"
                              onChange={handleSelectAll}
                              checked={selectedEstablishments.length === establishments.length}
                           />
                        </th>
                        <th>
                           <input
                              type="text"
                              name="name"
                              placeholder="Enter Nombre del establecimiento..."
                              value={filters.name}
                              onChange={handleFilterChange}
                           />
                        </th>
                        <th>
                           <input
                              type="text"
                              name="description"
                              placeholder="Enter Descripción..."
                              value={filters.description}
                              onChange={handleFilterChange}
                           />
                        </th>
                        <th>
                           <input
                              type="text"
                              name="full_address"
                              placeholder="Enter Dirección completa..."
                              value={filters.full_address}
                              onChange={handleFilterChange}
                           />
                        </th>
                        <th>
                           <button className="btn-filter-clear" onClick={() => setFilters({ name: '', description: '', full_address: '' })}>Limpiar</button>
                        </th>
                     </tr>
                  </thead>
                  <tbody>
                     {establishments.slice(0, showCount).map(est => (
                        <tr key={est.ID}>
                           <td>
                              <input
                                 type="checkbox"
                                 checked={selectedEstablishments.includes(est.ID)}
                                 onChange={() => handleSelect(est.ID)}
                              />
                           </td>
                           <td>{est.name}</td>
                           <td>{truncateDescription(est.description)}</td>
                           <td>{est.full_address}</td>
                           <td style={{ display: 'flex' }}>
                              <button className="btn btn-edit" onClick={() => handleEditClick(est.ID)}>✎</button>
                              <button className="btn btn-delete">🗑</button>
                           </td>
                        </tr>
                     ))}
                  </tbody>
               </table>
               <div className="table-footer">
                  <select value={showCount} onChange={handleShowCountChange}>
                     <option value="10">10</option>
                     <option value="20">20</option>
                     <option value="30">30</option>
                     <option value="40">40</option>
                  </select>
                  <span>Mostrando un total de {establishments.length} establecimientos</span>
               </div>
            </div>
         </Sidebar>
         <AddEstablishmentModal
            isOpen={isModalOpen}
            // toggle={toggleModal}
            setIsModalOpen={setIsModalOpen}
            establishment={currentEstablishment}
         />

         <EditEstablishmentModal
            isOpen={isEditModalOpen}
            // toggle={toggleModal}
            setIsEditModalOpen={setIsEditModalOpen}
            establishmentId={currentEstablishment}
            fetchData={fetchData}
         />

         {/* <Map /> */}
      </div>
   );
}

export default EstablishmentsList;

