function RegExp(str){
    this.isNum = isNum;
    this.isInt = isInt;
    this.isTime = isTime;
    this.isDate = isDate;
    this.isEmail = isEmail;
    this.trim = trim;
    this.strlen = strlen;
    this.isTell = isTell;
    this.isPostcode = isPostcode;
    this.isInt1 = isInt1;
    this.isQQ = isQQ;
    this.isIdcard = isIdcard;
    this.checknull = checknull;
    this.checkChar = checkChar;
}

function isNum(str){
    return !isNaN(str);
}

function isInt(str){
    var result=str.match(/^(-|\+)?\d+$/);
    if(result==null) return false;
    return true;
}

function isTime(str)
{
    var result=str.match(/^(\d{4})(-|\/)(\d{1,2})\2(\d{1,2}) (\d{1,2}):(\d{1,2}):(\d{1,2})$/);
    if(result==null) return false;
    var d= new Date(result[1], result[3]-1, result[4], result[5], result[6], result[7]);
    return (d.getFullYear()==result[1]&&(d.getMonth()+1)==result[3]&&d.getDate()==result[4]&&d.getHours()==result[5]&&d.getMinutes()==result[6]&&d.getSeconds()==result[7]);
}

function isDate(str){
    var result=str.match(/^(\d{4})(-|\/)(\d{1,2})\2(\d{1,2})$/);
    if(result==null) return false;
    var d=new Date(result[1], result[3]-1, result[4]);
    return (d.getFullYear()==result[1] && d.getMonth()+1==result[3] && d.getDate()==result[4]);
}

function isEmail(str)
{
    var result=str.match(/^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/);
    if(result==null) return false;
    return true;
}

// 去除字符串的首尾的空格
function trim(str){
    return str.replace(/(^\s*)|(\s*$)/g, "");
}

// 返回字符串的实际长度, 一个汉字算2个长度
function strlen(str){
    return str.replace(/[^\x00-\xff]/g, "**").length;
}

//匹配国内电话号码
function isTell(str)
{
    var result=str.match(/\d{3}-\d{8}|\d{4}-\d{7}/);
    if(result==null) return false;
    return true;
}

//匹配中国邮政编码(6位)
function isPostcode(str)
{
    var result=str.match(/[1-9]\d{5}(?!\d)/);
    if(result==null) return false;
    return true;
}

//校验是否为(0-10000)的整数
function isInt1(str)
{
    var result=str.match(/^[0-9]$|^([1-9])([0-9]){0,3}$|^10000$/);
    if(result==null) return false;
    return true;
}

//匹配腾讯QQ号
function isQQ(str)
{
    var result=str.match(/[1-9][0-9]{4,}/);
    if(result==null) return false;
    return true;
}

//匹配身份证(15位或18位)
function isIdcard(str)
{
    var result=str.match(/\d{15}|\d{18}/);
    if(result==null) return false;
    return true;
}

//校验文本是否为空
function checknull(field,sval)
{
    if (field.value =="")
    {
        alert("请填写" + sval + "！");
        field.focus();
        return false;
    }
    return true;
}

//屏蔽输入字符,在文本框中加上 onkeypress="return checkChar()"
function checkChar()
{
    var keycode = event.keyCode;
    if(!(keycode>=48&&keycode<=57))
    {
        return false;
    }
}