var vm = new Vue({
    el: 'main',
    methods: {
        markDone: function () {
            this.order = info_form();
        }
    },
    data: {
        burgers,
        order: null,
    },
});


// new Vue({
//     el: '#infoSection',

//     data: {


//     }
// });

/*
new Vue({
    el: '#infoSection',
    data: {
        let: infoArray = info_form(),
    }
})
*/