let darkTheme
let availibility = true
var rotation = 0
var currSign = 0
var themeStr = 'blue.svg'
var signArray = [
	["aries_","Овен", "Овен. День будет непростым, но вы найдете способ решить все возникающие проблемы. Потребуются изобретательность и находчивость; вы проявите их вовремя и получите то, к чему стремились. Помните: сейчас лучше полагаться на себя, а не на других. Действуя самостоятельно, вы добьетесь отличных результатов. Нужна осторожность в финансовых делах. Там, где дело касается денег, не стоит доверять случайным знакомым, даже если они не скупятся на обещания и очень стараются заинтересовать вас. Небольшие приобретения могут быть удачными, а с крупными лучше не спешить."],
	["taurus_","Телец", "Телец. День будет непростым, но вы найдете способ решить все возникающие проблемы. Потребуются изобретательность и находчивость; вы проявите их вовремя и получите то, к чему стремились. Помните: сейчас лучше полагаться на себя, а не на других. Действуя самостоятельно, вы добьетесь отличных результатов. Нужна осторожность в финансовых делах. Там, где дело касается денег, не стоит доверять случайным знакомым, даже если они не скупятся на обещания и очень стараются заинтересовать вас. Небольшие приобретения могут быть удачными, а с крупными лучше не спешить."],
	["gemini_","Близнецы", "Близнецы. День будет непростым, но вы найдете способ решить все возникающие проблемы. Потребуются изобретательность и находчивость; вы проявите их вовремя и получите то, к чему стремились. Помните: сейчас лучше полагаться на себя, а не на других. Действуя самостоятельно, вы добьетесь отличных результатов. Нужна осторожность в финансовых делах. Там, где дело касается денег, не стоит доверять случайным знакомым, даже если они не скупятся на обещания и очень стараются заинтересовать вас. Небольшие приобретения могут быть удачными, а с крупными лучше не спешить."],
	["cancer_","Рак", "Рак. День будет непростым, но вы найдете способ решить все возникающие проблемы. Потребуются изобретательность и находчивость; вы проявите их вовремя и получите то, к чему стремились. Помните: сейчас лучше полагаться на себя, а не на других. Действуя самостоятельно, вы добьетесь отличных результатов. Нужна осторожность в финансовых делах. Там, где дело касается денег, не стоит доверять случайным знакомым, даже если они не скупятся на обещания и очень стараются заинтересовать вас. Небольшие приобретения могут быть удачными, а с крупными лучше не спешить."],
	["leo_","Лев", "Лев. День будет непростым, но вы найдете способ решить все возникающие проблемы. Потребуются изобретательность и находчивость; вы проявите их вовремя и получите то, к чему стремились. Помните: сейчас лучше полагаться на себя, а не на других. Действуя самостоятельно, вы добьетесь отличных результатов. Нужна осторожность в финансовых делах. Там, где дело касается денег, не стоит доверять случайным знакомым, даже если они не скупятся на обещания и очень стараются заинтересовать вас. Небольшие приобретения могут быть удачными, а с крупными лучше не спешить."],
	["virgo_","Дева", "Дева. День будет непростым, но вы найдете способ решить все возникающие проблемы. Потребуются изобретательность и находчивость; вы проявите их вовремя и получите то, к чему стремились. Помните: сейчас лучше полагаться на себя, а не на других. Действуя самостоятельно, вы добьетесь отличных результатов. Нужна осторожность в финансовых делах. Там, где дело касается денег, не стоит доверять случайным знакомым, даже если они не скупятся на обещания и очень стараются заинтересовать вас. Небольшие приобретения могут быть удачными, а с крупными лучше не спешить."],
	["libra_","Весы", "Весы. День будет непростым, но вы найдете способ решить все возникающие проблемы. Потребуются изобретательность и находчивость; вы проявите их вовремя и получите то, к чему стремились. Помните: сейчас лучше полагаться на себя, а не на других. Действуя самостоятельно, вы добьетесь отличных результатов. Нужна осторожность в финансовых делах. Там, где дело касается денег, не стоит доверять случайным знакомым, даже если они не скупятся на обещания и очень стараются заинтересовать вас. Небольшие приобретения могут быть удачными, а с крупными лучше не спешить."],
	["scorpio_","Скорпион", "Скорпион. День будет непростым, но вы найдете способ решить все возникающие проблемы. Потребуются изобретательность и находчивость; вы проявите их вовремя и получите то, к чему стремились. Помните: сейчас лучше полагаться на себя, а не на других. Действуя самостоятельно, вы добьетесь отличных результатов. Нужна осторожность в финансовых делах. Там, где дело касается денег, не стоит доверять случайным знакомым, даже если они не скупятся на обещания и очень стараются заинтересовать вас. Небольшие приобретения могут быть удачными, а с крупными лучше не спешить."],
	["saggitarius_","Стрелец", "Стрелец. День будет непростым, но вы найдете способ решить все возникающие проблемы. Потребуются изобретательность и находчивость; вы проявите их вовремя и получите то, к чему стремились. Помните: сейчас лучше полагаться на себя, а не на других. Действуя самостоятельно, вы добьетесь отличных результатов. Нужна осторожность в финансовых делах. Там, где дело касается денег, не стоит доверять случайным знакомым, даже если они не скупятся на обещания и очень стараются заинтересовать вас. Небольшие приобретения могут быть удачными, а с крупными лучше не спешить."],
	["capricorn_","Козерог", "Козерог. День будет непростым, но вы найдете способ решить все возникающие проблемы. Потребуются изобретательность и находчивость; вы проявите их вовремя и получите то, к чему стремились. Помните: сейчас лучше полагаться на себя, а не на других. Действуя самостоятельно, вы добьетесь отличных результатов. Нужна осторожность в финансовых делах. Там, где дело касается денег, не стоит доверять случайным знакомым, даже если они не скупятся на обещания и очень стараются заинтересовать вас. Небольшие приобретения могут быть удачными, а с крупными лучше не спешить."],
	["aquarius_","Водолей", "Водолей. День будет непростым, но вы найдете способ решить все возникающие проблемы. Потребуются изобретательность и находчивость; вы проявите их вовремя и получите то, к чему стремились. Помните: сейчас лучше полагаться на себя, а не на других. Действуя самостоятельно, вы добьетесь отличных результатов. Нужна осторожность в финансовых делах. Там, где дело касается денег, не стоит доверять случайным знакомым, даже если они не скупятся на обещания и очень стараются заинтересовать вас. Небольшие приобретения могут быть удачными, а с крупными лучше не спешить."],
	["pisces_","Рыбы", "Рыбы. День будет непростым, но вы найдете способ решить все возникающие проблемы. Потребуются изобретательность и находчивость; вы проявите их вовремя и получите то, к чему стремились. Помните: сейчас лучше полагаться на себя, а не на других. Действуя самостоятельно, вы добьетесь отличных результатов. Нужна осторожность в финансовых делах. Там, где дело касается денег, не стоит доверять случайным знакомым, даже если они не скупятся на обещания и очень стараются заинтересовать вас. Небольшие приобретения могут быть удачными, а с крупными лучше не спешить."]
]

// ratate function
jQuery.fn.rotate = function(degrees) {
    $(this).css({'-webkit-transform':'rotate('+ degrees +'deg)',
                 '-moz-transform':'rotate('+ degrees +'deg)',
                 '-ms-transform':'rotate('+ degrees +'deg)',
                 'transform':'rotate('+ degrees +'deg)',
                 'transition':'all 1.5s'})
    return $(this)
}

// load info 
function loadInfo(){
	$('.wheel__sign img').attr('src','assets\\img\\' + signArray[currSign][0] + themeStr)
	$('.wheel__title').text(signArray[currSign][1])
	$('.column__text').text(signArray[currSign][2])
}

//update info
function updateInfo(){
	$('.wheel__sign img').fadeOut(1000)
	$('.wheel__title').fadeOut(1000)
	$('.column__text').fadeOut(1000)
	setTimeout(function(){
		$('.wheel__sign img').attr('src','assets\\img\\' + signArray[currSign][0] + themeStr)
		$('.wheel__title').text(signArray[currSign][1])
		$('.column__text').text(signArray[currSign][2])
	}, 1000)
	setTimeout(function(){
		$('.wheel__sign img').fadeIn(500)
		$('.wheel__title').fadeIn(500)
		$('.column__text').fadeIn(500)
	}, 1500)
}

// rotate left
function rotateLeft(){
	rotation += 30
	currSign--
	if(currSign < 0) currSign = 11
	$('.rotate-element').rotate(rotation)
	updateInfo()
}

// rotate right
function rotateRight(){
	rotation -= 30
	currSign++
	if(currSign > 11) currSign = 0
	$('.rotate-element').rotate(rotation)
	updateInfo()
}

function availibilityChanger(duration){
	availibility = false
	setTimeout(function(){
		availibility = true
	}, duration)
}

// arrow click handler
$('.rotate-element_left').click(function(){
	if (availibility) {
		availibilityChanger(2000)
		rotateLeft()
	}
})
$('.rotate-element_right').click(function(){
	if (availibility) {
		availibilityChanger(2000)
		rotateRight()
	}
})

// keydown handler
$(document).keydown(function(event) {
	if (availibility){
		availibilityChanger(2000)
		var key = event.keyCode
		if (key == '37') rotateLeft()
		else if (key == '39') rotateRight()
	} 
}) 

// light theme by default
$(window).on('load', function () {
	$('.page_dark-theme').hide()
	$('body').css({'background':'#B2A796', 'color':'#2f343e'})
	darkTheme = false
	loadInfo()
})

// theme change
$(".theme-button, .item__theme-button").click(function () {
	if(availibility){
		availibilityChanger(500)
		if(!darkTheme){
			themeStr = 'beige.svg'
			$('.page_light-theme').fadeOut(250)
			$('body').css({'background':'#2f343e','transition':'all 0.25s'})
			setTimeout(function(){
				$('body').css({'color':'#B2A796','transition':'all 0.25s'})
				$('.page_dark-theme').fadeIn(250)
				$('.wheel__sign img').attr('src','assets\\img\\' + signArray[currSign][0] + themeStr)
			}, 250)
			darkTheme = true
		}
		else {
			themeStr = 'blue.svg'
			$('.page_dark-theme').fadeOut(250)
			$('body').css({'background':'#B2A796','transition':'all 0.25s'})
			setTimeout(function(){
				$('body').css({'color':'#2f343e','transition':'all 0.25s'})
				$('.page_light-theme').fadeIn(250)
				$('.wheel__sign img').attr('src','assets\\img\\' + signArray[currSign][0] + themeStr)
			}, 250)
			darkTheme = false
		}
	}
})