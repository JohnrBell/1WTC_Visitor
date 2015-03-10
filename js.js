$(function(){
	$('.form_A').on('click',function(e){
		e.preventDefault()
		console.log('clicked next.')
		$('.form_A').css('display','none')
		$('.form_B').css('display','block')
		$('.block').toggleClass('selected')
	})
})