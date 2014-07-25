Ext.define('dlmsprint2a.view.Main', {
    extend: 'Ext.container.Container',
    requires:[
        'Ext.tab.Panel',
        'Ext.layout.container.Border'
    ],
    
    xtype: 'app-main',

    layout: {
        type: 'border'
    },

    items: [{
        region : 'north',
        xtype  : 'toolbar',
        items : [{
            text    : 'Add',
            iconCls : 'add',
        },'-',{
            text    : 'Save',
            iconCls : 'save',
        },{
            text    : 'Refresh',
            iconCls : 'refresh',
        },{
            xtype : 'tbspacer',
            width : 98,
        },{
            text         : 'Exports',
            name         : 'exportsbtn',
            iconCls      : 'export',
            enableToggle : true, 
            pressed      : true,
        },{
            text         : 'Editor',
            name         : 'editorbtn',
            iconCls      : 'pencil',
            enableToggle : true, 
        },{
            text         : 'Accounts',
            name         : 'accountsbtn',
            iconCls      : 'account',
            enableToggle : true, 
        },{
            text         : 'Uploads',
            name         : 'uploadsbtn',
            iconCls      : 'lists',
            enableToggle : true, 
/*
        },'-',{
            text    : '199,834 uploaded in 22 files',
            iconCls : 'lists',
            iconAlign : 'right',
        },'-',{
            text    : '=>&nbsp;&nbsp; 199,384 exported in 22 lists',
            text    : '199,384 exported in 22 lists',
            iconCls : 'lists',
            iconAlign : 'right',
*/
        }],
    },{
        region : 'west',
        xtype  : 'filtergrid',
        //flex : 1,
        //hidden : true,
        width  : 1011,
    },{
        region     : 'center',
        xtype      : 'panel',
        //hidden   : true,
        name   : 'mainpanel',
        layout : 'card',
        activeItem: 3,
        items  : [{
            xtype  : 'accountgrid',
        },{
            xtype : 'uploadgrid',
            width : 528,
        },{
            xtype  : 'rulegrid',
            margin : '5 5 5 5',
        },{
            html   : '',
            border : false,
        }]
    }]
});
