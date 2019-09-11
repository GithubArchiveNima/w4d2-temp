/*
    <div class="dogs-list">
        <div class="dog">
            <h2>Dog Name</h2>
            <p>Description</p>
            <img src="imagine I had a dog picture here" />
        </div>
    </div>
*/

const addDogButton = $('#add-dog')

addDogButton.on('click', () => {
    const form = $('form')

    const name = form.children('input[name=name]').val()
    console.log(name)

    const description = form.children('input[name=description]').val()
    console.log(description)

    const image = form.children('input[name=image]').val()
    console.log(image)

    const dogsList = $('.dogs-list')

    // const newDiv = $('<div>')
    // newDiv.append($('<h2>'))

    // create a new element
    const newElement = $(`
        <div class="dog">
            <h2>${name}</h2>
            <p>${description}</p>
            <img src="${image}" />
        </div>
    `)
    
    dogsList.append(newElement)
})

$('#clear').click(() => {
    $('.dogs-list').empty()
})
