$(document).ready(function() {
    // 显示登录区域
   $('#show-login').click(function() {
     $('#login-form').slideToggle();
     // 使用slideToggle动画显示或隐藏登录区域
});
// 检查用户输入信息格式(这里仅做简单演示，实际中可能需要更复杂的验证)
$('#submit-login').click(function(e)
{e.preventDefault(); 
// 阻止表单默认的提交行为
var username =$(#username').val().trim();
var password =$('#password').val().trim();

// 假设用户名至少要有4个字符，密码至少要有6个字符
if(username.length < 4){
alert('用户名至少要有4个字符");
return;
}

if(password.length < 6){
alert("密码至少要有6个字符”);
return;
}

//如果验证通过，可以执行登录逻辑(这里只是打印到控制台)
console.log("登录成功: 用户名='+ username +'密码='+ password);
});
});