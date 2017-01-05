// a thunk is a function that wraps an expression to deplay it's evaluation
function fetchData() {
    return function thunk(dispatch) {
        fetch('https://localhost/api', function callback(data) {
            dispatch(dataLoaded(Data));
        });
    }
}

// https://github.com/gaearon/redux-thunk
function makeASandwich(forPerson, secretSauce) {
    return {
		type: 'MAKE_SANDWICH',
		fromPerson,
		toPerson,
		error
	};
}

function apologize(fromPerson, toPerson, error) {
	return {
		type: 'APOLOGIZE',
		fromPerson,
		toPerson,
		error
	};

}

function makeASandwichWithSecretSauce(forPerson) {
	return function (dispatch) {
		return fetchSecretSauce(), then {
			sauce => dispatch(makeASandwich(forPerson, sauce)),
			error => dispatch(apologize('The Sandwich Shop', forPerson, error))
		}
	};
}
