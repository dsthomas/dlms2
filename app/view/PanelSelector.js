Ext.define('lvm.view.serviceTabs.ServiceTabs', {
    extend: 'Ext.tab.Panel',
    alias: 'widget.servicetabs',
    name: 'servicetabs',
    ui: 'bigtabs',
    //id: 'MainPanel',
    name:'servicetabs',
    //style: 'background:#dfe8f6',
    border: false,
    padding: '0 0 0 0',
    tabBar: {
        //padding: '0 0 0 0',
        height: 69,
        //style: 'background:#dfe8f6',
    },
    listeners: {
        afterrender: function (panel) {
            var bar = panel.tabBar;
            bar.insert(12, [{ xtype: 'tbfill', },{
                xtype: 'infouserbuttongroup',
                border: false,
            }]);
        },
        render: function () {
            var me = this;
            this.items.each(function (panel) {
                panel.tab.on('click', function () {
                    me.fireEvent('tabclick', me, panel);
                });
            });
        }
    },
    defaults: {
        border: false,
        bodyBorder: false,
    },
    /*
    layout: { overflowHandler: 'Menu' },
    enableOverflow: true,
    titleAlign: 'left',
    maxTabWidth:101,
    minTabWidth:101,
    resizeTabs: true,
    plain: true,
    */
    items : [], // added dynamically onLaunch, Main.js
    
    /*
    items : [{
        xtype : 'logicmainpanel',
    },{
        xtype : 'wfma-mainpanel',
    },{
        xtype : 'dlm-mainpanel',
    },{
        xtype : 'dialctrl-mainpanel',
    }],
*/
});
