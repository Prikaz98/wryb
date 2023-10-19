console.log("script is working")

function clearElement(id) {
  return document.getElementById(id).value = null
}

function addHandler(id, type, fun) {
  return document.getElementById(id).addEventListener(type, fun)
}

function createDiv(args) {
  console.log(args)
  return `<div>${args}</div>`
}

function createLabel(text) {
  return `<label>${text}</label>`
}

function createInput(id, type) {
  return `<input id="${id}" type="${type}"/>`
};

function makeNewTask(task_json) {
  if(task_json != null){
    var title = task_json.title
    var desc = task_json.desc
    var uuid = task_json.id
    return createDiv(`${createInput(uuid, 'checkbox')}${createLabel(title + ': ' + desc)}`);
  } else {
    return ""
  }
};

function handleTask(js_task) {
  var list_name = js_task.isdone ? "done-task" : "new-task"
  document.getElementById(list_name).innerHTML += makeNewTask(js_task);
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