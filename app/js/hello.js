/**
 * Created by edwin on 2015/12/26.
 */
var data = {
    message: 'Hello Vue.js!'
}

var demo = new Vue({
    el: '#demo',
    data: data
});

var myCompoment = Vue.extend({
    template:"<p>{{msg}}</p>",
    paramAttributes:['msg']
});

Vue.component('mycom',myCompoment);