function checkLen2(obj){
    var maxChars = 11;//最多字符数
    if (obj.value.length > maxChars){
        alert("最多输入11个字符，现已超出限制，自动截取前30个字符！");
        obj.value = obj.value.substring(0,maxChars);
    }
} 