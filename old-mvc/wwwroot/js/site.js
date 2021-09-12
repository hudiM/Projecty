// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

$('.task-priority-dropdown-button').click(function () {
    let card = $(this).parents('.task-card').first();
    let taskId = card.attr('data-id');
    let taskPriority = this.attributes.getNamedItem('data-priority').value;
    let taskStatus = card.attr('data-status');
    let taskTitle = card.attr('data-title');

    let content = `{
                       "id": ${taskId},
                       "priority": ${taskPriority},
                       "status": ${taskStatus},
                       "title": "${taskTitle}"
                   }`;

    $.ajax({
        type: 'PUT',
        url: 'api/tasks/' + taskId,
        contentType: "application/json",
        data: content,
        success: handleTaskPriorityChangedCallback
    })
});

$('.task-title-input').blur(function () {
    let card = $(this).parents('.task-card').first();
    let taskId = card.attr('data-id');
    let taskPriority = card.attr('data-priority');
    let taskStatus = card.attr('data-status');
    let taskTitle = this.value;

    let content = `{
                       "id": ${taskId},
                       "priority": ${taskPriority},
                       "status": ${taskStatus},
                       "title": "${taskTitle}"
                   }`;

    $.ajax({
        type: 'PUT',
        url: 'api/tasks/' + taskId,
        contentType: "application/json",
        data: content,
        success: handleTaskTitleChangedCallback
    })
});

$('.task-status-dropdown-button').click(function () {
    let card = $(this).parents('.task-card').first();
    let taskId = card.attr('data-id');
    let taskPriority = card.attr('data-priority');
    let taskStatus = this.attributes.getNamedItem('data-status').value;
    let taskTitle = card.attr('data-title');

    let content = `{
                       "id": ${taskId},
                       "priority": ${taskPriority},
                       "status": ${taskStatus},
                       "title": "${taskTitle}"
                   }`;

    $.ajax({
        type: 'PUT',
        url: 'api/tasks/' + taskId,
        contentType: "application/json",
        data: content,
        success: handleTaskStatusChangedCallback
    })
});

$('.task-delete-button').click(function () {
    let card = $(this).parents('.task-card').first();
    let taskId = card.attr('data-id');

    var callback = function () {
        handleTaskDeletedCallback(taskId);
    };

    $.ajax({
        type: 'DELETE',
        url: 'api/tasks/' + taskId,
        success: callback
    })
});



function handleTaskDeletedCallback(id, data) {
    let taskCard = $(`.task-card[data-id='${id}']`);
    taskCard.remove();
}

function handleTaskPriorityChangedCallback(data) {
    let objectId = data.id;
    let newPriority = data.priorityAsString;
    let newPriorityColor = data.priorityAsHtmlColor;

    let taskCard = $(`.task-card[data-id='${objectId}']`);

    taskCard.attr('data-priority', data.priority);

    let priorityButton = taskCard.find('.priority-button');

    priorityButton.html(newPriority);

    priorityButton.removeClass('btn-outline-warning btn-outline-danger btn-outline-success');
    priorityButton.addClass('btn-outline-' + newPriorityColor);
}

function handleTaskStatusChangedCallback(data) {
    let objectId = data.id;
    let newStatus = data.statusAsString;
    let newStatusAsHtmlColor = data.statusAsHtmlColor;

    let taskCard = $(`.task-card[data-id='${objectId}']`);

    taskCard.attr('data-status', data.status);

    let statusButton = taskCard.find('.status-marker');

    statusButton.attr('title', newStatus);

    statusButton.removeClass('badge-danger badge-success badge-warning badge-secondary badge-purple badge-pink badge-info');
    statusButton.addClass('badge-' + newStatusAsHtmlColor);
}

function handleTaskTitleChangedCallback(data) {
    let objectId = data.id;

    let taskCard = $(`.task-card[data-id='${objectId}']`);

    taskCard.attr('data-title', data.title);

}
