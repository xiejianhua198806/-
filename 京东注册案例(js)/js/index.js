/*--------------------------验证用户名操作------------------------------*/
var userName = document.getElementById("userName");
userName.onfocus = checkUserName;

userName.onblur = checkUserName;

userName.onkeyup = checkUserName;

//返回boolean值 表示验证是否通过
function checkUserName(e) {
	var _e = window.event || e; //事件对象（可以用来保存当前正在执行的当前事件的信息）
	//_e.type   返回的是事件的名字
	var v = userName.value; //当前用户名的内容
	var box = userName.parentNode; //表单项
	var tip = box.nextElementSibling; //提示信息项
	var span = tip.lastElementChild; //span

	if(_e.type == "focus") { //获取焦点
		if(v.length == 0) { //空
			box.className = "box";
			tip.className = "tip default";
			span.innerHTML = "支持汉字、数字、字母、-、_的组合，4-20个字符";
		}

	} else if(_e.type == "blur") { //失去焦点
		if(v.length == 0) { //空
			box.className = "box";
			tip.className = "tip hide";
		}
	} else { //用户输入时
		if(v.length == 0) { //用户名为空
			box.className = "box error";
			tip.className = "tip error";
			span.innerHTML = "请输入用户名";
		} else { //用户名不为空
			var reg = /^[\u4e00-\u9fa5\w-]+$/; //验证用户名的格式
			if(reg.test(v)) { //格式正确
				if(v.length >= 4 && v.length <= 20) { //长度符合
					box.className = "box right";
					tip.className = "tip hide";
					return true;
				} else { //长度不符合
					box.className = "box error";
					tip.className = "tip error";
					span.innerHTML = "长度4-20个字符";
				}
			} else { //格式不正确
				box.className = "box error";
				tip.className = "tip error";
				span.innerHTML = " 格式错误，仅支持汉字、字母、数字、“-”“_”的组合，4-20个字符";
			}
		}

	}

}
/*--------------------------密码名操作------------------------------*/
var pwd = document.getElementById("pwd"); //密码框节点对象
pwd.onfocus = checkPwd;

pwd.onblur = checkPwd;

pwd.onkeyup = checkPwd;

function checkPwd(e) {
	var _e = window.event || e; //事件对象（可以用来保存当前正在执行的当前事件的信息）
	var vOne = pwd.value;
	var box = pwd.parentNode;
	var tip = box.nextElementSibling;
	var span = tip.lastElementChild;

	if(_e.type == "focus") { //获取焦点
		if(vOne.length == 0) { //空
			box.className = "box";
			tip.className = "tip default";
			span.innerHTML = "建议使用数字、字母、特殊符号两种以上的组合，6-20个字符";
		}

	} else if(_e.type == "blur") { //失去焦点
		if(vOne.length == 0) { //空
			box.className = "box";
			tip.className = "tip hide";
		}
	} else { //用户输入时
		if(vOne.length == 0) { //密码为空
			box.className = "box error";
			tip.className = "tip error";
			span.innerHTML = "请输入密码";
		} else { //密码不为空
			if(vOne.length >= 6 && vOne.length <= 20) { //通过校验
				box.className = "box right";

				//密码强度提示
				var level = getLevel(vOne);
				switch(level) {
					case 1:
						tip.className = "tip ruo";
						span.innerHTML = '有被盗风险,建议使用字母、数字和符号两种及以上组合';
						break;
					case 2:
						tip.className = "tip zhong";
						span.innerHTML = '安全强度适中，可以使用三种以上的组合来提高安全强度';
						break;
					case 3:
						tip.className = "tip qiang";
						span.innerHTML = '你的密码很安全';
						break;
				}
				return true;

			} else { //没有通过
				box.className = "box error";
				tip.className = "tip error";
				span.innerHTML = "密码长度6-20个";
			}
		}

	}
}
/*
 	检测密码强度
 	弱      1
 	中      2
 	强      3
 */
function getLevel(str) {
	var regNumber = /\d+/; //数字
	var regWord = /[a-zA-Z]+/; //字母
	var regOther = /[^a-zA-Z\d]+/; //其他
	var level = 0;
	if(regNumber.test(str)) {
		level++;
	}

	if(regWord.test(str)) {
		level++;
	}

	if(regOther.test(str)) {
		level++;
	}
	return level;
}

/*--------------------------确认密码操作------------------------------*/
var pwdT = document.getElementById("pwdT");

pwdT.onfocus = checkpwdT;

pwdT.onblur = checkpwdT;

pwdT.onkeyup = checkpwdT;

//返回boolean值 表示验证是否通过
function checkpwdT(e) {
	var _e = window.event || e; //事件对象（可以用来保存当前正在执行的当前事件的信息）
	var vTow = pwdT.value;
	var vone = pwd.value;
	var box = pwdT.parentNode;
	var tip = box.nextElementSibling;
	var span = tip.lastElementChild;

	if(_e.type == "focus") { //获取焦点
		if(vTow.length == 0) { //空
			box.className = "box";
			tip.className = "tip default";
			span.innerHTML = "请再次输入密码";
		}

	} else if(_e.type == "blur") { //失去焦点
		if(vTow.length == 0) { //空
			box.className = "box";
			tip.className = "tip hide";
		}
	} else { //用户输入时
		if(vTow.length == 0) { //用户名为空
			box.className = "box error";
			tip.className = "tip error";
			span.innerHTML = "请输和上次一样的密码2";
		} else { //用户名不为空
			if(vTow == vone) {
				box.className = "box right";
				tip.className = "tip hide";
				return true;
			} else {
				box.className = "box error";
				tip.className = "tip error";
				span.innerHTML = "请输和上次一样的密码";
			}

		}

	}

}

/*--------------------------邮箱名操作------------------------------*/
var email = document.getElementById("email");
email.onfocus = checkUserEmail;

email.onblur = checkUserEmail;

email.onkeyup = checkUserEmail;

//返回boolean值 表示验证是否通过
function checkUserEmail(e) {
	var _e = window.event || e; //事件对象（可以用来保存当前正在执行的当前事件的信息）
	var v = email.value;
	var box = email.parentNode;
	var tip = box.nextElementSibling;
	var span = tip.lastElementChild;

	if(_e.type == "focus") { //获取焦点
		if(v.length == 0) { //空
			box.className = "box";
			tip.className = "tip default";
			span.innerHTML = "完成验证后，你可以用该邮箱登录和找回密码";
		}

	} else if(_e.type == "blur") { //失去焦点
		if(v.length == 0) { //空
			box.className = "box";
			tip.className = "tip hide";
		}
	} else { //用户输入时
		if(v.length == 0) { //用户名为空
			box.className = "box error";
			tip.className = "tip error";
			span.innerHTML = "请输入正确的邮箱名";
		} else { //用户名不为空
			var reg = /^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/; //验证邮箱的格式
			if(reg.test(v)) { //格式正确
				if(v.length >= 10 && v.length <= 30) { //长度符合
					box.className = "box right";
					tip.className = "tip hide";
					return true;
				} else { //长度不符合
					box.className = "box error";
					tip.className = "tip error";
					span.innerHTML = "长度10-30个字符";
				}
			} else { //格式不正确
				box.className = "box error";
				tip.className = "tip error";
				span.innerHTML = "仅支持、字母、数字、“-”“_”的组合";
			}
		}

	}

}
/*--------------------------手机号码名操作------------------------------*/
var mobile = document.getElementById("mobile");
mobile.onfocus = checkUserMobile;

mobile.onblur = checkUserMobile;

mobile.onkeyup = checkUserMobile;

//返回boolean值 表示验证是否通过
function checkUserMobile(e) {
	var _e = window.event || e; //事件对象（可以用来保存当前正在执行的当前事件的信息）
	var v = mobile.value;
	var box = mobile.parentNode;
	var tip = box.nextElementSibling;
	var span = tip.lastElementChild;

	if(_e.type == "focus") { //获取焦点
		if(v.length == 0) { //空
			box.className = "box";
			tip.className = "tip default";
			span.innerHTML = "仅支持大陆11位手机号";
		}

	} else if(_e.type == "blur") { //失去焦点
		if(v.length == 0) { //空
			box.className = "box";
			tip.className = "tip hide";
		}
	} else { //用户输入时
		if(v.length == 0) { //用户名为空
			box.className = "box error";
			tip.className = "tip error";
			span.innerHTML = "请输入常用手机号";
		} else { //用户名不为空
			var reg = /^0{0,1}(13[0-9]|15[7-9]|153|156|18[7-9])[0-9]{8}$/; //验证用户名的格式
			if(reg.test(v)) { //格式正确
				if(v.length == 11) { //长度符合
					box.className = "box right";
					tip.className = "tip hide";
					return true;
				} else { //长度不符合
					box.className = "box error";
					tip.className = "tip error";
					span.innerHTML = "长度不符合标准";
				}
			} else { //格式不正确
				box.className = "box error";
				tip.className = "tip error";
				span.innerHTML = "请输入以1开头的十一位数字组合 ";
			}
		}

	}

}
/*--------------------------注册协议操作------------------------------*/
var ck = document.getElementById('ck');

function checkInput(e) {
	var _e = window.event || e;
	if(ck.checked) {
		return true;
	}
}

/*--------------------------密码名操作------------------------------*/
var btn = document.getElementById("btn");
btn.onclick = function() {
	if(checkUserName() && checkPwd() && checkpwdT() && checkUserEmail() && checkUserMobile()&&checkInput()) {
		alert("可以注册")
	} else {
		alert('请检查相关信息是否填写完全')
	}
}