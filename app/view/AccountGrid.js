/**
 * User: adotson Date: 8/5/13 Time: 4:08 PM To change this template use File |
 * Settings | File Templates.
 */
Ext.define('dlmsprint2a.view.AccountGrid', {
    extend : 'Ext.grid.GridPanel',
    alias : 'widget.accountgrid',
    //store : Ext.create('dlm.store.DlmListDataStore'),
    id : 'accountgrid',
    name : 'accountgrid',
    overflowY : true,
    //border : false,
    margin : '5 5 5 5',
    //title : 'Account View',
    defaults : {
        width : 100,
    },
    columns: [
        { text: 'Collection Date' },
        { text: 'Key' },
        { text: 'Bank Id' },
        { text: 'Product Type' },
        { text: 'FA Account' },
        { text: 'Relationship' },
        { text: 'SSN' },
        { text: 'First Name' },
        { text: 'Address 1' },
        { text: 'Address 2' },
        { text: 'City' },
        { text: 'State' },
        { text: 'Zip Code' },
    ],
});
