/**
 * Created by edwin on 2015/12/26.
 */

var vue = new Vue({
    el: '#demo',
    data: {
        msg: 'Hello Vue.js!',
        arr:[{msg:'A'},{msg:'B'}]
    },
    methods:{
        reverseMessage:function(){
            this.msg = this.msg.split('').reverse().join('');
        }
    }
});

var myCompoment = Vue.extend({
    template:"<p>{{msg}}</p>",
    paramAttributes:['msg']
});

Vue.component('mycom',myCompoment);



