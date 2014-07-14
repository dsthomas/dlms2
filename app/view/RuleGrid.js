Ext.define('dlmsprint2a.view.RuleGrid', {
    extend  : 'Ext.grid.GridPanel',
    alias   : 'widget.rulegrid',
    //store : Ext.create('dlm.store.DlmFilesStore'),
    name    : 'rulegrid',
    //border  : false,
    //title : 'Editor',
    
    dockedItems : [{
        xtype : 'toolbar',
        items : [{
            xtype      : 'tbspacer',
            width: 6,
        },{
            xtype      : 'textfield',
            fieldLabel: 'Filter',
            value: 'lobal.DAT',
            labelWidth :  30,
            //iconCls    : 'upload',
        },{
            xtype      : 'tbspacer',
            width: 6,
        },{
            xtype      : 'textfield',
            fieldLabel: 'Export Template',
            value: 'lobal.DAT',
            labelWidth :  90,
            //iconCls    : 'upload',
        },{
            xtype      : 'tbspacer',
            width: 6,
        },{
            xtype: 'textareafield',
            name: 'textarea1',
            fieldLabel: 'Description',
            labelWidth :  60,
            value: 'Only low balance accounts',
        }],
    }],

    columns : [{ 
        text    : 'Structure', 
        columns : [{ 
            text  : 'Del',
            width : 40, 
        },{
            text  : 'Insert',
            width : 40,
        }],
    },{
        text  : 'Filter', 
        width : 200,
    },{
        text    : 'Content', 
        columns : [{ 
            text  : 'not',
            width : 40, 
        },{
            text  : 'or', 
            width : 40, 
        },{
            text  : 'Criterion', 
            width : 100, 
        },{
            text  : 'Op', 
            width : 40, 
        },{
            text  : 'Value', 
            width : 100, 
        }],
    }],
});
