const wonderName = document.getElementById("wonder-name");
const wonderImage = document.getElementById("wonder-image");
const wonderDescription = document.getElementById("wonder-description");
const wondersList = document.getElementById("wonders-list");
const reviewList = document.getElementById("review-list");
fetch("http://localhost:3000/sevenWonders")
  .then((res) => res.json())
  .then((wonders) => {
    wonders.forEach((wonder) => {
      appendWonderDetails(wonder);
      displayWonderNames(wonder);
    });
  });

function displayWonderNames(wonder) {
  const listTags = document.createElement("li");
  listTags.textContent = wonder.name;
  listTags.addEventListener("click", () => {
    appendWonderDetails(wonder);
  });
  wondersList.appendChild(listTags);
}

function appendWonderDetails(wonder) {
  wonderName.textContent = wonder.name;
  wonderImage.src = wonder.image;
  wonderDescription.textContent = wonder.description;
}
const reviewForm = document.getElementById("review-form");
reviewForm.addEventListener("submit", (e) => {
  e.preventDefault();
  addReview();
});

function addReview() {
  const review = document.getElementById("review");
  const reviewLi = document.createElement("li");
  reviewLi.textContent = review.value;
  reviewList.appendChild(reviewLi);
}
