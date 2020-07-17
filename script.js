let WorkFlowGifUrlList = [
  "https://www.paypalobjects.com/digitalassets/c/website/marketing/apac/india/optimised/home/how-pp-works-1.gif",
  "https://www.paypalobjects.com/digitalassets/c/website/marketing/apac/india/optimised/home/how-pp-works-2.gif",
  "https://www.paypalobjects.com/digitalassets/c/website/marketing/apac/india/optimised/home/how-pp-works-3.gif",
  "https://www.paypalobjects.com/digitalassets/c/website/marketing/apac/india/optimised/home/how-pp-works-4.gif",
];

// this function selects the workflow item by managing other selections in the workflow.
function selectCricle(item) {
  removeExistingSelection();
  changeGif(item);
  addCurrentSelection(item);
}

// function used to add the css to selected item on workflow item.
function addCurrentSelection(item) {
  item.classList.add("selected");
}

// this function is used to remove selection of circle from workflow items in the UI.
function removeExistingSelection() {
  let workFlowItems = document.querySelectorAll(".workflow-item");
  for (let i = 0; i < workFlowItems.length; i++) {
    workFlowItems[i].classList.remove("selected");
  }
}

// this method is used to change gif image source to selected step
function changeGif(item) {
  let img = document.getElementById("payPalWorkGif");
  img.src = WorkFlowGifUrlList[item.dataset.flowno];
}
