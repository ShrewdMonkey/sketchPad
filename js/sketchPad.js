option = 1;

$(document).ready(function(){

	reDrawGrid();
});


function reDrawGrid()
{
	$('.line').remove();
	division=prompt("How many squares in a line do you want?");
	if(isNaN(division)) return;
	if(division>0 && division<=64)
	{
		lineHeight=832/division;
		squareHeight=lineHeight-2;
		for(var i =0;i<division;i++)
		{
			var $line=$('<div class="line"> </div>');
			$line.css("height",lineHeight);
			$('#grid').append($line);
			for (var j = 0; j<division; j++) {
				var $square=$('<div class="square"></div>');
				$square.addClass("veryhighlighted");
				$square.css("width",squareHeight);
				$square.css("height",squareHeight);
				$line.append($square);
			};
		}
	}
	animateGrid();
};


function animateGrid(){
	$('.square').hover(function(){
		if(option===1)
		{
			$(this).css("opacity","0.7");
			$(this).css("background-color","#666");
			

		}
		else if (option===2)
		{
			$(this).css("opacity","1");
			var randomColor = '#' + (Math.random() * 0xFFFFFF << 0).toString(16);
			$(this).css("background-color",randomColor);

		}
		else if(option===3)
		{
			$(this).css("background-color","#000");
			var opacity=$(this).css("opacity");
			opacity=(+opacity)+0.1;
			if((+opacity)>1) opacity="1";
			$(this).css("opacity",opacity);
		}

	},
	function(){

	});

};