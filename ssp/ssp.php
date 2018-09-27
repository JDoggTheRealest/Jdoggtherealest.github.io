<!doctype html>
<html>
<head>
<meta charset="utf-8">
<title>Stein - Saks - Papir</title>

<style>
	body {
		 box-shadow: 5px 10px 18px #888888;
	}
	table {
		width:100%;
		height: 97vh;
	}
	
	td {
		width:33%;
		vertical-align: middle;
	}
	
	input {
		width:150px;
		margin:auto;
		display: block;
	}
	
	select {
		margin: 25px auto;
		display: block;
		padding:10px;
	}
	
	h1 {
		text-align: center;
	}
	
	img {
		margin:auto;
		display: block;
	}
	
	p {
		text-align:center;
		position:absolute;
		width:33%;
		font-size:350%;
	}
</style>
</head>

<body>
<table>
<td>
	<h1>User</h1>
	<?php if(isset($_GET["item"])) { 
		$ssp = $_GET["item"];
		$cpu = rand(1,3);
	?>
		<img src="<?php
			if($ssp == 3) {
				echo "paper.png";
			} else if($ssp == 2) {
				echo "scissor.png";
			} else {
				echo "stone.jpg";
			}
		?>">
	<?php } else { ?>
		<img src="questionmark.png";
	<?php } ?>
</td>
<td>
	<form method="get">
		<select name="item" required>
		<?php if(empty($_GET["item"])) { ?>
			<option> </option>
		<?php } ?>
			<option value="1" <?php if(isset($ssp) && $ssp == 1) { echo 'selected="selected"'; } ?> >Stein</option>
			<option value="2" <?php if(isset($ssp) && $ssp == 2) { echo 'selected="selected"'; } ?> >Saks</option>
			<option value="3" <?php if(isset($ssp) && $ssp == 3) { echo 'selected="selected"'; } ?> >Papir</option>
		</select>
		<input type="image" src="VS.png">
	</form>
		
		<p><?php if(isset($_GET["item"])) { 
	
			if($cpu == $ssp) {
				echo "Uavgjort";
			} else if(($ssp == 1 && $cpu == 2) || ($ssp == 2 && $cpu == 3) || ($ssp == 3 && $cpu == 1)) {
				echo "Du Vant";
			} else {
				echo "Du Tapte";
			}
	
		} ?></p>

</td>
<td>
	<h1>CPU</h1>
	<?php if(isset($_GET["item"])) { ?>
		<img src="<?php
			if($cpu == 3) {
				echo "paper.png";
			} else if($cpu == 2) {
				echo "scissor.png";
			} else {
				echo "stone.jpg";
			}
		?>">
	<?php } else { ?>
		<img src="questionmark.png">
	<?php } ?>
</td>
</table>

<script>
	var img = document.getElementsByTagName("img");
	var select = document.getElementsByTagName("select");
	var input = document.getElementsByTagName("input");
	var paragraf = document.getElementsByTagName("p");
	
	var move = 0;
	
	select[0].onchange = function() {
		if(select[0].value == "3") {
			img[0].src = "paper.png";
		} else if (select[0].value == "2"){
			img[0].src = "scissor.png";
		} else if (select[0].value == "1") {
			img[0].src = "stone.jpg";
		} else { 
			img[0].src = "questionmark.png";
		} 
	}
	
	select[0].onfocus = function() {
		img[1].src = "questionmark.png";
	}
	
	document.onmouseover = function() {
		move = 1;
	}
	
	input[0].onmouseout = function() {
		move = 1;
	}
	
	input[0].onmouseover = function() {
		if(move == 1) {
			img[1].src = "questionmark.png";	
		}
	}
	
	document.onmousemove = function() {
		if(img[1].getAttribute('src') == "questionmark.png") {
			paragraf[0].style.display = "none";
		}
	}
</script>
</body>
</html>