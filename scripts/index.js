const extensionTemplate = document.querySelector("#extension__template");
const extensionLists = document.querySelector(".extension__lists");
const extensionList = document.querySelector(".extension__list")

function createExtension(name, logo, description) {
  const clone = extensionTemplate.content
    .querySelector(".extension__list")
    .cloneNode(true);
  clone.querySelector(".extension__img").src = logo;
  clone.querySelector(".extension__title").textContent = name;
  clone.querySelector(".extension__paragraph").textContent = description;
  clone.querySelector(".extension__button").addEventListener("click", (evt) => {
    evt.target.closest(".extension__list").remove()
 })
  return clone
}


fetch("./data.json")
  .then((response) => response.json())
  .then((data) => {
    data.forEach((extension) => {
      const newExtension = createExtension(
        extension.name,
        extension.logo,
        extension.description
      );
      extensionLists.append(newExtension);
    });
  });




//   readFile()
//   .then(transformFileToJson)
//   .then(fillExtensionList);

//   function readFile(){
//     return fetch("./data.json");
//   }

//   function transformFileToJson(fileContent){
//     return fileContent.json();
//   }

//   function fillExtensionList(jsonElements){
//     jsonElements.forEach(jsonElement=>{
//          const newExtension = createExtension(
//         jsonElement.name,
//         jsonElement.logo,
//         jsonElement.description
//       );
//       extensonLists.append(newExtension);
//     })
//   }