let body = document.querySelector("body"); //тело сайта
let main_player = document.querySelector(".main_player"); //игрок на главной сцене
let scoreEnd2 = 0

let main = document.querySelector(".main"); //главная локация

let school = document.querySelector(".school"); //картинка школы
let location2 = document.querySelector(".location2"); //локация 2

let nojniBox = document.querySelector(".nojni"); //ачивка ножны
let shield = document.querySelector(".shield")
let geo = document.querySelectorAll(".geo")


let mastery = document.querySelector(".mastery");	
let location3 = document.querySelector(".location3")

let arena = document.querySelector(".arena")
let location4 = document.querySelector(".location4")


let augh = document.querySelector(".augh")
let hotline = document.querySelector(".hotline")
let soup = document.querySelector(".soup")
let crystal = document.querySelector(".crystal")

let nlo = document.querySelector(".nlo")
let text = document.querySelector(".text")

hotline.volume = 0.3
augh.volume = 0.3
soup.volume = 0.3
crystal.volume = 0.3

school.onclick = function(){
	main_player.style.top = "82%";
	main_player.style.left = "75%";
	main_player.style.transform = "rotate(5turn)"
	let loc2_variants_block = document.querySelector(".loc2_variants_block");
	setTimeout(moveLocation2, 2000)	
	let wrong = document.querySelectorAll(".loc2_variants");
	let write = document.querySelector(".loc2_pravilno");
	let sword = document.querySelector(".sword");
	
	function changeLocation2(){
		main.style.display = "none";
		location2.style.display = "block";
		body.style.backgroundImage = "url(loc2/kabinet.jpg)";
		augh.play()
		hotline.pause()
		setTimeout(showvar, 100)
		
		for(let i=0; i<5; i=i+1) {
			wrong[i].onclick = function() {
				alert("неправильно")
			}
			write.onclick = function() {
				alert("идем дальше")
				main.style.display = "block";
				augh.pause()
				location2.style.display = "none";
				hotline.play()
				body.style.backgroundImage = "url(bg1.png)";
				body.style.backgroundSize = "cover";
				loc2_variants_block.style.display = "none";
			 	sword.style.display = "block";
				console.log(scoreEnd2)
				scoreEnd2 = scoreEnd2 + 1
				if(scoreEnd2 >= 3) {
					console.log("dww")
					nlo.style.animationName = "ufo";							
					text.style.opacity = "1"
					nlo.onclick = function() {
						crystal.play()
						hotline.pause()
						alert("Ты Победитель.. Залазей в машину *наверное*")
						main_player.style.transform = "rotate(4.8turn)"
						main_player.style.transition = "4s"
						main_player.style.left = "50%";
						main_player.style.top = "65%";
						function carHref() {
							location.href = 'https://dalakhan.github.io/Piggysleeve/';	
						}
							function playerDisplay() {
						main_player.style.display = "none"	
						}
						function carMove() {
							nlo.style.animationName = "ufoMove"	
						}
						setTimeout(playerDisplay, 5000)
						setTimeout(carHref, 9000)
						setTimeout(carMove, 6000)
					}
				}
			}
		}
	}

	function showvar() {
		loc2_variants_block.style.display = "block";
	}
	setTimeout(changeLocation2, 1000);
	function moveLocation2() {
		school.style.opacity = "0"
	}
}
mastery.onclick = function() {
	main_player.style.top = "53%";
	main_player.style.left = "15%";
	main_player.style.transform = "rotate(5turn)"
	setTimeout(moveLocation3, 3000)	
	let changeLocation3 = function(){
		hotline.pause()
		main.style.display = "none";
		location3.style.display = "block";
		body.style.background = "url(sobery2-main/ror2.png)";
			let row = document.querySelector(".row");
		    let timerS = document.querySelector('.timerS')
		    let btn = document.querySelector('.btn')
		    let time = document.querySelector(".time")
		    let time1 = document.querySelector(".time1")
		    let score = 0
		    let timer = 6000
		    let scoreS = document.querySelector('.score')

		    let getRandom = function(arg) {
		        let random = Math.random() * arg;
		        let round = Math.round(random)
		        return round
		    }
		    let fTime = function() {
		        timer = timer - 1000
		        timerS.innerHTML = timer/1000
		        if (timer<=0) {
		            timerS.style.display = "none"
		        }
		    }

		    let check = 0

		    //хранение картинок
		    let images = ["sobery2-main/Wisp.webp", "sobery2-main/naem.webp", "sobery2-main/trap.webp", "sobery2-main/hunter.png", "sobery2-main/Жирный.webp", "sobery2-main/Imp.webp", "sobery2-main/Wisp.webp", "sobery2-main/naem.webp", "sobery2-main/trap.webp", "sobery2-main/hunter.png", "sobery2-main/Жирный.webp", "sobery2-main/Imp.webp"];

		    btn.onclick = function() {
		        btn.style.display = "none"
		        setInterval(fTime, 1000)
		        let stopGame = function() {
		            row.style.display = "none"    
		            time.style.display = "none"
		            time1.style.display = "none"
		            if(score==6) {
		                main.style.display = "block";
						location3.style.display = "none";
						body.style.backgroundImage = "url(bg1.png)";
						body.style.backgroundSize = "cover";
		                nojniBox.style.display = "block";
		            	hotline.play()
		            	console.log(scoreEnd2)
						scoreEnd2 = scoreEnd2 + 1
						if(scoreEnd2 >= 3) {
							console.log("пошло говно по трубам")
							nlo.style.animationName = "ufo";							
							text.style.opacity = "1"
							nlo.onclick = function() {
								crystal.play()
								hotline.pause()
								alert("Ты Победитель.. Залазей в машину *наверное*")
								main_player.style.transform = "rotate(4.8turn)"
								main_player.style.transition = "4s"
								main_player.style.left = "50%";
								main_player.style.top = "65%";
								function carHref() {
									location.href = 'https://dalakhan.github.io/Piggysleeve/';	
								}
								function playerDisplay() {
									main_player.style.display = "none"	
								}
								function carMove() {
									nlo.style.animationName = "ufoMove"
									
								}
								setTimeout(playerDisplay, 5000)
								setTimeout(carHref, 9000)
								setTimeout(carMove, 6000)
							}
						}
		            }
		            if (score<6) {
		                alert('проиграл, придется проходить всё сначало...')
		            	window.location. reload()
		            	
		            	main.style.display = "block";
						location3.style.display = "none";
						body.style.backgroundImage = "url(bg1.png)";
						body.style.backgroundSize = "cover";
		            }
		        }
		    setTimeout(stopGame, timer)
		    
		    for(let i=0; i<12; i=i+1) {
		        
		       let num = getRandom(images.length-1); // Сохраняю рандом в переменную

		       let box = document.createElement('div');
		       row.appendChild(box);
		       box.classList.add('item');
		       
		       box.name = images[num]
		       box.style.backgroundImage = "url(" + images[num] + ")"
		       images.splice(num, 1)
		            
		        let boxOnclickOpti = function(name , classarg,) {
		            if(box.name == name) {
		                box.style.border = "4px solid orange"
		                box.classList.add(classarg)
		                box.onclick = null;
		                check = check + 1;
		                console.log(check)
		                box.style.transition = "1s";
		                if(check==2) {
		                    document.querySelectorAll("."+classarg)[0].style.opacity="0";
		                    document.querySelectorAll("."+classarg)[1].style.opacity="0";
		                    check=0
		                    score = score + 1;
		                    scoreS.innerHTML = score
		                	
		                }
		            }
		        }


            box.onclick = function() {
                boxOnclickOpti("sobery2-main/Wisp.webp","pokemon1")
                boxOnclickOpti("sobery2-main/naem.webp","pokemon2")
                boxOnclickOpti("sobery2-main/trap.webp","pokemon3")
                boxOnclickOpti("sobery2-main/hunter.png","pokemon4")
                boxOnclickOpti("sobery2-main/Жирный.webp","pokemon5")
                boxOnclickOpti("sobery2-main/Imp.webp","pokemon6")
                
                }
            }
        }    		
	}
	setTimeout(changeLocation3, 1000)
	function moveLocation3() {
		mastery.style.opacity = "0"
	}
}

arena.onclick = function() {
	main_player.style.top = "28%";
	main_player.style.left = "45%";
	main_player.style.transform = "rotate(3turn)"
	let talk = document.querySelector(".loc4_talk");
	let geoS = 0 
	let getRandom = function(arg) {
	        let random = Math.random() * arg;
	        let round = Math.round(random)
	        return round
	    }
	setTimeout(moveLocation4, 3000)	
	let changeLocation4 = function(){
		hotline.pause()
		soup.play()
		main.style.display = "none";
		location4.style.display = "block";
		body.style.backgroundImage = "url(loc4/back.png)";
		body.style.background = "cover"
		setTimeout(showTalk, 100)		
		for(let i=0; i<12; i=i+1) {
			let geo2 = function() {
			    geo[i].style.display = "block"
			    geo[i].style.top = getRandom(900) + 'px'
			    geo[i].style.left = getRandom(1520) + 'px'
	    	}
			geo[i].onclick = function() {
				geoS = geoS + 1
				geo[i].style.display = "none"
				if (geoS==12) {
					alert("идем дальше")
					soup.pause()
					hotline.play()
					shield.style.display = "block";
					main.style.display = "block";
					location4.style.display = "none";
					body.style.backgroundImage = "url(bg1.png)";
					body.style.backgroundSize = "cover";
					console.log(scoreEnd2)
					scoreEnd2 = scoreEnd2 + 1
					if(scoreEnd2 >= 3) {
						console.log("dww")
						nlo.style.animationName = "ufo";							
						text.style.opacity = "1"
						nlo.onclick = function() {
							crystal.play()
							hotline.pause()
							alert("Ты Победитель.. Залазей в машину *наверное*")
							main_player.style.transform = "rotate(4.8turn)"
							main_player.style.transition = "4s"
							main_player.style.left = "50%";
							main_player.style.top = "65%";
							function carHref() {
								location.href = 'https://dalakhan.github.io/Piggysleeve/';	
							}
							function playerDisplay() {
								main_player.style.display = "none"	
							}
							function carMove() {
								nlo.style.animationName = "ufoMove"
								
							}
							setTimeout(playerDisplay, 5000)
							setTimeout(carHref, 9000)
							setTimeout(carMove, 6000)
						}
					}
				}
			}
			setTimeout(geo2, 2000)
		}
	}
	function showTalk() {
		talk.style.display = "block";
	}
	setTimeout(changeLocation4, 1000)
	function moveLocation4() {
		arena.style.opacity = "0"
	}
}

