'use strict';



// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }




// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });



// testimonials variables
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

// modal variable
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");

// modal toggle function
const testimonialsModalFunc = function () {
  modalContainer.classList.toggle("active");
  overlay.classList.toggle("active");
}

// add click event to all modal items
for (let i = 0; i < testimonialsItem.length; i++) {

  testimonialsItem[i].addEventListener("click", function () {

    modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
    modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
    modalTitle.innerHTML = this.querySelector("[data-testimonials-title]").innerHTML;
    modalText.innerHTML = this.querySelector("[data-testimonials-text]").innerHTML;

    testimonialsModalFunc();

  });

}

// add click event to modal close button
modalCloseBtn.addEventListener("click", testimonialsModalFunc);
overlay.addEventListener("click", testimonialsModalFunc);



// custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

select.addEventListener("click", function () { elementToggleFunc(this); });

// add event in all select items
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);

  });
}

// filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {

  for (let i = 0; i < filterItems.length; i++) {

    if (selectedValue === "all") {
      filterItems[i].classList.add("active");
    } else if (selectedValue === filterItems[i].dataset.category) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }

  }

}

// add event in all filter button items for large screen
let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {

  filterBtn[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    filterFunc(selectedValue);

    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;

  });

}



// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// add event to all form input field
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {

    // check form validation
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }

  });
}



// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {

    for (let i = 0; i < pages.length; i++) {
      if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
        pages[i].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[i].classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    }

  });
}

document.addEventListener('DOMContentLoaded', function() {
  var revealLink = document.getElementById('reveal-link');
  var phoneLink = document.getElementById('phone-link');

  // Add click event listener to reveal link
  revealLink.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default link behavior
    phoneLink.style.display = 'inline'; // Show the phone number
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const loadMoreButton = document.getElementById('loadMoreButton');
  const hiddenItems = document.querySelectorAll('.timeline-item.hidden');
  
  loadMoreButton.addEventListener('click', function() {
    hiddenItems.forEach(function(item) {
      item.classList.remove('hidden');
    });
    
    loadMoreButton.style.display = 'none';
  });
});


// Wait for the document to load
document.addEventListener("DOMContentLoaded", function() {
  // Define the initial number of items to show and the number of items to load at a time
  var itemsToShow = 1;
  var itemsToLoad = 2;

  // Get references to the necessary elements
  var timelineContent = document.getElementById("timelineContent");
  var loadMoreButton = document.getElementById("loadMoreButton");

  // Hide the load more button initially if there are no more items to load
  if (timelineContent.children.length <= itemsToShow) {
    loadMoreButton.style.display = "none";
  }

  // Add an event listener to the load more button
  loadMoreButton.addEventListener("click", function() {
    // Calculate the index range for the next set of items to load
    var startIndex = timelineContent.children.length;
    var endIndex = startIndex + itemsToLoad;

    // Loop through the hidden items and append them to the timelineContent
    for (var i = startIndex; i < endIndex; i++) {
      var hiddenItem = document.querySelector(".timeline-text.hidden");
      if (hiddenItem) {
        hiddenItem.classList.remove("hidden");
        timelineContent.appendChild(hiddenItem);
      }
    }

    // Hide the load more button if there are no more items to load
    if (timelineContent.children.length <= endIndex) {
      loadMoreButton.style.display = "none";
    }
  });
});

// Example of setting a cookie with the SameSite attribute
document.cookie = "myCookie=myValue; SameSite=Strict";



