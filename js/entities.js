"use strict";
//import { BaseException, InvalidAccessConstructorException, EmptyValueException, InvalidValueException, AbstractClassException, InvalidDNIException, InvalidDegreeException }from './exceptions.js';

class Person {
  #name;
  #lastname1;
  #lastname2;
  #born;
  #picture;
  constructor(name, lastname1, born) {
    //codigo para que la clase sea abstracta
    if (new.target === Person) {
      throw new Error("Cannot instantiate abstract class");
    }
    if (!name) throw new EmptyValueException(name);
    if (!lastname1) throw new EmptyValueException(lastname1);
    if (!born) throw new EmptyValueException(born);

    this.#name = name;
    this.#lastname1 = lastname1;

    //? no es necesario establecer estas propiedades 
    // this.#lastname2 = "";
    // this.#born = born;
    // this.#picture = "";
  }

  get name() {
    return this.#name;
  }

  set name(name) {
    this.#name = name;
  }

  get lastname1() {
    return this.#lastname1;
  }

  set lastname1(lastname1) {
    this.#lastname1 = lastname1;
  }

  get lastname2() {
    return this.#lastname2;
  }

  set lastname2(lastname2) {
    this.#lastname2 = lastname2;
  }

  get born() {
    return this.#born;
  }

  set born(born) {
    this.#born = born;
  }

  get picture() {
    return this.#picture;
  }

  set picture(picture) {
    this.#picture = picture;
  }

  toString() {
    return `Name: ${this.#name}, LastName 1: ${this.#lastname1}, LastName 2: ${this.#lastname2}`;
  }
}


//!este codigo es para que una clase no sea instanciable es decir para que sea abstracta
// if (new.target === Person) {
//   throw new Error("Cannot instantiate abstract class");
// }


class Category {
  #name;
  #description;
  constructor(name) {

    this.#name = name;
    //? no es necesario 
    //this.#description = "";

  }

  get name() {
    return this.#name;
  }

  set name(name) {
    this.#name = name;
  }

  get description() {
    return this.#description;
  }

  set description(description) {
    this.#description = description;
  }

  //TODO
  toString() {
    return `Name: ${this.#name}, Description: ${this.#description}`;
  }
}


class Resource {
  #duration;
  #link;
  constructor(duration, link) {
    this.#duration = duration;
    this.#link = link;
  }

  get duration() {
    return this.#duration;
  }

  set duration(duration) {
    this.#duration = duration;
  }

  get link() {
    return this.#link;
  }

  set link(link) {
    this.#link = link;
  }

  //TODO
  toString() {
    return `Duration: ${this.#duration}, Link: ${this.#link}`;
  }
}


class Production {
  #title;
  #nationality;
  #publication;
  #synopsis;
  #image;
  constructor(title, publication) {

    //Para que sea implementado de forma abstracta
    if (new.target === Production) {
      throw new Error("Cannot instantiate abstract class");
    }

    this.#title = title;
    this.#publication = publication;


    // this.#nationality = "";
    // this.#synopsis = "";
    // this.#image = "";
  }

  get title() {
    return this.#title;
  }

  set title(title) {
    this.#title = title;
  }

  get nationality() {
    return this.#nationality;
  }

  set nationality(nationality) {
    this.#nationality = nationality;
  }

  get publication() {
    return this.#publication;
  }

  set publication(publication) {
    this.#publication = publication;
  }

  get synopsis() {
    return this.#synopsis;
  }

  set synopsis(synopsis) {
    this.#synopsis = synopsis;
  }

  get image() {
    return this.#image;
  }

  set image(image) {
    this.#image = image;
  }

  //TODO
  toString() {
    return `This film: ${this.#title}, is from: ${this.#nationality}`;
  }
}

//movie hereda de resource

class Movie extends Production {
  #resource
  #locations
  constructor(resource, locations) {
    super(title, nationality, publication, synopsis, image);
    
    this.#resource = resource;

    
    if (Array.isArray(locations) && locations.length > 0) {
      this.#locations = array.push(location);
    } else {
      this.#locations = [];
    }

  }


  // get duration() {
  //   return this.#duration;
  // }

  // set duration(duration) {
  //   this.#duration = duration;
  // }

  // get link() {
  //   return this.#link;
  // }

  // set link(link) {
  //   this.#link = link;
  // }
  //TODO
  // toString() {
  //   return `Duration: ${this.#duration}, Link: ${this.#link}`;
  // }
}


class Serie extends Resource {
  #duration
  #link
  constructor(duration, link) {
    super(duration, link);

    this.#duration = duration;
    this.#link = link;
  }


  get duration() {
    return this.#duration;
  }

  set duration(duration) {
    this.#duration = duration;
  }

  get link() {
    return this.#link;
  }

  set link(link) {
    this.#link = link;
  }

  toString() {
    return `Duration: ${this.#duration}, Link: ${this.#link}`;
  }

}

// class User extends Person {
//   #username
//   #email
//   #password
//   constructor(name, lastname1, lastname2, born, picture, username, email, password) {

//     super(name, lastname1, lastname2, born, picture);

//     this.#username = username;
//     this.#email = email;
//     this.#password = password;
//   }
// }

// class Coordinate {
// 	#latitude;
// 	#longitude;

// 	constructor(latitude = 0, longitude = 0){

// 		latitude = typeof latitude !== 'undefined' ? Number(latitude).valueOf() : 0;
// 		if (Number.isNaN(latitude)  || latitude < -90 || latitude > 90) 
// 			throw new InvalidValueException("latitude", latitude);
// 		longitude = typeof longitude !== 'undefined' ? Number(longitude).valueOf() : 0;
// 		if (Number.isNaN(longitude)  || longitude < -180 || longitude > 180) 
// 			throw new InvalidValueException("longitude", longitude);

// 		this.#latitude = latitude;
// 		this.#longitude = longitude;		
// 	}

// 	get latitude(){
// 		return this.#latitude;
// 	}

// 	set latitude(value){
// 		value = typeof value !== 'undefined' ? Number(value).valueOf() : 0;
// 		if (Number.isNaN(value)  || value < -90 || value > 90) 
// 			throw new InvalidValueException("latitude", value);
// 		this.#latitude = value;
// 	}

// 	get longitude(){
// 		return this.#longitude;
// 	}
// 	set longitude(value){
// 		value = typeof value !== 'undefined' ? Number(value).valueOf() : 0;
// 		if (Number.isNaN(value)  || value < -180 || value > 180) 
// 			throw new InvalidValueException("longitude", value);
// 		this.#longitude = value;
// 	}

// 	getSexagesimalLatitude(){
// 		let direction = this.latitude >= 0 ? "N" : "S";
// 		let latitude = Math.abs(this.latitude);
// 		let grades =  Math.floor (latitude);
// 		let tmpMinutes = (latitude - grades) * 60;
// 		let minutes = Math.floor (tmpMinutes);
// 		let tmpSeconds = (tmpMinutes - minutes) * 60;
// 		let seconds = Math.round (tmpSeconds);

// 		return grades + "°" + minutes + "'" + seconds + "''" + direction; 	
// 	} 


// 	getSexagesimalLongitude(){	
// 		let direction = this.longitude >= 0 ? "E" : "W";
// 		let longitude = Math.abs(this.longitude);
// 		let grades =  Math.floor (longitude);
// 		let tmpMinutes = (longitude - grades) * 60;
// 		let minutes = Math.floor (tmpMinutes);
// 		let tmpSeconds = (tmpMinutes - minutes) * 60;
// 		let seconds = Math.round (tmpSeconds);

// 		return grades + "°" + minutes + "'" + seconds + "''" + direction; 
// 	}

// }



//es redundante exportar entidad a entidad y todo el VideoSystem
//  export {Person};
//   //Category, Resource, Production, Movie, Serie, User, Coordinate };
//  export default VideoSystem;


 //en el