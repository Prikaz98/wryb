console.log("script is working")

var model = {
    newTasks : [],
    doneTasks : [],
    categories : []
}
var editModel = null;
var currentCategory = { name : "inbox" };

function editTaskSubmit() {
  if(editModel == null) return;

  let id = editModel.id
  let title_v = document.getElementById("edit-title").value;
  let desc_v = document.getElementById("edit-desc").value;
  editModel.title = title_v
  editModel.desc = desc_v
  let toUpdate = JSON.stringify(editModel);
  if (!title_v.Empty) {
    fetch(new Request("/task",
        {"method":"POST", "body":toUpdate})
    )
    .then(function(resp) {
      return resp.text()
    }).then(function(body) {
      console.log(body)
      reloadModel()
    });
  }
};

function reloadEditView() {
  let title = editModel.title
  let desc = editModel.desc
  document.getElementById("edit-title").value = title
  document.getElementById("edit-desc").value = desc
}

function reloadTasksList() {
  fetch(new Request("/tasks-q?category=" + currentCategory.name, {"method":"GET"}))
  .then((resp) => { return resp.text()})
  .then((body) => {
    if(!body.Empty) {
      JSON.parse(body)
      .forEach((el) => {
        handleTask(el, false)
      })
      reloadModel()
    }
  })
}

function updateEditView(divId) {
  editTaskSubmit()

  let taskId = divId.substring(3, divId.length)
  let toUpdate = model.newTasks.concat(model.doneTasks).find((el) => el.id == taskId)
  editModel = toUpdate
  reloadEditView()
}

function updateTaskList(divId) {
  editTaskSubmit()

  model.doneTasks = []
  model.newTasks = []
  let taskId = divId.substring(3, divId.length)
  let category = model.categories.find((el) => el.id == taskId)
  currentCategory = category;
  reloadTasksList()
}


function checkExistsAndMakeTaskElement(task_json) {
  let uuid = task_json.id
  let rowId = "div" + uuid

  let title = task_json.title
  let desc = task_json.desc
  let isdone = task_json.isdone

  let rowElement = createDivTask(`${createCheckBoxDoneTask(uuid, isdone)}${createTitleLabel(title)} ${createDeleteButton(uuid)}<br>${createDescLabel(desc)}`, rowId);
  return rowElement;
}

function categoryToHtml(category) {
  let uuid = category.id
  let rowId = "div" + uuid
  let rowElement = createDivCategory(`${createTitleLabel(category.name)}`, rowId);
  return rowElement;
}

function reloadModel() {
  document.getElementById("new-task").innerHTML = null
  document.getElementById("done-task").innerHTML = null
  document.getElementById("categories").innerHTML = null

  let newTasks = model.newTasks.map(checkExistsAndMakeTaskElement).join("")
  document.getElementById("new-task").innerHTML += newTasks

  let doneTasks = model.doneTasks.map(checkExistsAndMakeTaskElement).join("")
  document.getElementById("done-task").innerHTML += doneTasks

  let categorylist = model.categories.map(categoryToHtml).join("")
  document.getElementById("categories").innerHTML += categorylist
}

function clearElement(id) {
  return document.getElementById(id).value = null
}

function createDivTask(args, id) {
  return `<div id="${id}" onclick="updateEditView(id)">${args}</div>`
}

function createDivCategory(args, id) {
  return `<div id="${id}" onclick="updateTaskList(id)">${args}</div>`
}

function addHandler(id, type, fun) {
  return document.getElementById(id).addEventListener(type, fun)
}


function createTitleLabel(text) {
  return `<label class="task-title">${text}</label>`
}

function createDescLabel(text) {
  if(text != null) {
    return `<label class="task-desc">${text}</label>`
  }

  return `<label class="task-desc"></label>`
}

function toDone(id){
  let value = document.getElementById(id).checked
  let toUpdate = model.newTasks.concat(model.doneTasks).find((el) => el.id == id)
  const updated = structuredClone(toUpdate)
  updated.isdone = value

  fetch(new Request("/task",
      {"method":"POST", "body":JSON.stringify(updated)})
  ).then(function(resp) {
    return resp.text()
  }).then(function(body) {
    handleTask(JSON.parse(body), true)
  });
}

function createCheckBoxDoneTask(id, checked) {
  let check = checked ? "checked" : "/";
  return `<input class="donetaskcb" id="${id}" onclick="toDone(id)" type="checkbox" ${check}>`
}

function remove(id) {
    console.log("id to remove" + id)
    let toDelete = JSON.stringify({"id": id})
    fetch(new Request("/task",
        {"method":"DELETE", "body":toDelete})
    )
    .then(function(resp) {
      return resp.text()
    }).then(function(removedId) {
      removeIfFind(model.newTasks, (el) => el.id == removedId)
      removeIfFind(model.doneTasks, (el) => el.id == removedId)

      console.log(removedId)
      reloadModel()
    });
}

function createDeleteButton(id) {
  return `<input type="submit" onclick="remove('${id}')" style="float:right" value="del">`
}

function removeIfFind(arr, predicate) {
  let maybeFound = arr.find(predicate)
  if(maybeFound != null) {
    let index = arr.indexOf(maybeFound)
    console.log("TO remove " + index)
    if (index > -1) { // only splice array when item is found
      arr.splice(index, 1); // 2nd parameter means remove one item only
    }
  }
}

function handleCategory(js_category) {
  removeIfFind(model.categories, (el) => el.id == js_category.id)
  model.categories.push(js_category)
}

function handleTask(js_task, pushInHead) {
  if(js_task.isdone) {
    removeIfFind(model.newTasks, (el) => el.id == js_task.id)
    if(pushInHead) {
      model.doneTasks.unshift(js_task)
    } else {
      model.doneTasks.push(js_task)
    }
  } else {
    removeIfFind(model.doneTasks, (el) => el.id == js_task.id)
    if(pushInHead) {
      model.newTasks.unshift(js_task)
    } else {
      model.newTasks.push(js_task)
    }
  }

  reloadModel()
}

function taskToJson(title) {
  return JSON.stringify({"title":title, "isdone":false, "category":currentCategory.name});
}

function loadData() {
  fetch(new Request("/categories", {"method":"GET"}))
   .then((resp) => { return resp.text()})
   .then((body) => {
     if(!body.Empty) {
       JSON.parse(body)
       .forEach((el) => {
         console.log(el)
         handleCategory(el)
       })
     }
   })

  fetch(new Request("/tasks", {"method":"GET"}))
  .then((resp) => { return resp.text()})
  .then((body) => {
    if(!body.Empty) {
      JSON.parse(body)
      .forEach((el) => {
        handleTask(el, false)
      })
    }
  })
}

function submitTask() {
  var title = "title";
  var title_v = document.getElementById(title).value;
  if (!title_v.Empty) {
    fetch(new Request("/task",
        {"method":"POST", "body":taskToJson(title_v)})
    )
    .then(function(resp) {
      return resp.text()
    }).then(function(body) {
      console.log(body)
      return handleTask(JSON.parse(body), true)
    });

    clearElement(title)
  }
}

function enterPressSubmitTask(event) {
  console.log(event.keyCode)
  if (event.keyCode === 13) {
    console.log("sumbit")
    submitTask()
  }
}

addHandler("title", "keypress", enterPressSubmitTask)

loadData();