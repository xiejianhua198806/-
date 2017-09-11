var i = 0;
var tirm;
$(function() {
	//内容切换
	$('.img').eq(0).show().siblings().hide();
	startLunbotu();
	//当鼠标划上某一个停止播放并切换到当前位置
	$('.tab,.img').hover(function() {
		clearInterval(tirm);
		i = $(this).index();
		showPicTab();
	}, function() {
		startLunbotu();
	});
	//点击左按钮
	$('.zuobtn').click(function() {
		clearInterval(tirm); //清除定时器
		i--;
		if(i == -1) {
			i = 5;
		};
		showPicTab();
		startLunbotu();

	});
	//点击右按钮
	$('.youbtn').click(function() {
		clearInterval(tirm); //清除定时器
		i++;
		if(i == 6) {
			i = 0;
		};
		showPicTab();
		startLunbotu();
	});

	//公共方法(切换)
	function showPicTab() {
		$('.img').eq(i).stop(true, true).fadeIn(300).siblings().stop(true, true).fadeOut(300);
		$('.tab').eq(i).addClass('dian').siblings().removeClass('dian');
	};
	//公共方法(定时器)
	function startLunbotu() {
		tirm = setInterval(function() {
			i++;
			if(i == 6) {
				i = 0;
			};
			showPicTab();
		}, 2000);
	};
});