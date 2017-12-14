var namesOfStudents = [
{name: "Արթուր Գրիգորյան", course: 1},
{name: "Էրիկ Մկրտչեան", course: 1},{name: "Տարոն Արամեան", course: 1},{name: "Դավիթ Սարգսյան", course: 1},{name: "Ինգա Վարղարշեան", course: 1},{name: "Ջուլիետա Բախշեան", course: 1},
{name: "Արամ Պողոսեան", course: 1},
{name: "Արմեն Պողոսեան", course: 2},{name: "Սամուել Յարութիւնեան", course: 2},
{name: "Լիլիթ Նազարեան", course: 2},
{name: "Աննա Մարտիրոսեան", course: 1},
{name: "Գոռ Մարտիրոսեան", course: 1},{name: "Գեղամ Պետրոսեան", course: 1},{name: "Գեղամ Խուդաւերդեան", course: 2},
{name: "Անի Զաքարեան", course: 2},
{name: "Հովո Նազլուխանեան", course: 2},
{name: "Արթուր Կարագուլեան", course: 1},{name: "Դավիթ Աֆեան", course: 1},{name: "Գարեգին Ղազարեան", course: 1},
{name: "Կարեն Ղազարեան", course: 1},
{name: "Ստեփան Մանջիկեան", course: 1},
{name: "Հայկ Անդրէասեան", course: 1},
{name: "Շանթ Օհանջանյան", course: 1}];
for (var a = 0, b = 0; a < $(".studentDiv a p").length- 1; a+=2, b++) {
	$(".studentDiv a p")[a].innerHTML = namesOfStudents[b].name;
	$(".studentDiv a p")[a+1].innerHTML = "Կուրս "+namesOfStudents[b].course;
	$(".studentDiv a .projects")[b].style.background = "url(images/"+(b+1)+".jpg)";
	$(".studentDiv a")[b].href+="?name="+namesOfStudents[b].name+"&img=images/"+(b+1)+".jpg";
}