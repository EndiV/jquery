$(document).ready(function(){

}); //pret qe faqa te behet load 


// //selectoret//

// $('*') // selelcton te gjithe elementet//

// $(this) // shenon elementin ku jam //

// $('.demo') // selekton klasen demo//

// $('p.demo') // selekton te gjithe p me clase demo //

// $('p:first') // selekton elementin e pare //

// $("[src]") //selekton atributet // 



// $('h1').dblclick(function(){
//     $(this).hide()
// });

// $('p').mouseenter(function(){
//     alert("ju jeni tek ky element")
// })
// $('p').mouseleave(function(){
//     alert("ju dolet nga ky element")
// })

// $(" body p:nth-child(3)").dblclick(function(){
//     alert("ju jeni tek ky element")
// })
$("body p:nth-child(3)").click(function(){
   $(this).fadeOut();
})
$("body p:nth-child(3)").click(function(){
    $(this).fadeIn();
 })
 

