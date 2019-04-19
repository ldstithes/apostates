(function() {

var des01 = '𐐆𐐻 𐐶𐐲𐑆 𐑄 𐐮𐑋𐐹𐐯𐑉𐐲𐐻𐐮𐑂 𐐼𐐭𐐻𐐨 𐐲𐑂 𐑄 𐐕𐐲𐑉𐐽 𐐻𐐭 𐐬𐐺𐐩 ... 𐐰𐑌𐐼 𐑄𐐰𐐻 𐐮𐑁 𐑄𐐯𐑉 𐐶𐐲𐑉 𐐯𐑌𐐨 𐑄𐐰𐐻 𐐶𐐳𐐼 𐑌𐐪𐐻, 𐑄𐐩 𐑇𐐳𐐼 𐐸𐐰𐑂 𐑄𐐯𐑉 𐑃𐑉𐐬𐐻𐑅 𐐿𐐲𐐻 𐑁𐑉𐐲𐑋 𐐨𐑉 𐐻𐐭 𐐨𐑉.';
var eng01 = 'It was the imperative duty of the Church to obey ... and that if there were any that would not, they should have their throats cut from ear to ear.';

var ara02 = 'فالأشخاص الذين يغيرون دينهم يجب أن يواجهوا عقوبة الإعدام.';
var eng02 = 'People who change their religion should face the death penalty.';

var gre03 = 'Οι αποστάτες είναι ψυχικά νοσούντες';
var eng03 = 'Apostates are “mentally diseased”';

var heb04 = 'אם אחיך ... [נניח,] נלך לשרת אלים אחרים ... אתה אבן אבן לו אבנים, שהוא מת.';
var eng04 = 'If thy brother ... [saith,] Let us go and serve other gods ... thou shalt stone him with stones, that he die.';

var lat05 = 'Sed haeretici, ut primum cum de haeresi convincuntur, [ut] non solum excommunicari, sed et posuit usque ad mortem.';
var eng05 = 'Heretics, as soon as they are convicted of heresy, [should] be not only excommunicated but even put to death.';
	
var ali06 = '<img class="desktop" style="width:100%" src="images/klingon.png" alt="hubbard quote"><img class="mobile" style="width:100%" src="images/klingon-mobile.png" alt="hubbard quote">';
var eng06 = '[Apostates are] fair game. May be deprived of property or injured by any means...May be tricked, sued or lied to or destroyed.';


$('#des01').html(des01).css('font-family', 'adamicbee').css('font-size', '2.2rem');
$('#eng01').html(eng01).hide();

$('#ara02').html(ara02).css('font-family', 'Amiri');
$('#eng02').html(eng02).hide();

$('#gre03').html(gre03).css('font-family', 'GFS Neohellenic').css('font-size', '2.8rem');
$('#eng03').html(eng03).hide();

$('#heb04').html(heb04).css('font-family', 'Tinos');
$('#eng04').html(eng04).hide();

$('#lat05').html(lat05);
$('#eng05').html(eng05).hide();
	
$('#ali06').html(ali06);
$('#eng06').html(eng06).hide();

//Hover
$('.translatify01').hover(
    function() {
        $("#des01").fadeOut(1200);
        $("#eng01").fadeIn(1200);
        },
    function() {
        $("#des01").fadeIn(1200);
        $("#eng01").fadeOut(1200);
    });

$('.translatify02').hover(
    function() {
        $("#ara02").fadeOut(1200);
        $("#eng02").fadeIn(1200);
        },
    function() {
        $("#ara02").fadeIn(1200);
        $("#eng02").fadeOut(1200);
    });

$('.translatify03').hover(
    function() {
        $("#gre03").fadeOut(1200);
        $("#eng03").fadeIn(1200);
        },
    function() {
        $("#gre03").fadeIn(1200);
        $("#eng03").fadeOut(1200);
    });

$('.translatify04').hover(
    function() {
        $("#heb04").fadeOut(1200);
        $("#eng04").fadeIn(1200);
        },
    function() {
        $("#heb04").fadeIn(1200);
        $("#eng04").fadeOut(1200);
    });

$('.translatify05').hover(
    function() {
        $("#lat05").fadeOut(1200);
        $("#eng05").fadeIn(1200);
        },
    function() {
        $("#lat05").fadeIn(1200);
        $("#eng05").fadeOut(1200);
    });
	
$('.translatify06').hover(
    function() {
        $("#ali06").fadeOut(1200);
        $("#eng06").fadeIn(1200);
        },
    function() {
        $("#ali06").fadeIn(1200);
        $("#eng06").fadeOut(1200);
    });

$('#dis-con').children().hide();
$('#dissenters-content').show();

$("#dis-nav a").click(function ( e ) {
    var selected = this.name;
    $('#'+selected).show(0).siblings().hide(0);
    e.stopPropagation();
    return false;
});
})();
