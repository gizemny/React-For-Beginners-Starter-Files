import React from 'react'; 
import { getFunName } from '../helpers';
class StorePicker extends React.Component { 
	//this doesnt mean storepicker because we wrote own method
	//need to build constructor! 
	// constructor() { // need this when methods are used more than once
	// 	super();
	// 	this.goToStore = this.goToStore.bind(this);
	// } // using it on submit is duplicitous 
	goToStore(event) {
		event.preventDefault(); // stopped form from submitting
		// grab text from box - don't touch the DOM 
		const storeId = this.storeInput.value;
		// transition from / to / store/:storeId
		this.context.router.transitionTo(`/store/${storeId}`);
	} // render methods are bound to component 
	render() {
		return ( 
			<form className="store-selector" onSubmit={this.goToStore.bind(this)}> 
				<h2>Please Enter A Store</h2>
				<input type="text" required placeholder="Store Name" defaultValue={
					getFunName()} ref={(input) => { this.storeInput = input }} />
				<button type="submit">Visit Store →</button>
			</form>
		)
	}
}

StorePicker.contextTypes = {
	router: React.PropTypes.object
}

export default StorePicker; 
