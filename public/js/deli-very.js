/*jslint es5:true, indent: 2 */
/*global Vue, io */
/* exported vm */
'use strict';
var socket = io();

var vm2 = new Vue({
  el: 'main',
  data: {
    orders: {},
    order: null,
    checkedBurgers: null,
    burgers,
    tempOrder: "T",
  },

  methods: {
    getNext: function () {
      var lastOrder = Object.keys(this.orders).reduce(function (last, next) {
        return Math.max(last, next);
      }, 0);
      return lastOrder + 1;
    },
    displayOrder: function (event) {
      var offset = {
        x: event.currentTarget.getBoundingClientRect().left,
        y: event.currentTarget.getBoundingClientRect().top
      };
      this.orders = [{
        orderId: this.tempOrder,
        details: {
          x: event.clientX - 10 - offset.x,
          y: event.clientY - 10 - offset.y
        },
      }];
    },

    addOrder: function () {

      this.order = info_form();
      this.checkedBurgers = [...document.querySelectorAll('#burgerSection input:checked')].map(x => x.value);
      socket.emit("addOrder", {
        //orderId: this.orders[0].orderId,
        details: this.orders[0].details,
        orderInfo: this.order,

        orderItems: this.checkedBurgers,

      });
    }
  }
});