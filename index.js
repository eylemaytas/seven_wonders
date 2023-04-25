const wonderName = document.getElementById("wonder-name");
const wonderImage = document.getElementById("wonder-image");
const wonderDescription = document.getElementById("wonder-description");
const wondersList = document.getElementById("wonders-list");
const reviewList = document.getElementById("review-list");
let numOfLikes = 1;
const likesBox = document.getElementById("likes-box");
const likesButton = document.getElementById("like-button");

fetch("http://localhost:3000/sevenWonders")
  .then((res) => res.json())
  .then((wonders) => {
    wonders.forEach((wonder) => {
      appendWonderDetails(wonders[0]);
      displayWonderNames(wonder);
    });
  });

function displayWonderNames(wonder) {
  const listTags = document.createElement("li");
  listTags.textContent = wonder.name;
  listTags.addEventListener("mouseover", () => {
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
  const reviewLi = document.createElement("p");
  reviewLi.textContent = review.value;
  reviewList.appendChild(reviewLi);
}

function addLikes() {
  likesBox.textContent = numOfLikes++ + " likes";
}

likesButton.addEventListener("click", addLikes);
