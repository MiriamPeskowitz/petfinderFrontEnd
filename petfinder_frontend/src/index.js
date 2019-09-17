document.addEventListener('DOMContentLoaded', () => {
	const app = new App();
	app.attachEventListeners();
	//creates instance of the App and calls attachEventListeners to it 

	app.adapter.fetchNotes().then(app.createNotes
})


