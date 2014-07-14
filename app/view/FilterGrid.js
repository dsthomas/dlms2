nUnique = function (recs, field) {
    var u = {}, a = [];
    for (var i = 0; i < recs.length; i++) {
        var group = recs[i].get(field);
        if (u.hasOwnProperty(group)) { continue; }
        a.push(group); u[group] = 1;
    }
    return a.length;
}
nNonNull = function (recs, field) {
    var c = 0;
    for (var i = 0; i < recs.length; i++) {
        c += recs[i].get(field) == '' ? 0: 1;
    }            
    return c;
}
sumIfExported = function (recs, field) {
    var s = 0;
    for (var i = 0; i < recs.length; i++) {
        s += recs[i].get('exportfile') == '' ? 0 : recs[i].get(field);
    }            
    return s;
}

Ext.require([
    'Ext.grid.*',
    'Ext.data.*',
    'Ext.ux.RowExpander',
    'Ext.selection.CheckboxModel'
]);

Ext.define('dlmsprint2a.view.FilterGrid', {
    extend      : 'Ext.tree.Panel',
    alias       : 'widget.filtergrid',
    store       : Ext.create('dlmsprint2a.store.Filters'),
    name        : 'filtergrid',
    columnLines : true,
    rowLines: true,
    useArrows: true,
    rootVisible: false,
    columns : [{
        text     : 'Add',
        text     : '',
        align  : 'center',
        resizable : false,
        xtype  : 'actioncolumn',
        locked    : true,
        width  : 30,
        items  : [{
            getClass : function (v, meta, rec) {
                return rec.getDepth() < 3 ? 'add' : '';
            },
            tooltip  : 'Add',
        }],
    },{
        xtype     : 'treecolumn',
        text      : 'Filter',
        locked    : true,
        resizable : false,
        width     : 250,
        dataIndex : 'name',
        /*
        renderer: function (value, metaData, record) {
            return '<div>' + value + 
                '<img style="position:absolute;left:406px"' + 
                ' src="resources/images/pencil.png"/></div>';
        },
        */
    },{
        text  : 'Apply',
        xtype : 'actioncolumn',
        align : 'center',
        width : 44,
        items : [{
            getClass : function (v, meta, rec) {
                return 'filter';
            },
            tooltip  : 'Apply',
        }]
    },{
        resizable : false,
        text      : 'Accounts',
        align     : 'right',
        width     : 90,
        dataIndex : 'count',
    },{
        text  : 'Export',
        xtype : 'actioncolumn',
        align : 'center',
        width : 44,
        items  : [{
            getClass : function (v, meta, rec) {
                return 'export';
            },
            tooltip  : 'Export',
        }],
    },{
        text      : 'Exported as ...',
        text      : '... As',
        resizable : false,
        width     : 180,
        dataIndex : 'exportfile',
    },{
        align     : 'center',
        width     : 70,
        resizable : false,
        summaryType: 'max',
        renderer: Ext.util.Format.dateRenderer('m/d/Y'),
        field: {
            xtype: 'datefield'
        },
        text      : 'Exported',
        dataIndex : 'exported',
    },{
        align     : 'center',
        width     : 70,
        resizable : false,
        summaryType: 'max',
        renderer: Ext.util.Format.dateRenderer('m/d/Y'),
        field: {
            xtype: 'datefield'
        },
        text      : 'Modified',
        dataIndex : 'modified',
    },{
        text     : '',
        align  : 'center',
        resizable : false,
        xtype  : 'actioncolumn',
        width  : 30,
        items  : [{
            getClass : function (v, meta, rec) {
                return 'delete';
            },
            tooltip  : 'Delete',
        }],
    }],
});
