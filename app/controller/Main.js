Ext.define('dlmsprint2a.controller.Main', {
    extend: 'Ext.app.Controller',

    PANELS_BTN2CARD : {
        accounts : 0, 
        uploads  : 1,
        editor   : 2, 
        exports  : 3, 
    },


    refs : [{
/*
        selector : 'button[name=editorbtn]',
        ref : 'editorBtn'
    },{
*/
        selector : 'panel[name=mainpanel]',
        ref : 'mainPanel'
    },{
        selector : 'panel[name=filtergrid]',
        ref : 'filterGrid'
    }],


    init : function() {
        console.log('Main.init()');

        this.control({
            'button[name=accountsbtn]' : { toggle : this.onTogglePanelBtn },
            'button[name=uploadsbtn]'  : { toggle : this.onTogglePanelBtn },
            'button[name=editorbtn]'   : { toggle : this.onTogglePanelBtn },
            'button[name=exportsbtn]'  : { toggle : this.onTogglePanelBtn },
        });
    },

    onTogglePanelBtn : function (btn, pressed) {
        var panel = btn.name.replace(/btn$/, '');
        this.deToggleOtherPanelBtns(panel);        
        var mainpanel  = this.getMainPanel();
        var filtergrid = this.getFilterGrid();
        var cols = filtergrid.getView().headerCt.getGridColumns();
        if (panel == 'exports') {
            mainpanel.getLayout().setActiveItem(this.PANELS_BTN2CARD[panel]);
            //mainpanel.hide();
            filtergrid.setWidth(811);
            for (var i = 2; i < cols.length; i++) {
                cols[i].setVisible(true);
            }
        } else {
            mainpanel.getLayout().setActiveItem(this.PANELS_BTN2CARD[panel]);
            //mainpanel.show();
            filtergrid.setWidth(283);
            for (var i = 2; i < cols.length; i++) {
                cols[i].setVisible(false);
            }
        }
    },
    deToggleOtherPanelBtns : function (btnName) {
        for (panel in this.PANELS_BTN2CARD) { 
            if (panel == btnName) { continue; }
            var btn = Ext.ComponentQuery.query(
                '[name=' + panel + 'btn]')[0];
            btn.toggle(false, true);
        }
    },
});
