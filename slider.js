
(function()) 

	function init(item) {
		var items = item.querySelectorAll('li'),
        current = 0,
        autoUpdate = true,
        timeTrans = 2000;
	}
		//create nav
		var nav = document.createElement('nav');
		nav.className = 'nav_arrows';

		//create button prev
		var prevbtn = document.createElement('button');
		prevbtn.className = 'prev';
		prevbtn.setAttribute('aria-label', 'Prev');

		//create button next
		var nextbtn = document.createElement('button');
		nextbtn.className = 'next';
		nextbtn.setAttribute('aria-label', 'Next');

		//create counter
		var counter = document.createElement('div');
		counter.className = 'counter';
		counter.innerHTML = "<span>1</span><span>"+items.length+"</span>";

		if (items.length > 1) {
			nav.appendChild(prevbtn);
			nav.appendChild(counter);
			nav.appendChild(nextbtn);
			item.appendChild(nav);
		}

		items[current].className = "current";
		if (items.length > 1) items[items.length-1].className = "prev_slide";

		var navigate = function(dir) {
			items[current].className = "";

			if (dir === 'right') {
				current = current < items.length-1 ? current + 1 : 0;
			} else {
				current = current > 0 ? current - 1 : items.length-1;
			}

			var	nextCurrent = current < items.length-1 ? current + 1 : 0,
				prevCurrent = current > 0 ? current - 1 : items.length-1;

			items[current].className = "current";
			items[prevCurrent].className = "prev_slide";
			items[nextCurrent].className = "";

			//update counter
			counter.firstChild.textContent = current + 1;
		}
    
    item.addEventListener('mouseenter', function() {
			autoUpdate = false;
		});

		item.addEventListener('mouseleave', function() {
			autoUpdate = true;
		});

		setInterval(function() {
			if (autoUpdate) navigate('right');
		},timeTrans);
    
		prevbtn.addEventListener('click', function() {
			navigate('left');
		});

		nextbtn.addEventListener('click', function() {
			navigate('right');
		});

		//keyboard navigation
		document.addEventListener('keydown', function(ev) {
			var keyCode = ev.keyCode || ev.which;
			switch (keyCode) {
				case 37:
					navigate('left');
					break;
				case 39:
					navigate('right');
					break;
			}
		});

		// swipe navigation
		// from http://stackoverflow.com/a/23230280
		item.addEventListener('touchstart', handleTouchStart, false);        
		item.addEventListener('touchmove', handleTouchMove, false);
		var xDown = null;
		var yDown = null;
		function handleTouchStart(evt) {
			xDown = evt.touches[0].clientX;
			yDown = evt.touches[0].clientY;
		};
		function handleTouchMove(evt) {
			if ( ! xDown || ! yDown ) {
				return;
			}

			var xUp = evt.touches[0].clientX;
			var yUp = evt.touches[0].clientY;

			var xDiff = xDown - xUp;
			var yDiff = yDown - yUp;

			if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {/*most significant*/
				if ( xDiff > 0 ) {
					/* left swipe */
					navigate('right');
				} else {
					navigate('left');
				}
			} 
			/* reset values */
			xDown = null;
			yDown = null;
		};



let slide_data = [
	{
	  'src':'https://images.unsplash.com/photo-1506765336936-bb05e7e06295?ixlib=rb-0.3.5&s=d40582dbbbb66c7e0812854374194c2e&auto=format&fit=crop&w=1050&q=80',
	  'title':'Slide 1',
	  'copy':'DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT.'
	},
	{
	  'src':'https://images.unsplash.com/photo-1496309732348-3627f3f040ee?ixlib=rb-0.3.5&s=4d04f3d5a488db4031d90f5a1fbba42d&auto=format&fit=crop&w=1050&q=80', 
	  'title':'Slide 2',
	  'copy':'DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT.'
	},
	{
	  'src':'https://images.unsplash.com/photo-1504271863819-d279190bf871?ixlib=rb-0.3.5&s=7a2b986d405a04b3f9be2e56b2be40dc&auto=format&fit=crop&w=334&q=80', 
	  'title':'Slide 3',
	  'copy':'DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT.'
	},
	{
	  'src':'https://images.unsplash.com/photo-1478728073286-db190d3d8ce6?ixlib=rb-0.3.5&s=87131a6b538ed72b25d9e0fc4bf8df5b&auto=format&fit=crop&w=1050&q=80', 
	  'title':'Slide 4',
	  'copy':'DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT.'
	},
	
  ];
  let slides = [],
	captions = [];
  
  let autoplay = setInterval(function(){
	nextSlide();
  },5000);
  let container = document.getElementById('container');
  let leftSlider = document.getElementById('left-col');
  // console.log(leftSlider);
  let down_button = document.getElementById('down_button');
  // let caption = document.getElementById('slider-caption');
  // let caption_heading = caption.querySelector('caption-heading');
  
  down_button.addEventListener('click',function(e){
	e.preventDefault();
	clearInterval(autoplay);
	nextSlide();
	autoplay;
  });
  
  for (let i = 0; i< slide_data.length; i++){
	let slide = document.createElement('div'),
		caption = document.createElement('div'),
		slide_title = document.createElement('div');
	  
	slide.classList.add('slide');
	slide.setAttribute('style','background:url('+slide_data[i].src+')');
	caption.classList.add('caption');
	slide_title.classList.add('caption-heading');
	slide_title.innerHTML = '<h1>'+slide_data[i].title+'</h1>';
	
	switch(i){
	  case 0:
		  slide.classList.add('current');
		  caption.classList.add('current-caption');
		  break;
	  case 1:
		  slide.classList.add('next');
		  caption.classList.add('next-caption');
		  break;
	  case slide_data.length -1:
		slide.classList.add('previous');
		caption.classList.add('previous-caption');
		break;
	  default:
		 break;       

	}
	caption.appendChild(slide_title);
	caption.insertAdjacentHTML('beforeend','<div class="caption-subhead"><span>dolor sit amet, consectetur adipiscing elit. </span></div>');
	slides.push(slide);
	captions.push(caption);
	leftSlider.appendChild(slide);
	container.appendChild(caption);
  }
  // console.log(slides);
  
  function nextSlide(){
	// caption.classList.add('offscreen');
	
	slides[0].classList.remove('current');
	slides[0].classList.add('previous','change');
	slides[1].classList.remove('next');
	slides[1].classList.add('current');
	slides[2].classList.add('next');
	let last = slides.length -1;
	slides[last].classList.remove('previous');
	
	captions[0].classList.remove('current-caption');
	captions[0].classList.add('previous-caption','change');
	captions[1].classList.remove('next-caption');
	captions[1].classList.add('current-caption');
	captions[2].classList.add('next-caption');
	let last_caption = captions.length -1;
	
	// console.log(last);
	captions[last].classList.remove('previous-caption');
	
	let placeholder = slides.shift();
	let captions_placeholder = captions.shift();
	slides.push(placeholder); 
	captions.push(captions_placeholder);
  }
  
  let heading = document.querySelector('.caption-heading');
  
  
  // https://jonsuh.com/blog/detect-the-end-of-css-animations-and-transitions-with-javascript/
  function whichTransitionEvent(){
	var t,
		el = document.createElement("fakeelement");
  
	var transitions = {
	  "transition"      : "transitionend",
	  "OTransition"     : "oTransitionEnd",
	  "MozTransition"   : "transitionend",
	  "WebkitTransition": "webkitTransitionEnd"
	}
  
	for (t in transitions){
	  if (el.style[t] !== undefined){
		return transitions[t];
	  }
	}
  }
  
  var transitionEvent = whichTransitionEvent()
  caption.addEventListener(transitionEvent, customFunction);
  
  function customFunction(event) {
	caption.removeEventListener(transitionEvent, customFunction);
	console.log('animation ended');
  
	// Do something when the transition ends
  }

