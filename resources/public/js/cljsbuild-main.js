console.log("script is working")

var model = {
    newTasks : [],
    doneTasks : []
}


function checkExistsAndMakeTaskElement(task_json) {
  var uuid = task_json.id
  if(document.getElementById(uuid) == null) {
    let title = task_json.title
    let desc = task_json.desc
    let isdone = task_json.isdone
    return createDiv(`${createInput(uuid, 'checkbox', isdone)}${createTitleLabel(title)}<br>${createDescLabel(desc)}`);
  } else {
    return ""
  }
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

function createDiv(args) {
  return `<div>${args}</div>`
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

function createInput(id, type, checked) {
  let end = checked ? "checked" : "/"
  return `<input id="${id}" type="${type}" ${end}>`
}

function handleTask(js_task) {
  if(js_task.isdone) {
    model.doneTasks.push(js_task)
  } else {
    model.newTasks.push(js_task)
  }

 reloadModel()
}

function taskToJson(title, desc) {
  return JSON.stringify({"title":title, "desc":desc, "isdone":false});
}

function loadData() {
  fetch(new Request("/task/list", {"method":"GET"}))
  .then((resp) => { return resp.text()})
  .then((body) => { if(!body.Empty) { JSON.parse(body).forEach(handleTask) } } )
}

function submitTask() {
  var title = "title";
  var desc = "desc";
  var title_v = document.getElementById(title).value;
  var desc_v = document.getElementById(desc).value;
  if (!title_v.Empty) {
    fetch(new Request("/task/new",
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