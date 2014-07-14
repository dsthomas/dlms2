Ext.define('dlmsprint2a.view.EditorForm', {
    extend: 'Ext.form.Panel',
    alias: 'widget.editorform',
    //store: Ext.create('dlm.store.DlmFilesStore'),
    name: 'editorform',
    //xborder: false,
    //title: 'Editor',
    
    bodyStyle: 'padding:5px 5px 0',
    width: 600,
    fieldDefaults: {
        labelAlign: 'top',
        msgTarget: 'side'
    },
    defaults: {
        border: false,
        xtype: 'panel',
        flex: 1,
        layout: 'anchor'
    },
    
    layout: 'hbox',
    items: [{
        items: [{
            xtype: 'textfield',
            name: 'textfield1',
            fieldLabel: 'Filter',
            value: 'Text field value',
            //anchor: '-5',
        },{
            xtype: 'textfield',
            name: 'textfield2',
            fieldLabel: 'Export Template',
            value: 'lobal.DAT',
            //anchor: '-5',
        }]
    }, {
        items: [{
            xtype: 'textareafield',
            name: 'textarea1',
            fieldLabel: 'Desciption',
            value: 'asdf asdf asdf a',
            //anchor: '100%',
        }]
    }],
});
