


let $body,
	windowHeight,
	windowWidth,
	degree = 0.0174532925,
	mediaPoint1 = 1024,
	mediaPoint2 = 768,
	mediaPoint3 = 480,
	mediaPoint4 = 320,
	devStatus = window.productionStatus === 'development';
	const win = document.body

$(document).ready(function ($) {
	$body = $('body');

	if(devStatus) {
		pageWidget(['index']);
		pageWidget(['about']);
		pageWidget(['contacts']);
		pageWidget(['policy']);
		pageWidget(['single-service']);
		pageWidget(['work']);
		pageWidget(['404']);
		getAllClasses('html', '.elements_list');
	}
});

$(window).on('load', function () {
	updateSizes();
	loadFunc();
	modal();
	headerHiddens();
	checkSubmenu();
	showMoreText();
});

$(window).on('resize', function () {
	resizeFunc();
});

$(window).on('scroll', function () {
	scrollFunc();
	// stateHeader();
});

function loadFunc() {
	calcViewportHeight();
}

function resizeFunc() {
	updateSizes();

	calcViewportHeight();
}

function scrollFunc() {}

function calcViewportHeight() {
	if (isMobile.apple.phone || isMobile.android.phone || isMobile.seven_inch) {
		var vh = window.innerHeight * 0.01;
		document.documentElement.style.setProperty('--vh', vh + 'px');
	}
}

function updateSizes() {
	windowWidth = window.innerWidth;
	windowHeight = window.innerHeight;
}

if ('objectFit' in document.documentElement.style === false) {
	document.addEventListener('DOMContentLoaded', function () {
		Array.prototype.forEach.call(
			document.querySelectorAll('img[data-object-fit]'),
			function (image) {
				(image.runtimeStyle || image.style).background =
					'url("' +
					image.src +
					'") no-repeat 50%/' +
					(image.currentStyle
						? image.currentStyle['object-fit']
						: image.getAttribute('data-object-fit'));

				image.src =
					"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='" +
					image.width +
					"' height='" +
					image.height +
					"'%3E%3C/svg%3E";
			}
		);
	});
}

function succes(success) {
	$(success).toggleClass('active');
		setTimeout(function() {
			$(success).removeClass('active')
		}, 3000)
}

function failed(failed) {
	$(failed).toggleClass('active');
		setTimeout(function() {
			$(failed).removeClass('active')
		}, 3000)
}

function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min)) + min;
}

function getRandom(min, max) {
	return Math.random() * (max - min) + min;
}

var styles = ['color: red', 'background: black'].join(';');
var message = 'Developed by KotoFeelGood Arkada-Studio https://arkada-web.ru/';
console.info('%c%s', styles, message);



$(document).ready(function() {
	const btns = document.querySelectorAll('.btn')

	btns.forEach(el => {
			el.addEventListener('click', function(e) {
					let
							size = Math.max(this.offsetWidth, this.offsetHeight),
							x = e.offsetX - size / 2,
							y = e.offsetY - size / 2,
							wave = this.querySelector('.wave')
	
					// Create an element if it doesn't exist
					if (!wave) {
							wave = document.createElement('span')
							wave.className = 'wave'
					}
					wave.style.cssText = `width:${size}px;height:${size}px;top:${y}px;left:${x}px`
					this.appendChild(wave)
			})
	})
})









$(document).ready(function()  {

	var inputsTel = document.querySelectorAll('input[type="tel"]');
	Inputmask({
		"mask": "+7 (999) 999-99-99",
		showMaskOnHover: false
	}).mask(inputsTel);
})



async function maps(street, city, size) {

	function init() {
		const geocoder = ymaps.geocode(`${street} ${city}`);
		geocoder.then(
			async function (res) {
				var myMapMobile = await new ymaps.Map('map', {
						center: res.geoObjects.get(0).geometry.getCoordinates(),
						zoom: 16,
					}, {
						searchControlProvider: 'yandex#search'
					}),
					myPlacemark = new ymaps.Placemark(myMapMobile.getCenter(), {
						balloonContent: `${street} ${city}`
					}, {
						iconLayout: 'default#image',
						iconImageHref: '/i/global/map.svg',
						iconImageSize: size,
						iconImageOffset: [-5, -38]
					});

				myMapMobile.geoObjects
					.add(myPlacemark)
				myMapMobile.behaviors.disable('scrollZoom')
			}
		);
	}
	await ymaps.ready(init);

}


const workSlider = new Swiper('.work-slider', {

	speed: 600,
	navigation: {
		nextEl: '.work_btn_next',
		prevEl: '.work_btn_prev',
	},
	pagination: {
		el: '.work_pagination',
		type: 'bullets',
		clickable: true,
		dynamicBullets: true,
	},
	breakpoints: {
		320: {
			slidesPerView: '1',
			spaceBetween: 15,
		},
		768: {
			slidesPerView: '2',
			spaceBetween: 20, 
		},
		1024: {
			slidesPerView: '3',
			spaceBetween: 30,
		}
	}
})

const serviceSlider = new Swiper('.services-slider', {

	speed: 600,
	navigation: {
		nextEl: '.services_btn_next',
		prevEl: '.services_btn_prev',
	},
	pagination: {
		el: '.service_pagination',
		type: 'bullets',
		clickable: true,
		dynamicBullets: true,
	},
	breakpoints: {
		320: {
			slidesPerView: '1',
			spaceBetween: 15,
		},
		768: {
			slidesPerView: '2',
			spaceBetween: 20, 
		},
		1024: {
			slidesPerView: '3',
			spaceBetween: 30,
		}
	}
})




function modal() {
	let popup = document.querySelectorAll('.popup')
	let btnArray = document.querySelectorAll('.trigger')
	
	btnArray.forEach((el) => {
		el.addEventListener('click', function(e) {
			e.preventDefault();
			let path = e.currentTarget.dataset.target
			popup.forEach((el) => {
				if(el.dataset.id == path) {
					isOpen(el)
				}
			})
			
		})
	})
	

	popup.forEach((pop) => {
		let remove = pop.querySelectorAll('.remove')
		remove.forEach(el => {
			el.addEventListener('click', (e) => {
				isRemove(pop);
			})
		});
	})
}



function isOpen(popup) {
	document.body.classList.add('hidden-scroll')
	popup.classList.add('active')
}

function isRemove(popup) {
	popup.classList.remove('active')
	document.body.classList.remove('hidden-scroll')
}



function headerHiddens() {
	let headerAnimationHidden = document.querySelector('.header');
	let prevScroll = window.scrollY;

	window.addEventListener('scroll', () => {
			let currentScroll = window.scrollY;
			let headerHidden = headerAnimationHidden.className.includes('header_hidden');

			if (currentScroll == 0 && headerHidden) {
					headerAnimationHidden.classList.remove('header_hidden');
			}
			if (currentScroll > prevScroll && !headerHidden && currentScroll > 100) {
					headerAnimationHidden.classList.add('header_hidden');
			}
			if (currentScroll < prevScroll && headerHidden) {
					headerAnimationHidden.classList.remove('header_hidden');
			}
			prevScroll = currentScroll;
	});
}

headerHiddens();


function checkSubmenu() {
  const navMenu = document.querySelectorAll('.header_nav_list>li');
  const headerMain = document.querySelector('.header_menu--bg');

  navMenu.forEach(item => {
    if (item.querySelector('ul')) {
      item.classList.add('has-children');

      // Добавляем обработчики событий на элемент li при наличии дочерних элементов ul
      item.addEventListener('mouseenter', () => {
        headerMain.classList.add('active-menu');
      });
      item.addEventListener('mouseleave', () => {
        headerMain.classList.remove('active-menu');
      });

			headerMain.addEventListener('mouseenter', () => {
        headerMain.classList.add('active-menu');
      });
      headerMain.addEventListener('mouseleave', () => {
        headerMain.classList.remove('active-menu');
      });

    }
  });
}


function showMoreText() {
	let showMoreBlock = document.querySelectorAll('.showMoreBlock')
	Array.from(showMoreBlock).map((item) => {
		let showMoreBtn = item.querySelector('.showMoreBtn')
		let showMoreTxt = item.querySelector('.showMoreTxt')

		showMoreBtn.addEventListener('click', function() {
			showMoreTxt.classList.toggle('visible')
			if (showMoreTxt.classList.contains('visible')) {
        this.innerHTML = `
				<button class="local-more showMoreBtn onVisible">
					<p>Свернуть</p>
					<svg class="icon icon-down ">
						<use xlink:href="i/sprite/sprite.svg#down"></use>
					</svg>
				</button>
				`
      } else {
        this.innerHTML = `
				<button class="local-more showMoreBtn">
					<p>Развернуть</p>
					<svg class="icon icon-down ">
						<use xlink:href="i/sprite/sprite.svg#down"></use>
					</svg>
				</button>
				`;
      }
		})
	})
}
















































