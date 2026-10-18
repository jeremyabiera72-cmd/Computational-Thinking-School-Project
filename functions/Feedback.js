document.addEventListener("DOMContentLoaded", function () {
  
  /*Setup*/
  var STORAGE_KEY = "feedback_reviews";
  var STAR = '<svg viewBox="0 0 24 24"><path d="M12 2.8l2.9 6 6.6.9-4.8 4.6 1.2 6.5L12 17.6 6.1 20.8l1.2-6.5L2.5 9.7l6.6-.9z"/></svg>';

  var rating = 0;
  var starsEl = document.getElementById("stars");
  var reviewsEl = document.getElementById("reviews");
  var formEl = document.getElementById("form");
  var errEl = document.getElementById("err");

  /*Saving and loading reviews (they stay after refresh)*/
  function loadReviews() {
    try {
      var saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        return JSON.parse(saved);
      }
    } catch (e) {}
    return [];
  }

  function saveReviews() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(reviews));
    } catch (e) {}
  }

  var reviews = loadReviews();

  /*Helpers*/
  function esc(s) {
    var map = {"&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"};
    return String(s).replace(/[&<>"']/g, function (c) {
      return map[c];
    });
  }

  function formatDate(ts) {
    var d = new Date(ts);
    return d.toLocaleDateString(undefined, {year: "numeric", month: "short", day: "numeric"});
  }

  /*Star rating*/
  function paintStars(hover) {
    var btns = starsEl.children;
    for (var i = 0; i < btns.length; i++) {
      btns[i].classList.toggle("on", i < rating);
      btns[i].classList.toggle("hv", hover ? i < hover : false);
    }
  }

  function makeStar(i) {
    var b = document.createElement("button");
    b.type = "button";
    b.className = "star";
    b.innerHTML = STAR;
    b.setAttribute("aria-label", i + " star" + (i > 1 ? "s" : ""));
    b.onclick = function () { rating = i; paintStars(); };
    b.onmouseenter = function () { paintStars(i); };
    starsEl.appendChild(b);
  }

  for (var s = 1; s <= 5; s++) {
    makeStar(s);
  }
  starsEl.onmouseleave = function () { paintStars(); };

  /*Show reviews (newest first)*/
  function starsHtml(n) {
    var out = "";
    for (var i = 1; i <= 5; i++) {
      out += STAR.replace("<svg", i <= n ? '<svg class="f"' : "<svg");
    }
    return out;
  }

  function render() {
    if (reviews.length === 0) {
      reviewsEl.innerHTML = '<p class="rm" style="padding:26px 11px">No reviews yet. Be the first to share your feedback.</p>';
      return;
    }
    var html = "";
    for (var i = 0; i < reviews.length; i++) {
      var v = reviews[i];
      html += '<div class="rev"><div class="av"></div><div class="rb">' +
        '<div class="rt"><b>' + esc(v.name) + '</b><span>' + formatDate(v.time) + '</span></div>' +
        '<p class="rm">' + esc(v.message) + '</p>' +
        '<div class="rs">' + starsHtml(v.rating) + '</div>' +
        '</div></div>';
    }
    reviewsEl.innerHTML = html;
  }

  /*Submit*/
  formEl.addEventListener("submit", function (e) {
    e.preventDefault();

    var name = document.getElementById("name").value.trim();
    var email = document.getElementById("email").value.trim();
    var message = document.getElementById("msg").value.trim();
    var error = "";

    if (!name) error = "Please enter your name.";
    else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) error = "Please enter a valid email.";
    else if (!message) error = "Please write your feedback.";
    else if (!rating) error = "Please choose a rating.";

    errEl.textContent = error;
    if (error) return;

    reviews.unshift({
      name: name,
      message: message,
      rating: rating,
      time: Date.now()
    });
    saveReviews();
    render();

    formEl.reset();
    rating = 0;
    paintStars();
    reviewsEl.scrollTop = 0;
  });

  /*Start*/
  render();
});