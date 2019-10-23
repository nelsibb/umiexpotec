//appends an "active" class to .popup and .popup-content when the "Open" button is clicked
 function popupprimero(){
  $(".popup-overlay, .popup-content").addClass("active");
};



//removes the "active" class to .popup and .popup-content when the "Close" button is clicked
$(".close").on("click", function(){
  $(".popup-overlay, .popup-content").removeClass("active");
});




function Destino() {
  alert("Mostrar");
  $(".popup-overlay, .popup-content").removeClass("active");
  
}
