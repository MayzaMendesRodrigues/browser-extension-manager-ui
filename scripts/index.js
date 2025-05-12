const extensionTemplate = document.querySelector("#extension__template");
const extensionList = document.querySelector(".extension__list");
const themeToggle = document.querySelector(".header__icon-sun");
const extensionActive = document.querySelector("#extension__active")
const extensionInactive = document.querySelector("#extension__inactive")
const extensionAll = document.querySelector("#extension__all")
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");
  if (document.body.classList.contains("light-mode")) {
    themeToggle.src = "/assets/images/icon-moon.svg";
  } else {
    themeToggle.src = "/assets/images/icon-sun.svg";
  }
});

function createExtension(name, logo, description, isActive) {
  const clone = extensionTemplate.content
    .querySelector(".extension__list")
    .cloneNode(true);
  clone.querySelector(".extension__img").src = logo;
  clone.querySelector(".extension__img").alt = name;
  clone.querySelector(".extension__check").checked = isActive;

  clone.querySelector(".extension__title").textContent = name;
  clone.querySelector(".extension__paragraph").textContent = description;
  clone.querySelector(".extension__button").addEventListener("click", (evt) => {
    evt.target.closest(".extension__list").remove();
  });

  return clone;
}

let extension = [];
fetch("./data.json")
  .then((response) => response.json())
  .then((data) => {
    extension = data;
    renderExtension(extension)
  });

const extensionLists = document.querySelector(".extension__lists");

function renderExtension(lista) {
  extensionLists.innerHTML = "";
  lista.forEach((extension) => {
    const newExtension = createExtension(
      extension.name,
      extension.logo,
      extension.description,
      extension.isActive
    );
       extensionLists.append(newExtension);

  });
}
extensionAll.addEventListener("click", () => {
  renderExtension(extension)
})

extensionActive.addEventListener("click", () => {
  const ative = extension.filter((act)=> act.isActive === true)
  renderExtension(ative)
})

extensionInactive.addEventListener("click", () => {
  const inative = extension.filter((act)=> act.isActive === false)
  renderExtension(inative)
})




// fetch("./data.json")
//   .then((response) => response.json())
//   .then((data) => {
//     data.forEach((extension) => {
//       const extensionActive =  data.filter(extension => extension.isActive === true)
//       const extensionInactiva=  data.filter(extension => extension.isActive === false)

//       const newExtension = createExtension(

//         extension.name,
//         extension.logo,
//         extension.description,
//          extension.isActive
//         //

//       );
//       extensionLists.append(newExtension);
//     });

//   });

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
