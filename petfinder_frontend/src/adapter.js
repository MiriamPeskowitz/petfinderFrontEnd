//adapter class is responsible for communicating with the API
//hides away some of the implementation details of all the fetches 
class Adapter {
	constructor() {
		this.baseURL = 'http://localhost:3000/api/v1';
		this.headers = {
			'Content-Type': 'application/json',
			Accept: 'application/json',
		}
	}

	fetchNotes() {
		return fetch(`{this.baseURL}/pets`)
	}

	updateNote(id, body) {

	patch(url, body) {
		return fetch(url, {
			method: 'PATCH',
			headers: this.headers
			body: JSON.stringify(body
		}).then(res => res.json())
	}

	get(url) {
		return fetch(url).then(res => res.json())
	}


}