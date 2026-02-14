function orderNow(menu) {
  const waNumber = "085649702804";
  const message = encodeURIComponent("Saya mau pesan: " + menu);
  window.open(`https://wa.me/${waNumber}?text=${message}`, "_blank");
}

function searchMenu() {
  const input = document.getElementById("searchInput").value.toLowerCase();
  const items = document.querySelectorAll(".menu-item");
  let found = false;

  items.forEach(item => {
    const name = item.getAttribute("data-name");
    if (name.includes(input)) {
      item.style.display = "block";
      found = true;
    } else {
      item.style.display = "none";
    }
  });

  document.getElementById("searchText").innerText = input;
  document.getElementById("noResults").style.display = found || input === "" ? "none" : "block";
}
