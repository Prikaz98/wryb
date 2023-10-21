console.log("script is working")

var model = {
    newTasks : [],
    doneTasks : []
}


function checkExistsAndMakeTaskElement(task_json) {
  var uuid = task_json.id
  let rowId = "div" + uuid

  if(document.getElementById(rowId) != null) {
    document.getElementById(rowId).remove();
  }

  let title = task_json.title
  let desc = task_json.desc
  let isdone = task_json.isdone
  return createDiv(`${createCheckBoxDoneTask(uuid, isdone)}${createTitleLabel(title)}<br>${createDescLabel(desc)}`, rowId);
}

function reloadModel() {
  let newTasks = model.newTasks.map(checkExistsAndMakeTaskElement).join("")
  document.getElementById("new-task").innerHTML += newTasks

  let doneTasks = model.doneTasks.map(checkExistsAndMakeTaskElement).join("")
  document.getElementById("done-task").innerHTML += doneTasks
}

function clearElement(id) {
  return document.getElementById(id).value = null
}

function createDiv(args, id) {
  return `<div id="${id}">${args}</div>`
}

function addHandler(id, type, fun) {
  return document.getElementById(id).addEventListener(type, fun)
}


function createTitleLabel(text) {
  return `<label class="task-title">${text}</label>`
}

function createDescLabel(text) {
  return `<label class="task-desc">${text}</label>`
}

function toDone(id){
  console.log(id)
  let value = document.getElementById(id).checked
  let toUpdate = model.newTasks.concat(model.doneTasks).find((el) => el.id == id)
  const updated = structuredClone(toUpdate)
  updated.isdone = value

  fetch(new Request("/task",
      {"method":"POST", "body":JSON.stringify(updated)})
  ).then(function(resp) {
    return resp.text()
  }).then(function(body) {
    console.log(body)
    return handleTask(JSON.parse(body))
  });
}

function createCheckBoxDoneTask(id, checked) {
  let check = checked ? "checked" : "/";
  return `<input class="donetaskcb" id="${id}" onclick="toDone(id)" type="checkbox" ${check}>`
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

function handleTask(js_task) {
  if(js_task.isdone) {
    removeIfFind(model.newTasks, (el) => el.id == js_task.id)
    model.doneTasks.push(js_task)
  } else {
    removeIfFind(model.doneTasks, (el) => el.id == js_task.id)
    model.newTasks.push(js_task)
  }

 reloadModel()
}

function taskToJson(title, desc) {
  return JSON.stringify({"title":title, "desc":desc, "isdone":false});
}

function loadData() {
  fetch(new Request("/tasks", {"method":"GET"}))
  .then((resp) => { return resp.text()})
  .then((body) => { if(!body.Empty) { JSON.parse(body).forEach(handleTask) } } )
}

function submitTask() {
  var title = "title";
  var desc = "desc";
  var title_v = document.getElementById(title).value;
  var desc_v = document.getElementById(desc).value;
  if (!title_v.Empty) {
    fetch(new Request("/task",
        {"method":"POST", "body":taskToJson(title_v, desc_v)})
    )
    .then(function(resp) {
      return resp.text()
    }).then(function(body) {
      console.log(body)
      return handleTask(JSON.parse(body))
    });

    clearElement(title)
    clearElement(desc);
  }
};

function enterPressSubmitTask(event) {
  console.log(event.keyCode)
  if (event.keyCode === 13) {
    console.log("sumbit")
    submitTask()
  }
}

addHandler("title", "keypress", enterPressSubmitTask)

addHandler("desc", "keypress", enterPressSubmitTask)

loadData();