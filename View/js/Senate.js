/**
 * Created by Administrator on 2017/12/11.
 */
var button_create = document.getElementsByClassName('button_create')[0];
var button_submit = document.getElementsByClassName('button_submit')[0];
var button_delete = document.getElementsByClassName('button_delete')[0];
var nav = document.getElementsByClassName('navbar')[0];
var nav_a = nav.getElementsByTagName('a');
var editText = null;
for(var i=0; i<nav_a.length; i++) {
    if(nav_a[0].style.color == 'blue') {
        editText = ['修改', '冻结', '重置口令'];
        break;
    } else {
        editText = ['修改'];
        break;
    }
}

button_create.addEventListener("click", (function () {
    return function () {
        new Create(editText).create();
    }
})(), false);
button_submit.addEventListener("click", (function () {
    return function () {
        new Submit(editText).submit();
    }
})(), false);
button_delete.addEventListener("click", (function () {
    return function () {
        new Delete().delete();
    }
})(), false);
