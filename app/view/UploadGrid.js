Ext.define('dlmsprint2a.view.UploadGrid', {
    extend: 'Ext.grid.GridPanel',
    alias: 'widget.uploadgrid',
    //store: Ext.create('dlm.store.DlmFilesStore'),
    id: 'uploadgrid',
    name: 'uploadgrid',
    //border: false,
    margin: '5 5 5 5',
    //title: 'Uploads',

    dockedItems : [{
        xtype : 'toolbar',
        items : [{
            xtype   : 'tbtext',
            text    : '<B>West Process</B>',
        },{
            xtype : 'tbspacer',
            width : 98,            
        },{
            xtype      : 'textfield',
            fieldLabel : 'Upload a file',
            labelWidth :  68,
            iconCls    : 'upload',
        },{
            text    : 'Browse',
            //iconCls : 'add',
        },'->',{
            xtype   : 'textfield',
            fieldLabel : 'Target for auto-uploads:',
            labelWidth :  120,
            emptyText  : '*West*',
            //iconCls : '',
        }],
    }],

    columns: [
        { text: 'File Name', dataIndex: 'fileName', width: 200 },
        { text: 'Path', dataIndex: 'path', hidden: true },
        { text: 'Total Records', dataIndex: 'count',  },
        { text: 'Status', dataIndex: 'status', },
        { text: 'Date Created', dataIndex: 'created', },
        { text: 'Date Updated', dataIndex: 'updated', }
    ],
});
