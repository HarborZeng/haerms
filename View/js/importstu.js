var _row = 0;

function createnewrow()
{
    var thistable = document.getElementById('stutable')
    _row = _row + 1
    var forminput = document.getElementsByTagName('input')
    var formvalue = []
    for (var i = 0; i < forminput.length; i++) {
        formvalue.push(forminput[i].value)
    }
    thistable.innerHTML =   '<tr id="table_head">\
                                <th>姓名</th>\
                                <th>学号</th>\
                                <th>班级</th>\
                            </tr>'
    for (var i = 0; i < _row-1; i++) {
        var tr_id = i + 1
        thistable.innerHTML = thistable.innerHTML + '<tr id="' + tr_id + '">\
                                                        <td><input type="text" name="stuname" value="'+ formvalue[i*3+0] +'"></td>\
                                                        <td><input type="text" name="stuid" value="' + formvalue[i*3+1] + '"></td>\
                                                        <td><input type="text" name="stuclass" value="' + formvalue[i*3+2] + '"></td>\
                                                    </tr>'
    }
    thistable.innerHTML = thistable.innerHTML + '<tr id="' + _row.toString() + '">\
                                                    <td><input type="text" name="stuname" value=""></td>\
                                                    <td><input type="text" name="stuid" value=""></td>\
                                                    <td><input type="text" name="stuclass" value=""></td>\
                                                </tr>'
}

function deleteblankrow()
{
    var thistable = document.getElementById('stutable')
    var trlist = document.getElementsByTagName('tr')
    for (var i = 1; i < trlist.length;) {
        var temptr = trlist[i]
        var inputlist = temptr.getElementsByTagName('input')
        var flag = true
        for (var j = 0; j < inputlist.length; j++) {
            if (inputlist[j].value != '') {
                flag = false
                break
            }
        }
        if(flag) {
            thistable.removeChild(temptr)
            _row = _row - 1
        }
        else {
            i++
        }
    }
}

function checknulldata()
{
    var inputlist = document.getElementsByTagName('input')
    for (var i = 0; i < inputlist.length; i++) {
        if(inputlist[i].value == '')
        {
            alert('请填满所有表格')
            return false
        }
    }
    if(inputlist.length == 0) {
        alert('请添加学生信息')
        return false
    }
    return true
}
