let contactsArray = [
  {
    id: 1,
    name: "Selvin",
    number: 9600298600,
  },
];

const contactref = document.getElementById("contacts");

const deleteName = (deleteid) => {
  contactsArray = contactsArray.filter((a) => {
    if (a.id !== deleteid) {
      return a;
    }
  });
  add();
};

const editName = (id) => {
  editId = id;
  const clickedName = contactsArray.find((a) => a.id === id);
  btnRef.innerText = "Edit";
  nameRef.value = clickedName.name;
  numberRef.value = clickedName.number;
};

const add = () => {
  let added = "";

  for (let person of contactsArray) {
    added += `<div class="d-flex align-items-center justify-content-between p-2 border-bottom border-primary">
                    <p class="fs-5 m-0">${person.name}</p>
                    <p class="fs-5 m-0">${person.number}</p>
                    <div>
                      <button onclick="editName(${person.id})" class="btn btn-warning">Edit</button>
                      <button onclick="deleteName(${person.id})" class="btn btn-danger">Delete</button>
                    </div>
                  </div>`;
  }
  contactref.innerHTML = added;
};

add();

const nameRef = document.getElementById("name");
const numberRef = document.getElementById("number");
const btnRef = document.getElementById("save");

const getRandomNumber = (max = 1000) => {
  return Math.floor(Math.random() * max);
};

let editId = 0;

btnRef.addEventListener("click", () => {
  if (nameRef.value !== "" && numberRef.value !== "") {
    if (editId === 0) {
      contactsArray.push({
        id: getRandomNumber(),
        name: nameRef.value,
        number: numberRef.value,
      });
    } else {
      contactsArray = contactsArray.map((b) => {
        if (b.id == editId)
          return { ...b, name: nameRef.value, number: numberRef.value };
        else return b;
      });
    }
    editId = 0;
    nameRef.value = "";
    numberRef.value = "";
    btnRef.innerText = "Save";
    add();
  } else {
    nameRef.classList.replace("border-primary", "is-invalid");
    numberRef.classList.replace("border-primary", "is-invalid");
  }
});

nameRef.addEventListener("keyup", () => {
  if (nameRef.value !== "") {
    nameRef.classList.replace("is-invalid", "border-primary");
  } else {
    nameRef.classList.replace("border-primary", "is-invalid");
  }
});

numberRef.addEventListener("keyup", () => {
  if (numberRef.value !== "") {
    numberRef.classList.replace("is-invalid", "border-primary");
  } else {
    numberRef.classList.replace("border-primary", "is-invalid");
  }
});
