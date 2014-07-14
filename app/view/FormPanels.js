Ext.define('dlmsprint2a.view.EditorForm', {
    extend: 'Ext.form.Panel',
    alias: 'widget.editorform',
    //store: Ext.create('dlm.store.DlmFilesStore'),
    name: 'editorform',
    //xborder: false,
    //title: 'Editor',
    
    items: [{
        text: 'Filter', 
        width: 200,
    },{ 
        text: 'Export Template', 
        width: 180, 
    },{ 
        text: 'Description', 
        flex: 1,
    }],
});
