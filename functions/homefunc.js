function PopExpand(title, category, description, howItWorks, example, keyPoints, image) {

    document.getElementById("popupCategory").textContent = category || "LESSON DETAILS";
    document.getElementById("popupTitle").textContent = title;
    document.getElementById("popupDescription").textContent = description;
    document.getElementById("popupHowItWorks").textContent = howItWorks;
    document.getElementById("popupExample").innerHTML = example.replace(/\n/g, "<br>");

    const popupImage = document.getElementById("popupImage");

    if (image) {
        popupImage.src = image;
        popupImage.style.display = "block";
    } else {
        popupImage.style.display = "none";
    }

    const keyPointsList = document.getElementById("popupKeyPoints");
    keyPointsList.innerHTML = "";

    const points = keyPoints.split("|");

    for (let i = 0; i < points.length; i++) {
        const bulletItem = document.createElement("li");
        bulletItem.textContent = points[i].trim();
        keyPointsList.appendChild(bulletItem);
    }

    document.getElementById("popUpOverlay").style.display = "flex";
    document.body.classList.add("popup-lock");
}


function closePopup(event) {

    const clickedTheBackground = event && event.target.id === "popUpOverlay";
    const clickedTheXButton    = event && event.target.tagName === "BUTTON";
    const calledDirectly       = !event;

    if (calledDirectly || clickedTheBackground || clickedTheXButton) {
        document.getElementById("popUpOverlay").style.display = "none";
        document.body.classList.remove("popup-lock");
    }
}
