let firstClickBold = true;
document.querySelector('.bold').addEventListener('click', function () {
    if (firstClickBold) {
        document.querySelector('.content').style.fontWeight = 'bold';
        firstClickBold=false;
    }
    else{
        document.querySelector('.content').style.fontWeight = 'normal';
        firstClickBold=true;
    }
});
let firstClickItalic = true;
document.querySelector('.italic').addEventListener('click', function () {
    if (firstClickItalic) {
        document.querySelector('.content').style.fontStyle = 'italic';
        firstClickItalic=false;
    }
    else{
        document.querySelector('.content').style.fontStyle = 'normal';
        firstClickItalic=true;
    }
});
let firstClicUnderline = true;
document.querySelector('.underline').addEventListener('click', function () {
    if (firstClicUnderline) {
        document.querySelector('.content').style.textDecoration = 'underline';
        firstClicUnderline=false;
    }
    else{
        document.querySelector('.content').style.textDecoration = 'none';
        firstClicUnderline=true;
    }
});
let firstClicStrikethrough = true;
document.querySelector('.strikethrough').addEventListener('click', function () {
    if (firstClicStrikethrough) {
        document.querySelector('.content').style.textDecoration = 'line-through';
        firstClicStrikethrough=false;
    }
    else{
        document.querySelector('.content').style.textDecoration = 'none';
        firstClicStrikethrough=true;
    }
});
document.querySelector('.textLeft').addEventListener('click', function () {
        document.querySelector('.content').style.textAlign = 'left';
});
document.querySelector('.textCenter').addEventListener('click', function () {
        document.querySelector('.content').style.textAlign = 'center';
});
document.querySelector('.textRight').addEventListener('click', function () {
        document.querySelector('.content').style.textAlign = 'right';
});
//font
document.querySelector('.font1').addEventListener('click', function () {
        document.querySelector('.content').style.fontFamily = document.querySelector('.font1').innerHTML;
});
document.querySelector('.font2').addEventListener('click', function () {
        document.querySelector('.content').style.fontFamily = document.querySelector('.font2').innerHTML;
});
document.querySelector('.font3').addEventListener('click', function () {
        document.querySelector('.content').style.fontFamily = document.querySelector('.font3').innerHTML;
});
document.querySelector('.font4').addEventListener('click', function () {
        document.querySelector('.content').style.fontFamily = document.querySelector('.font4').innerHTML;
});
document.querySelector('.font5').addEventListener('click', function () {
        document.querySelector('.content').style.fontFamily = document.querySelector('.font5').innerHTML;
});
document.querySelector('.font6').addEventListener('click', function () {
        document.querySelector('.content').style.fontFamily = document.querySelector('.font6').innerHTML;
});
//fontSize
document.querySelector('.px12').addEventListener('click', function () {
        document.querySelector('.content').style.fontSize = document.querySelector('.px12').innerHTML;
});
document.querySelector('.px14').addEventListener('click', function () {
        document.querySelector('.content').style.fontSize = document.querySelector('.px14').innerHTML;
});
document.querySelector('.px16').addEventListener('click', function () {
        document.querySelector('.content').style.fontSize = document.querySelector('.px16').innerHTML;
});
document.querySelector('.px18').addEventListener('click', function () {
        document.querySelector('.content').style.fontSize = document.querySelector('.px18').innerHTML;
});
document.querySelector('.px20').addEventListener('click', function () {
        document.querySelector('.content').style.fontSize = document.querySelector('.px20').innerHTML;
});
document.querySelector('.px22').addEventListener('click', function () {
        document.querySelector('.content').style.fontSize = document.querySelector('.px22').innerHTML;
});
document.querySelector('.px25').addEventListener('click', function () {
        document.querySelector('.content').style.fontSize = document.querySelector('.px25').innerHTML;
});
document.querySelector('.px30').addEventListener('click', function () {
        document.querySelector('.content').style.fontSize = document.querySelector('.px30').innerHTML;
});
document.querySelector('.btnColorText').addEventListener('click', function () {
     document.querySelector('.colorTextBox').style.display = 'flex';
     document.body.style.backgroundColor = 'grey';
     document.body.style.opacity = '1';
});
//colorText
let colorText = document.querySelectorAll('.colorTextBox div')
for (let i = 0; i < colorText.length; i++) {
    colorText[i].addEventListener('click', function (event) {
        document.querySelector('.content').style.color = getComputedStyle(event.currentTarget).backgroundColor;

    });
}
document.querySelector('.closeColorText').addEventListener('click', function () {
    document.querySelector('.colorTextBox').style.display= 'none';
    document.body.style.opacity = '1';
    document.body.style.backgroundColor = '';
})
document.querySelector('.btnFiles').addEventListener('click', function () {
     document.querySelector('.background').style.display = 'block';
    document.querySelector('.backgroundColor').style.display = 'flex';
     document.body.style.backgroundColor = 'grey';
     document.body.style.opacity = '1';
});
document.querySelector('.closeBackgroundText').addEventListener('click', function () {
    document.querySelector('.background').style.display= 'none';
    document.body.style.opacity = '1';
    document.body.style.backgroundColor = '';
    document.querySelector('.closeBackgroundText').style.cursor = 'pointer';
})
document.querySelector('.btn_color').addEventListener('click', function () {
   document.querySelector('.backgroundColor').style.display = 'flex'; 
    document.querySelector('.ChooseFiles').style.display = 'none';
   document.querySelector('.backgroundImages').style.display = 'none';   
});
document.querySelector('.btn_image').addEventListener('click', function () {
   document.querySelector('.backgroundColor').style.display = 'none'; 
    document.querySelector('.ChooseFiles').style.display = 'none';
   document.querySelector('.backgroundImages').style.display = 'flex';   
});
document.querySelector('.btn_files').addEventListener('click', function () {
   document.querySelector('.backgroundColor').style.display = 'none'; 
    document.querySelector('.ChooseFiles').style.display = 'block';
   document.querySelector('.backgroundImages').style.display = 'none';   
});
let backgroundColor = document.querySelectorAll('.backgroundColor div')
for (let i = 0; i < backgroundColor.length; i++) {
    backgroundColor[i].addEventListener('click', function (event) {
        document.body.style.backgroundColor = getComputedStyle(event.currentTarget).backgroundColor;
        document.querySelector('.content').style.backgroundImage='';
    });
}
let backgroundImage = document.querySelectorAll('.backgroundImages div')
for (let i = 0; i < backgroundImage.length; i++) {
    backgroundImage[i].addEventListener('click', function (event) {
        document.body.style.backgroundImage = getComputedStyle(event.currentTarget).backgroundImage;
    });
}
document.querySelector('.files').addEventListener('change', function(event){
    let file = URL.createObjectURL(event.target.files[0]);
    console.log(file);
    document.body.style.background = `url(${file})`;
});
document.querySelector('.btn-sign').addEventListener('click', function () {
    if(document.querySelector('.loginInput').value=='admin' &&  document.querySelector('.passwordInput').value=='admin'){
        document.querySelector('.loginForm').style.display='none';
        document.querySelector('.header').style.opacity = '1';
        document.querySelector('.content').style.opacity = '1';
        document.body.style.opacity = '1';
        document.body.style.backgroundColor = '';
    }  
});
document.querySelector('.btn-lock').addEventListener('click', function () {
    document.querySelector('.loginForm').style.display='block';
    document.body.style.backgroundColor = 'grey';
    document.body.style.opacity = '1';
});
document.querySelector('.btnHeader2Back').addEventListener('click', function () {
    document.querySelector('.header2').style.display= 'none';
    document.querySelector('#content-textarea').style.display= 'none';
    document.querySelector('.header').style.display= 'flex';
    document.querySelector('.content').style.display= 'block';
});
document.querySelector('.btnHeader2Table').addEventListener('click', function () {
    document.querySelector('.tableWindow').style.display='flex';
    document.querySelector('.header2').style.backgroundColor = 'grey';
    document.querySelector('.content2').style.backgroundColor = 'grey';
    document.querySelector('.header2').style.opacity = '0.3';
    document.querySelector('.content2').style.opacity = '0.3';
});
document.querySelector('.closeTableWindow').addEventListener('click', function () {
    document.querySelector('.tableWindow').style.display= 'none';
    document.querySelector('.header2').style.backgroundColor = 'grey';
    document.querySelector('.content2').style.backgroundColor = 'grey';
    document.querySelector('.header2').style.opacity = '1';
    document.querySelector('.content2').style.opacity = '1';
});
document.querySelector('.btnHeader2NumberList').addEventListener('click', function () {
    document.querySelector('.windowCountLi').style.display='block';
    document.querySelector('.header2').style.backgroundColor = 'grey';
    document.querySelector('.content2').style.backgroundColor = 'grey';
    document.querySelector('.header2').style.opacity = '0.3';
    document.querySelector('.content2').style.opacity = '0.3';
});
document.querySelector('.closeWindowCountLi').addEventListener('click', function () {
    document.querySelector('.windowCountLi').style.display= 'none';
    document.querySelector('.header2').style.backgroundColor = 'grey';
    document.querySelector('.content2').style.backgroundColor = 'grey';
    document.querySelector('.header2').style.opacity = '1';
    document.querySelector('.content2').style.opacity = '1';
});
document.querySelector('.btnHeader2List').addEventListener('click', function () {
    document.querySelector('.windowCountLi2').style.display='block';
    document.querySelector('.header2').style.backgroundColor = 'grey';
    document.querySelector('.content2').style.backgroundColor = 'grey';
    document.querySelector('.header2').style.opacity = '0.3';
    document.querySelector('.content2').style.opacity = '0.3';
});
document.querySelector('.closeWindowCountLi2').addEventListener('click', function () {
    document.querySelector('.windowCountLi2').style.display= 'none';
    document.querySelector('.header2').style.backgroundColor = 'grey';
    document.querySelector('.content2').style.backgroundColor = 'grey';
    document.querySelector('.header2').style.opacity = '1';
    document.querySelector('.content2').style.opacity = '1';
});
document.querySelector('.btnContent2').addEventListener('click', function () {
    document.querySelector('.header').style.display= 'none';
    document.querySelector('.content').style.display= 'none';
    document.querySelector('#content-textarea').style.display= 'block';
    document.querySelector('.header2').style.display= 'flex';
});
document.querySelector('.ButtonCreate').addEventListener('click', function () {
    let quantityTR = document.querySelector('.inputCountTR').value;
    let quantityTD = document.querySelector('.inputCountTd').value;
    let widthTD = document.querySelector('.inputWidthofTd').value;
    let heightTD = document.querySelector('.inputHeightofTD').value;
    let widthBorder = document.querySelector('.inputWidthofBorder').value;
    let styleBorder = document.querySelector('#borderStyle').value;
    let colorBorder = document.querySelector('.inputColorBorder').value;
    document.getElementById('content-textarea').value += `<table style="margin:0 auto; border-width:${widthBorder}px; border-style:${styleBorder}; border-color: ${colorBorder}">`;
    for (let i = 1; i <= quantityTR; i++) {
        document.getElementById('content-textarea').value += `<tr>`;
        for (let j = 1; j <= quantityTD; j++) {
            document.getElementById('content-textarea').value += `<td style="width:${widthTD}px; height:${heightTD}px; border-width:${widthBorder}px; border-style: ${styleBorder}; border-color: ${colorBorder}">logos</td>`;
        }
        document.getElementById('content-textarea').value += `</tr>`;
    }
    document.getElementById('content-textarea').value += `</table>`;
    document.querySelector('.content').innerHTML = document.getElementById('content-textarea').value;
});
document.querySelector('.reset').addEventListener('click', function () {
    document.querySelector('.inputCountTR').value = '';
    document.querySelector('.inputCountTd').value = '';
    document.querySelector('.inputWidthofTd').value = '';
    document.querySelector('.inputHeightofTD').value = '';
    document.querySelector('.inputWidthofBorder').value = '';
    document.querySelector('#borderStyle').value = 'dotted';
    document.querySelector('.inputColorBorder').value = ''; 
});
document.querySelector('.windowCountLiButton-btnCreate').addEventListener('click', function () {
    let countLi = document.querySelector('.inputCountLiNumber').value;
    let listType = document.querySelector('#TypeMarkNumber').value;
    for (let i = 1; i <= countLi; i++) {
       document.getElementById('content-textarea').value += `<li style="list-style-type:${listType}">logos</li>`;
        document.querySelector('.content').innerHTML = document.getElementById('content-textarea').value;
    }
});
document.querySelector('.windowCountLiButton-btnReset').addEventListener('click', function () {
    document.querySelector('.inputCountLiNumber').value = '';
});
document.querySelector('.windowCountLiButton-btnCreate2').addEventListener('click', function () {
    let countLi = document.querySelector('.inputCountLiNumber2').value;
    let listType = document.querySelector('#TypeMarkNumber2').value;
    for (let i = 1; i <= countLi; i++) {
       document.getElementById('content-textarea').value += `<li style="list-style-type:${listType}">logos</li>`;
        document.querySelector('.content').innerHTML = document.getElementById('content-textarea').value;
    }
});
document.querySelector('.windowCountLiButton-btnReset2').addEventListener('click', function () {
    document.querySelector('.inputCountLiNumber2').value = '';
});






