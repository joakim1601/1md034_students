var vm = new Vue({
    el: '#burgerSection',
    data: {
        burgers
    }
});

new Vue({
    el: '#submit',
    methods: {
        markDone: function () {
            console.log(info_form());
        }
    },
    data: {
        info_form()
    }
});