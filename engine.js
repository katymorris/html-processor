window.htmlProcess = function(el) {

	this.buildEl = function(el){
		var htmlBlock = document.createElement(el.element);
		for (const prop in el) {
			switch (prop) {
			  	case "text":
			  		htmlBlock.innerText = el.text;
				break
				case "children":
					var childrenHTML;
					for (let i = 0; i < el[prop].length; i++) {
						childrenHTML = this.buildEl(el[prop][i]);
						htmlBlock.appendChild(childrenHTML);
					}
				break
			  	default:
			    console.log("exp doesn't match")
			}
		}
		return htmlBlock;
	}
	this.addToDom = function(html) {
		document.getElementsByTagName("body")[0].appendChild(html)
	}

	var html = this.buildEl(el);
	this.addToDom(html);
}

var transcript = {
	element: "div",
	text: "transcript"
}

var main = {
	element: "div",
	children: [transcript]
}


window.htmlProcess(main);