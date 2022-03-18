window.addEventListener("load", () => {
  var slider = document.getElementById("slider");
  var selector = document.getElementById("selector");
  var selectValue = document.getElementById("selectValue");
  var progressBar =  document.getElementById('progressBar');
  var fetchVal =  document.getElementById('enterVal');
  selectValue.innerHTML = slider.value;
  slider.oninput = function () {
    selectValue.innerHTML = slider.value;
    selector.style.left = this.value + "%";
    progressBar.style.width = this.value + "%";
    fetchVal.value = slider.value;
  };
  fetchVal.oninput = function(e){
    selectValue.innerHTML = fetchVal.value;
    selector.style.left = this.value + "%";
    progressBar.style.width = this.value + "%";
  }
});
