// Задание №1

const listItemsElement = [...document.querySelectorAll('li')]
const listElement = document.querySelector('ul')

console.log(Array.isArray(listItemsElement))
const listItemsElementWithEven = listItemsElement.filter((element) => element.textContent % 2 == 0)

console.log(listItemsElementWithEven)

listElement.innerHTML = ''
listItemsElementWithEven.forEach((element) => listElement.append(element))

// Задание №2

const formTemplate = `
  <form class="p-3" style="max-width: 400px;">
    <fieldset>
<div class="row g-2">
  <div class="col-md">
    <div class="form-floating">
      <input type="text" class="form-control" id="floatingInputGrid" >
      <label for="floatingInputGrid">Введите город</label>
    </div>
  </div>
  <div class="col-md">
    <div class="form-floating">
      <select class="form-select" id="floatingSelectGrid" aria-label="Floating label select example">
        <option selected>Тип транпорта</option>
        <option value="1">Самолет</option>
        <option value="2">Автобус</option>
        <option value="3">Поезд</option>
      </select>
      <label for="floatingSelectGrid">Выбрать транспорт</label>
    </div>
  </div>
</div>
</fieldset>
</form>
`

document.body.innerHTML = document.body.innerHTML + formTemplate

function generateListElement() {
  const listElement = document.createElement('ul')
  let counter = 5

  setInterval(() => {
    const listItemElement = document.createElement('li')

    listItemElement.textContent = 'Найдено ' + counter + ' билетов'
    listElement.append(listItemElement)

    counter++
  }, 1000)

  document.body.append(listElement)
}

generateListElement()


