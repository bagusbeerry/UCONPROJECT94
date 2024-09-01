function openModal(imageId) {
    var modal = document.getElementById("myModal");
    var modalImg = document.getElementById("modalImage");
    var img = document.getElementById(imageId);
    modal.style.display = "block";
    modalImg.src = img.src;
  }
  
  function closeModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
  }