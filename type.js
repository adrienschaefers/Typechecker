const sentencetag = document.querySelector(`input[type="text"]`);

const outputTag = document.querySelector("section.output");

// When I type my sentence tag, update my outputTag accordingly.


sentencetag.addEventListener("keyup", function () {
    outputTag.innerHTML = sentencetag.value
})