$(function () {
    //enter items by hitting "Return" or clicking the "Add item" button
    $('#js-shopping-list-form').on('submit', function(event){
        event.preventDefault()
        const newItem = $(this).find("#shopping-list-entry").val()

        $('#shopping-list-entry').val('')

        $('.shopping-list').append(
            `<li><span class="shopping-item">${newItem}</span>
                <div class="shopping-item-controls">
                    <button class="shopping-item-toggle">
                    <span class="button-label">check</span>
                    </button>
                    <button class="shopping-item-delete">
                    <span class="button-label">delete</span>
                    </button>
                </div>
            </li>`
        )        
    })
    //check and uncheck items on the list by clicking the "Check" button
    $('.shopping-list').on('click', '.shopping-item-toggle', function(event){
        $(this).closest('li').find('.shopping-item').toggleClass('shopping-item__checked')
    })
    //permanently remove items from the list by clicking the "Delete" button
    $('.shopping-list').on('click','.shopping-item-delete', function(event){
        $(this).closest('li').remove()
    })
})











