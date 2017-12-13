/**
 *
 * Created by Administrator on 2017/12/12.
 */
function Modify(editText) {
    this.tr_head = document.getElementsByTagName('tr')[0];
    this.table = document.getElementsByTagName('table')[0];
    this.editText = editText;
}
Modify.prototype.newAccount = function (td) {
    var input = document.createElement('input');
    input.type = 'text';
    input.className = 'createText';
    if(arguments.length == 2) {
        input.value = arguments[1];
    }
    td.appendChild(input);
}
Modify.prototype.modifyAccount = function(a) {
    var tr = a.parentNode.parentNode;
    var tds = tr.getElementsByTagName('td');
    for(var i=0; i<tds.length-this.editText.length; i++) {
        var text = tds[i].textContent;
        tds[i].textContent = '';
        this.newAccount(tds[i], text);
    }
}


function Create(editText) {
    Modify.call(this, editText);
    this.tds_head = this.tr_head.getElementsByTagName('td');
}
for(var i in Modify.prototype) {
    Create.prototype[i] = Modify.prototype[i];
}
Create.prototype.create = function () {
    this.tds_head = this.tr_head.getElementsByTagName('td');
    this.table = document.getElementsByTagName('table')[0];
    var tr = document.createElement('tr');
    for (var i = 0; i < this.tds_head.length; i++) {
        var td = document.createElement('td');
        if(i<this.tds_head.length-this.editText.length) {
            this.newAccount(td);
        }
        tr.appendChild(td);
    }
    this.table.appendChild(tr);
}



function Submit(editText) {
    Modify.call(this, editText);
    this.input = document.getElementsByClassName('createText');
    this.check = true;
    this.tds = document.getElementsByTagName('td');
    this.flag = 0;
    this.visit = false;
}
for(var i in Modify.prototype) {
    Submit.prototype[i] = Modify.prototype[i];
}
Submit.prototype.submit = function () {
    var _this = this;
    for(var i=0; i<this.input.length; i++) {

        if(!this.input[i].value) {
            this.check = false;
        }
    }
    if(!this.check) {
        alert("请补全信息");
    } else {
        for(var i=0; i<this.tds.length; i++) {
            this.visit = true;
            var input = this.tds[i].getElementsByClassName('createText')[0];
            if(input) {
                var text = input.value;
                this.tds[i].removeChild(input);
                this.tds[i].textContent = text;
            } else {
                if(this.tds[i].parentNode != this.tr_head) {
                    if(!this.tds[i].textContent) {
                        var a = document.createElement('a');
                        a.href = 'javascript:';
                        switch (this.flag%this.editText.length) {
                            case 0: a.textContent = '修改'; a.className="modify";                                  a.addEventListener("click", (function() {
                                return function () {
                                    _this.modifyAccount(this);
                                }
                            })(this), false); break;
                            case 1: a.textContent = '冻结'; a.className="froze"; a.addEventListener("click", (function() {
                                return function () {
                                    new Froze().froze(this);
                                }
                            })(this), false); break;
                            case 2: a.textContent = '重置口令'; a.className="reset"; break;
                        }
                        this.tds[i].appendChild(a);
                        this.flag++;
                    }
                }
            }
        }
    }
}



function Delete() {
    Modify.call(this, '');
    this.tds = document.getElementsByTagName('td');
}
for(var i in Modify.prototype) {
    Delete.prototype[i] = Modify.prototype[i];
}
Delete.prototype.delete = function () {
    for(var i=0; i<this.tds.length; i++) {
        if(this.tds[i].parentNode != this.tr_head) {
            if(!this.tds[i].textContent) {
                this.table.removeChild(this.tds[i].parentNode);
            }
        }
    }
}



function Froze() {
    Modify.call(this, '');
}
Froze.prototype.froze = function (a) {
    var tr = a.parentNode.parentNode;
    var tds = tr.getElementsByTagName('td');
    for(var i=0; i<tds.length; i++) {
        tds[i].style.background = '#eeeeee';
        tds[i].style.color = '#ccc';
    }
    var as = tr.getElementsByTagName('a');
    for(var i=0; i<as.length; i++) {
        as[i].className = 'disabled';
    }
}

