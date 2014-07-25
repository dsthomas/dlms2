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
                return rec.getDepth() < 3 ? 'add' : 'copy';
            },
            tooltip  : 'Add',
        }],
    },{
        xtype     : 'treecolumn',
        text      : 'Filter',
        locked    : true,
        resizable : false,
        width     : 210,
        dataIndex : 'name',
        /*
        renderer: function (value, metaData, record) {
            return '<div>' + value + 
                '<img style="position:absolute;left:406px"' + 
                ' src="resources/images/pencil.png"/></div>';
        },
        */
    },{
        text  : 'Automatic',
        columns : [{
            xtype     : 'checkcolumn',
            text      : 'Enable',
            align     : 'center',
            width     : 44,
            //dataIndex : 'stamp',
        },{
            text: 'Mo Tu We Th Fr',
            xtype: 'actioncolumn',
            align: 'center',
            width: 90,
            defaults : {
                //width: 16,
            },
            items: [{
                tooltip: 'Sort spec',
                getClass: function (v, meta, rec) {
                    return rec.getDepth() > 2 ? 'checkbox' : '';
                },
            },{
                tooltip: 'Sort spec',
                getClass: function (v, meta, rec) {
                    return rec.getDepth() > 2 ? 'checkbox' : '';
                },
            },{
                tooltip: 'Sort spec',
                getClass: function (v, meta, rec) {
                    return rec.getDepth() > 2 ? 'checkbox' : '';
                },
            },{
                tooltip: 'Sort spec',
                getClass: function (v, meta, rec) {
                    return rec.getDepth() > 2 ? 'checkbox' : '';
                },
            },{
                tooltip: 'Sort spec',
                getClass: function (v, meta, rec) {
                    return rec.getDepth() > 2 ? 'checkbox' : '';
                },
            }]
        },{
            text: 'Sa Su',
            xtype: 'actioncolumn',
            align: 'center',
            width: 40,
            defaults : {
                //width: 16,
            },
            items : [{
                tooltip: 'Clause',
                getClass: function (v, meta, rec) {
                    return rec.getDepth() > 2 ? 'checkbox' : '';
                },
            },{
                getClass: function (v, meta, rec) {
                    return rec.getDepth() > 2 ? 'checkbox' : '';
                },
                getTip: function (v, meta, rec) {
                    return 'condition2';
                },
            }],
        },{
            text  : 'Time',
            //xtype : 'timefield',
            align : 'center',
            width : 42,
            dataIndex : 'time',
        }],
    },{
        text  : 'Manual',
        columns : [{
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
        }],
    },{
        text      : 'Result',
        columns   : [{
            resizable : false,
            text      : 'Accounts',
            align     : 'right',
            width     : 60,
            dataIndex : 'count',
        },{
            text      : '... As',
            text      : 'Export File',
            resizable : false,
            width     : 140,
            dataIndex : 'exportfile',
        },{
            text  : 'D/L',
            xtype : 'actioncolumn',
            align : 'center',
            width : 27,
            items : [{
                getClass : function (v, meta, rec) {
                    return rec.get('exportfile') ? 'download' : '';
                },
                tooltip  : 'Download',
            }],
        }],
    },{
        text: 'Track',
        defaults: {
            width : 100,
            align     : 'center',
            resizable : false,
            summaryType: 'max',
            //renderer: Ext.util.Format.dateRenderer('m/d/Y HH:MM'),
            field: {
                xtype: 'datefield'
            },
        },
        columns : [{
            text      : 'Exported',
            dataIndex : 'exported',
        },{
            text      : 'Modified',
            dataIndex : 'modified',
        }],
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
