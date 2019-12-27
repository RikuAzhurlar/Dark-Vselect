// ==UserScript==
// @name         Dark Skin Vselect-dev
// @version      2.1.15
// @description  Dark Skin for Vselect - bleeding edge build
// @author       Dgraff@velocity.org / JJenkins@velocity.org / CCosby@velocity.org
// @match        https://vselect.com/*
// @exclude      https://vselect.com/monitors/tm/*
// @exclude      https://vselect.com/wiki/*
// @exclude      https://vselect.com/support/chat/*
// @updateURL	 https://github.com/RikuAzhurlar/Dark-Vselect/raw/dev/Dark%20Skin%20Vselect.user.js
// @grant        none
// ==/UserScript==




(function() {
    'use strict';

	function addGlobalStyle(css) {
    var head, style;

    style = document.getElementsByTagName('style')[0];
    if (!style) { return; }
    style.innerHTML = css;
	}

	var css = `
#VCalendarContainer {
  background: #454545 !important;
  color: #000 !important;
}
#VCalendarMonthHeader, #VCalendarMonthArrow {
  background: #555555 !important;
  color: #000 !important;
}
#VCalendarTableHeader {
  background: #656565 !important;
  color: #000 !important;
}
#VCalendarCalendar, .VCalendarBody {
  color: #000 !important;
}
#VCalendarTableFooter {
  background: #000 !important;
  color: #fff !important;
}
`;
	function throttle(type, name, target) {
		if (name === void 0) { name = "throttled" + type.charAt(0).toUpperCase() + type.substring(1); }
		if (target === void 0) { target = window; }
		var running = false;
		var func = function () {
			if (running) {
				return;
			}
			running = true;
			requestAnimationFrame(function () {
				target.dispatchEvent(new CustomEvent(name));
				running = false;
			});
		};
		target.addEventListener(type, func);
	}
	throttle("change", "throttledChange");
	throttle("DOMNodeInserted", "throttledReady");
	throttle("click", "throttledClick");
	window.addEventListener("throttledChange", function () {
            setStyle();
    });
	window.addEventListener("throttledReady", function () {
            setStyle();
    });
	window.addEventListener("throttledClick", function () {
            setStyle();
    });
    function setStyle() {
        var container = document.querySelector('#container');
        if(container) {
            if(container.style.backgroundColor != "rgb(69, 69, 69)")
                container.style.backgroundColor = "#454545";
            if(container.style.color != "rgb(175, 175, 175)")
                container.style.color = "#afafaf";
        }
        var text = document.querySelectorAll('input[type=text], select, textarea, .entryheading, .divfield, .nrfield, .ticketseparator, option, .vselect, .ticket-entries');
        var heading = document.querySelectorAll('.heading, .flex-set, .odd_comment, .tech_status');
        var divs = document.querySelectorAll('div, td, tr');
        var a = document.querySelectorAll('.conflink');
        var bg1 = document.querySelectorAll('.bg1');
        var bg2 = document.querySelectorAll('.bg2, .nochild, .even_comment');
        var tables = document.querySelectorAll('table, td');
        var header = document.querySelector('.fixed-sub-heading-container, .sticky-sub-heading-container');
        var title = document.querySelector('td[title]');
        if(header) {
            if(header.style.backgroundColor != "rgb(69, 69, 69)")
                header.style.backgroundColor = "#454545";
        }
        if(a.length > 0){
            for(var i = 0; i < a.length; i++) {
                if(a[i].style.color != "rgb(239, 239, 239")
                    a[i].style.color = "#efefef";
            }
        }

        if(title) {
            if(title.style.color != "rgb(166, 158, 255)")
                title.style.color = "#a69eff";
            if(title.children[0] && title.children[0].children[0])
                if(title.children[0].children[0].style.color != "rgb(239, 239, 239")
                    title.children[0].children[0].style.color = "#efefef";
        }
        //console.dir(text);
        if(text.length > 0){
            for(var i = 0; i < text.length; i++) {
                if(text[i].style.backgroundColor != "rgb(153, 0, 0)" && text[i].style.backgroundColor != "rgb(48, 220, 56)" && text[i].style.backgroundColor != "rgb(226, 245, 230)"){
                    if(text[i].style.color != "rgb(239, 239, 239)"){
                        //console.log('Color');
                        text[i].style.color = "#efefef";
                    }
                    if(text[i].style.backgroundColor != "rgb(101, 101, 101)"){
                        //console.log('Background');
                        text[i].style.backgroundColor = "#656565";
                    }
                }
                if(text[i].style.backgroundColor === "rgb(226, 245, 230)")
                    if(text[i].style.color != "rgb(0, 0, 0)"){
                        //console.log("false");
                        text[i].style.color = "#000";
                    }
            }
        }
        if(tables){
            if(tables.length > 0){
                for(var i = 0; i < tables.length; i++) {
                    if(tables[i].parentElement.className === "special"){
                    } else if(tables[i].style.backgroundColor === "rgb(48, 220, 56)" || tables[i].style.backgroundColor === "rgb(255, 83, 83)" || tables[i].style.backgroundColor === "rgb(255, 174, 94)" || tables[i].style.backgroundColor === "rgb(170, 170, 170)" || tables[i].style.backgroundColor === "rgb(82, 243, 255)"){
                        if(tables[i].style.color != "rgb(0, 0, 0)")
                            tables[i].style.color = "#000";
                    } else {
                        if(tables[i].style.color != "rgb(239, 239, 239")
                            tables[i].style.color = "#efefef";
                        if(tables[i].style.backgroundColor != "rgb(69, 69, 69)")
                            tables[i].style.backgroundColor = "#454545";
                    }
                }
            } else {
                if(tables.style.backgroundColor != "rgb(69, 69, 69)")
                    tables.style.backgroundColor = "#454545";
            }
        }
        if(divs.length > 0){
            for(var i = 0; i < divs.length; i++) {
                if(divs[i].style.backgroundColor === "rgb(221, 221, 221)" || divs[i].style.backgroundColor === "rgb(187, 187, 187)" || divs[i].style.backgroundColor === "rgb(221, 222, 251)" || divs[i].style.backgroundColor === "rgb(219, 225, 249)" || divs[i].style.backgroundColor === "rgb(239, 239, 239)"){
                    if(divs[i].name == "TR") {
						if(divs[i].children[0].style.color != "rgb(53, 53, 53)")
							divs[i].children[0].style.color = "#353535";
					}
					if(divs[i].style.color != "rgb(53, 53, 53)")
                        divs[i].style.color = "#353535";
                }
                if(divs[i].style.color == "rgb(40, 85, 26)") {
                    if(divs[i].style.color != "rgb(101, 199, 72)")
                        divs[i].style.color = "#65c748";
                }
                if(divs[i].style.backgroundColor == "rgb(245, 247, 200)"){
                    if(divs[i].style.backgroundColor != "rgb(72, 69, 133)")
                        divs[i].style.backgroundColor = "#484585";
                }
                if(divs[i].style.color === "rgb(153, 0, 0)"){
                    if(divs[i].style.color != "rgb(255, 0, 0)")
                        divs[i].style.color = "#ff0000";
                }
				if(divs[i].style.color === "rgb(0, 0, 153)"){
                    //if(divs[i].style.color != "rgb(179, 179, 255)")
                        //divs[i].style.color = "rgb(179, 179, 255)";
                }
            }
        }
        if(heading) {
            if(heading.length > 0) {
                for(var i = 0; i < heading.length; i++) {
                    if(heading[i].style.color != "rgb(53, 53, 53)")
                        heading[i].style.color = "#353535";
                }
            }
        }
        if(bg2.length > 0 ) {
            for(var i = 0; i < bg2.length; i++) {
                if(bg2[i].style.color != "rgb(239, 239, 239")
                    bg2[i].style.color = "#efefef";
                if(bg2[i].style.backgroundColor != "rgb(51, 51, 51)")
                    bg2[i].style.backgroundColor = "#333333";
            }
        }
        if(bg1.length > 0 ) {
            for(var i = 0; i < bg1.length; i++) {
                if(bg1[i].style.color != "rgb(239, 239, 239")
                    bg1[i].style.color = "#efefef";
                if(bg1[i].style.backgroundColor != "rgb(17, 17, 17)")
                    bg1[i].style.backgroundColor = "#111111";
            }
        }
    }

        var style = {
        backgroundColor: "#454545",
        color: "#f5f5f5"
    };

    console.log('CONTENT: '  );
    console.log($('.content'));

    $('.content').each(function() {
        $(this).css(style);

    });

    $('table.ticket-entries').css(style);

    $('div.ticket-entries').css(style);

    //fix header
    $('div.sticky-sub-heading-container').css(style);
    $('div.fixed-sub-heading-container').css(style);





    addGlobalStyle(css)
    setStyle();
})();
