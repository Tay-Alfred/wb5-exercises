"use strict";

const educationalDropdown = document.getElementById("educationalDropdown");
const outdoorDropdown = document.getElementById("outdoorDropdown");
const plushDropdown = document.getElementById("plushDropdown");
const toyCategoryDropdown = document.getElementByvalue("toyCategoryDropdown");

toyCategoryDropdown.addEventListener('change', function() {
    const selectedCategory = this.value;
    if (selectedCategory === "educational_toy") {
        educationalDropdown.style.display = 'block';
        outdoorDropdown.style.display = 'none';
        plushDropdown.style.display = 'none';
    } else if (selectedCategory === "outdoor_toy") {
        educationalDropdown.style.display = 'none';
        outdoorDropdown.style.display = 'block';
        plushDropdown.style.display = 'none';
    } else if (selectedCategory === "plush_toy") {
        educationalDropdown.style.display = 'none';
        outdoorDropdown.style.display = 'none';
        plushDropdown.style.display = 'block';
    } else {
        // Handle the case when no category is selected
        educationalDropdown.style.display = 'none';
        outdoorDropdown.style.display = 'none';
        plushDropdown.style.display = 'none';
    }
});
