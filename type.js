const sentencetag = document.querySelector(`input[type="text"]`);

const outputTag = document.querySelector("textarea.output");

const originalText = outputTag.innerHTML



const typesizeTag = document.querySelector(`input[name="typesize"]`);
const typesizeOutput = document.querySelector("span.typesize-output")

const lineheightTag = document.querySelector(`input[name="lineheight"]`)
const lineheightOutput = document.querySelector("span.lineheight-output")

const fontweightTag = document.querySelector(`input[name="fontweight"]`)
const fontweightOutput = document.querySelector("span.fontweight-output")

const italicTag = document.querySelector(`input[name="italic"]`)

const typefaceTag = document.querySelector(`select[name="typeface"]`)


const colorTags = document.querySelectorAll(`div.colors div`)






// When I type my sentence tag, update my outputTag accordingly.
// If there is no value put the original text

sentencetag.addEventListener("keyup", function () {
    // outputTag.innerHTML = this.value
    if (this.value){
        outputTag.value= this.value
    } else {
        outputTag.value = originalText
    }
})

// When I type in my output tag, update my sentence tag accordingly.

outputTag.addEventListener("keyup", function () {
    sentencetag.value = this.value
})


//When I change the text slider position change the font size. And update the input output value.

typesizeTag.addEventListener("input", function(){
    outputTag.style.fontSize = this.value + "px"
    typesizeOutput.innerHTML = this.value + " " + "px"
})


lineheightTag.addEventListener("input", function(){
    outputTag.style.lineHeight = this.value
    lineheightOutput.innerHTML = this.value
})


fontweightTag.addEventListener("input", function(){
    outputTag.style.fontWeight = this.value
    fontweightOutput.innerHTML = this.value
})


//When I click on checkbox I want the text to be italic or normal depending on the state.

italicTag.addEventListener("change", function(){
    if (this.checked) {
        outputTag.style.fontStyle = "italic"
    } else {
        outputTag.style.fontStyle = "normal"
    }
})


// When I change the typeface, update the font family

typefaceTag.addEventListener("input", function(){
    outputTag.style.fontFamily = this.value
})



// Go throught azll of my color tags 
//When I click one of them, change th background color accordingly and 
//the text colors as well.

colorTags.forEach(tag => {

    tag.addEventListener("click", function() {
        outputTag.style.backgroundColor = this.style.backgroundColor
        outputTag.style.color = this.style.color
    })
})