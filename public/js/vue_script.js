var vm = new Vue({
    el: '#burgerSection',
    data: {
        burgers,
    }   
});


new Vue({
    el: '#submit',
    methods: {
        markDone: function () {
            console.log(info_form());
        }
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