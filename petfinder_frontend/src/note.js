class Pet {
	constructor(data) {
		this.id = data.id;
		this.title = data.title;
		this.content = data.content;
		this.image = data.image;
		this.contact = data.contact;
		Pet.all.push(this); //I don't understand this line 
	}

	renderItemFromList() {
	  return `
		<li>
		    <h3>${this.title}</h3>
			<img src="${this.image}" alt="${this.title}">
			<h4>${this.content}</h4>
			<h4>Contact: ${this.contact}</h4>
			<button data-id=${this.id}>edit</button>
		  </h3>
		</li>
		`;	
	}

	renderUpdateForm() {
		console.log(this.id)
		return `
		<form data-id=${this.id}>
			<label>Title</label>
			<p> <input type="text" value="${this.title}" /> </p>
			
			<label>Picture</label>
			<p> <input type="text" value="${this.image}" /> </p>

			<label>Description</label>
			<p><textarea id="content">${this.content}</textarea></p>

			<label>Contact</label>
			<p><textarea id="contact">${this.contact}</textarea></p>


			<button type="submit">Save pet</button>
		</form
		`
	}

	static findById(id) {
		const pet = this.all.find(pet => pet.id === id);
		//I don't understand this.all -- where does all come from? is this JS? 
		console.log(pet)
		return pet;
	}
}

Pet.all = [] 


					
					