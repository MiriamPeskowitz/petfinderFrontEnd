class App {
	constructor() {
		this.adapter = new Adapter(); 

		this.handleEditClick = this.handleEditClick.bind(this)
		this.handleFormSubmit = this.handleFormSubmit.bind(this) 
		this.createNotes = this.createNotes.bind(this)
		this.addNotes = this.addNotes.bind(this)

	}

	attachEventListeners() {
		document.querySelector('#petlist').addEventListener('click', this.handleEditClick()); 
		document.querySelector('#update').addEventListener('submit', this.handleFormSubmit()); 
	}


	createPets(pets) {
		pets.forEach(pet => {
			new Pet(pet)	
		}) 
		this.addPets()
	}

	addNotes() {
		document.querySelector('#petlist').innerHTML = '';
		Pet.all.forEach( 
			pet => (document.querySelector('#petlist').innerHTML += pet.renderItemFromList())
		)
	}

	handleFormSubmit(e) {
		e.preventDefault()
		const id = parseInt(e.target.dataset.id)
		const pet = Pet.findById(id)
		const title = e.target.querySelector('input').value
		const content = e.target.querySelector('#content').value
		const image = e.target.querySelector('#image').value
		const contact = e.target.querySelector('#contact').value
		const bodyJson = { title, content, image, contact};

		this.adapter.updateNote(pet.id, bodyJson).then(updatedPet => console.log(updatedPet))
	};


	handleEditClick(e) {
		const id = parseInt(e.target.dataset.id)
		const pet = Pet.findById(id); 
		document.querySelector("#update").innerHTML = pet.renderUpdateForm()
		}
	}



//event listeners have to go on a static element, like a parent ul, and this delegates 
//the listening to the children. REMEMBER THIS! can't put listeners on a dynamic element. 

//what's a more descriptive name than App that describes how this is functioning, to create
//a kind of wrapper. 


//submit
//get the data from the fields 
//put the 