Ext.define('dlmsprint2a.store.Filters', {
    extend : 'Ext.data.TreeStore',
    requires : 'dlmsprint2a.model.Filters',
    model : 'dlmsprint2a.model.Filters',
    autoLoad : true,
    proxy : {
        type : 'ajax',
        url : 'resources/data/filters.json',
        reader : {
            type : 'json',
            root : 'kids',
        }
    },
    groupField: 'listProcessor',
});
