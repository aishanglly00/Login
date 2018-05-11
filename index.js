$(document).ready(function() {
	$(".login-pattern li").each(function(index) {
		var liNode = $(this);
		$(this).on("click", function() {
			$(".login-pattern li.selected").removeClass("selected");
			liNode.addClass("selected");
			$("#login-tab .login-default").removeClass("login-default");
			$("#login-tab").children().eq(index).addClass("login-default");
		});
	});

	$(".QRcode-content").mouseover(function() {
		timeoutid = setTimeout(function() {
			$("span.QRcode-demo").css("display", "block");
		}, 500);
	}).mouseout(function() {
		clearTimeout(timeoutid);
		$("span.QRcode-demo").css("display", "none");
	});

	var LoginUsername = $("#login-username");
	var LoginPassword = $("#login-password");
	var delUsername = $(".delUsername");
	LoginUsername.on("input", function() {
		if(LoginUsername.val() != "" || LoginUsername.val() != null) {
			delUsername.css("display", "block");
		}
	});
	LoginUsername.on("keyup", function() {
		if(LoginUsername.val() == "" || LoginUsername.val() == null) {
			delUsername.css("display", "none");
		}
	});
	delUsername.on("click", function() {
		LoginUsername.val("").focus();
		delUsername.css("display", "none");
		$("#login-hint").text("请输入正确的账号！");
		delhint();
	});

	function delhint() {
		setTimeout("$('#login-hint').empty()", 5000);
	};

	$("#login-btn").on("click", function() {
		if(LoginUsername.val() == "" || LoginUsername.val() == null) {
			$("#login-hint").text("你还没有输入账号！");
			delhint();
		} else if(LoginPassword.val() == "" || LoginPassword.val() == null) {
			$("#login-hint").text("你还没有输入密码！");
			delhint();
		}
	});

	var enUserId = $("#en-username");
	var userReg = /^[A-Za-z]\w{5,17}$/;
	enUserId.on("blur", function() {
		if(enUserId.val() != "" && !userReg.exec(enUserId.val())) {
			enUserId.addClass("en_warning");
			$("p.hint_0_default").removeClass("caution");
			$("p.hint_0_warning").addClass("caution");
		}
		if(userReg.exec(enUserId.val())) {
			$("p.hint_0_default").removeClass("caution");
			$("p.hint_0_succeed").addClass("caution");
		}
	});
	enUserId.on("focus", function() {
		enUserId.removeClass("en_warning");
		$("p.hint_0_warning").removeClass("caution");
		$("p.hint_0_succeed").removeClass("caution");
		$("p.hint_0_default").addClass("caution");
	});

	var enpwId = $("#en-password");
	var pwReg = /^\w{6,16}$/;
	enpwId.on("blur", function() {
		if(!pwReg.exec(enpwId.val()) && enpwId.val() != "") {
			enpwId.addClass("en_warning");
			$("p.hint_1_default").removeClass("caution");
			$("p.hint_1_warning").addClass("caution");
		}
		if(pwReg.exec(enpwId.val())) {
			$("p.hint_1_default").removeClass("caution");
			$("p.hint_1_succeed").addClass("caution");
		}
	});
	enpwId.on("focus", function() {
		enpwId.removeClass("en_warning");
		$("p.hint_1_warning").removeClass("caution");
		$("p.hint_1_succeed").removeClass("caution");
		$("p.hint_1_default").addClass("caution");
	});

	var checkpw = $("#checkpassword");
	checkpw.on("blur", function() {
		if(checkpw.val() != enpwId.val() && checkpw.val() != "") {
			checkpw.addClass("en_warning");
			$("p.hint_2_default").removeClass("caution");
			$("p.hint_2_warning").addClass("caution");
		}
		if(checkpw.val() == enpwId.val() && checkpw.val() != "") {
			$("p.hint_2_default").removeClass("caution");
			$("p.hint_2_succeed").addClass("caution");
		}
	});
	checkpw.on("focus", function() {
		checkpw.removeClass("en_warning");
		$("p.hint_2_warning").removeClass("caution");
		$("p.hint_2_succeed").removeClass("caution");
		$("p.hint_2_default").addClass("caution");
	});

	var telNum = $("#telephone");
	var telReg = /^1[3|4|5|7|8][0-9]\d{8}$/;
	telNum.on("blur", function() {
		if(telNum.val() == "" || telNum.val() == null || !telReg.exec(telNum.val())) {
			telNum.addClass("en_warning");
			$("p.hint_3_default").removeClass("caution");
			$("p.hint_3_warning").addClass("caution");
		}
		if(telReg.exec(telNum.val())) {
			$("p.hint_3_default").removeClass("caution");
			$("p.hint_3_succeed").addClass("caution");
		}
	});
	telNum.on("focus", function() {
		telNum.removeClass("en_warning");
		$("p.hint_3_warning").removeClass("caution");
		$("p.hint_3_succeed").removeClass("caution");
		$("p.hint_3_default").addClass("caution");
	});

	$(".modal button.btn-default").click(function() {
		reform();
	});
	$(".modal-header span").click(function() {
		reform();
	});

	function reform() {
		$(".modal p.help-block").removeClass("caution");
		$("p.default").addClass("caution");
		$("#en-form input").removeClass("en_warning");
	};
})