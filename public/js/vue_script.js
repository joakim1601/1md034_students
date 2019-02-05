var vm = new Vue({
    el: '#burgerSection',
    data: {
        burgers,
    }
});


new Vue({
    el: '#infoSection',
    methods: {
        markDone: function () {
            this.order = info_form();
        }
    },
    data: {
        order: null,
    }
});

/*
new Vue({
    el: '#infoSection',
    data: {
        let: infoArray = info_form(),
    }
})
*/