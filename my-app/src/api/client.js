const defaultHeaders = {
    headers: {
        'Content-Type': 'application/json; charset=UTF-8'
    },
}

export const getQuestionsAPIMethod = (success) => {
    return fetch(`/api/questions`, {
        ...defaultHeaders,
    }).then(checkStatus)
        .then(parseJSON)
        .then(success);
}

export const getQuestionResponsesAPIMethod = (success) => {
    return fetch(`/api/questionresponses`, {
        ...defaultHeaders,
    }).then(checkStatus)
        .then(parseJSON)
        .then(success);
}

export const deleteQuestionByIdAPIMethod = (questionId, success) => {
    return fetch(`/api/questions/${questionId}`, {
        ...defaultHeaders,
        method: 'DELETE',
    }).then(checkStatus)
        .then(parseJSON)
        .then(success);
}

export const updateQuestionsAPIMethod = (questions, success) => {
    return fetch(`/api/questions`, {
        ...defaultHeaders,
        method: 'PUT', // The method defaults to GET
        body: JSON.stringify(questions),
    }).then(checkStatus)
        .then(parseJSON)
        .then(success);
}

export const updateQuestionResponsesAPIMethod = (responses, success) => {
    return fetch(`/api/questionresponses`, {
        ...defaultHeaders,
        method: 'PUT', // The method defaults to GET
        body: JSON.stringify(responses),
    }).then(checkStatus)
        .then(parseJSON)
        .then(success);
}

export const createQuestionAPIMethod = (question, success) => {
    return fetch(`/api/questions`, {
        ...defaultHeaders,
        method: 'POST', // The method defaults to GET
        body: JSON.stringify(question),
    }).then(checkStatus)
        .then(parseJSON)
        .then(success);
}

function checkStatus(response) {
    if (response.status >= 200 && response.status < 300) {
        return response;
    } else {
        const error = new Error(`HTTP Error: ${response.statusText}`);
        error.status = response.statusText;
        error.response = response;
        console.log(error);
        throw error;
    }
}

function parseJSON(response) {
    return response.json();
}