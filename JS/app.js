const result = document.querySelector(".display");
let show = document.querySelectorAll(".btn");
show.forEach((node) => {
  node.addEventListener("click", function () {
    const disp = node.innerText.trim();
    const theResult = result.innerText.trim();
    if (
      theResult == "0" ||
      theResult == "Infinity" ||
      theResult == "Undefined"
    ) {
      result.innerText = "";
    }
    if (disp === "AC") {
      let empty = "";
      result.innerText = empty;
      return;
    }
    if (disp == "=") {
      let solution = eval(theResult);
      result.innerText = solution;
      return;
    }
    // if (
    //     disp = node.innerText
    // ) {
    //     const change= document.querySelector(".seen");
    //     const theChange= change.innerText.trim();
    //     result.innerText=theChange

    // }


    result.append(disp);
  });
});
