(function($) {
	
	var tagline_texts = [
		'커뮤니티 사이트',
		'사진 포트폴리오',
		'학교·병원 홈페이지',
		'REST API & SPA',
		'신제품 소개 사이트',
		'스타트업 플랫폼',
		'하이브리드 웹앱',
		'학회·축제 홈페이지',
		'팬덤 홈페이지',
		'인터넷 신문사'
	];
	
	$(function() {
		
		// 아이콘 변환
		feather.replace();
		
		// 태그라인 순환 시작
		var tagline_container = $('.tagline_alt');
		var tagline_count = tagline_texts.length;
		var tagline_idx = 0;
		var tagline_next;
		tagline_next = function() {
			var chars = tagline_texts[tagline_idx].split('');
			var char_next;
			var i = 0;
			char_next = function() {
				var char = String(chars[i]).replace(/&/, '&amp;');
				var delay = 0;
				if (char == ' ') {
					tagline_container.append('&nbsp;');
				} else {
					delay = 160;
					if (i == 0) {
						tagline_container.text(char);
					} else {
						tagline_container.append(char);
					}
				}
				i++;
				if (i < chars.length) {
					setTimeout(char_next, delay);
				} else {
					setTimeout(tagline_next, delay * 5);
				}
			};
			setTimeout(char_next, 0);
			tagline_idx++;
			if (tagline_idx >= tagline_count) {
				tagline_idx = 0;
			}
		};
		tagline_next();
		
		// 모바일 햄버거 메뉴 처리
		$('.mobile-menu, .menu-background').on('click', function() {
			$('nav').toggleClass('active');
		});
		
		// 메일주소 크롤링 방지 처리
		$('.obfusc').each(function() {
			var text = String($(this).text());
			var rev = text.split('').reverse().join('').replace('&#64;', '@');
			$(this).attr('href', 'mailto:' + rev);
			$(this).text(rev);
		});
	});
	
})(jQuery);