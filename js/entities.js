"use strict";

import { BaseException, InvalidAccessConstructorException, EmptyValueException, InvalidValueException, AbstractClassException } from './exceptions.js';

class Person {
  #name;
  #lastname1;
  #lastname2;
  #born;
  #picture;
  constructor(name, lastname1, born) {
    // codigo para que la clase sea abstracta
    if (new.target === Person) {
      throw new Error("Cannot instantiate abstract class");
    }
    if (!name) throw new EmptyValueException(name);
    if (!lastname1) throw new EmptyValueException(lastname1);
    if (!born) throw new EmptyValueException(born);

    this.#name = name;
    this.#lastname1 = lastname1;

    //no es necesario establecer estas propiedades 
    // this.#lastname2 = "";
    // this.#born = undefined;
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


//!este codigo es para que un objeto no sea instanciable
// if (new.target === Person) {
//   throw new Error("Cannot instantiate abstract class");
// }


class Category {
  #name;
  #description;
  constructor(name) {

    this.#name = name;
    this.#description = "";

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
  #synopsis
  #image;
  constructor(title, publication) {
    //Para que sea implementado de forma abstracta
    if (new.target === Production) {
      throw new Error("Cannot instantiate abstract class");
    }
    this.#title = title;
    this.#nationality = "";
    this.#publication = publication;
    this.#synopsis = "";
    this.#image = "";
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
    return this.#publication;
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

class Movie extends Resource {
  #duration;
  #link;
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
  //TODO
  toString() {
    return `Duration: ${this.#duration}, Link: ${this.#link}`;
  }
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

class User extends Person {
  #username
  #email
  #password
  constructor(name, lastname1, lastname2, born, picture, username, email, password) {

    super(name, lastname1, lastname2, born, picture);

    this.#username = username;
    this.#email = email;
    this.#password = password;
  }
}

class Coordinate {
  #latitude
  #longitude
  constructor(latitude, longitude) {

    this.#latitude = latitude;
    this.#longitude = longitude;

  }

}


class VideoSystem {

  #name
  #users
  #productions
  #categories
  #actors
  #directors
  #seasons

  constructor(name) {
    if (instance) {
      return instance;
    }
    //nombre del sistema
    this.#name = name;
    //usuarios que tienen acceso al sistema
    this.#users = new Array();
    //producciones que tenemos en el sistema
    this.#productions = new Array();
    //categorias de las producciones
    this.#categories = new Array();
    //actores y actrices que tenemos registrados
    this.#actors = new Array();
    //directores que tenemos en el sistema
    this.#directors = new Array();

  }
  
  get name() {
    return this.#name;
  }

  set name(name) {
    this.#name = name;
  }

  get users() {
    return this.#users;
  }

  addUser(user) {
    this.#users.push(user)
  }

  removeUser(user) {
    let found = this.#users.findIndex(this.#users, user);
    this.#users.splice(found, 1);
  }

  *categoriesGenerator() {
    yield* this.#categories;
  }

  get categories() {
    return this.#categories;
  }

  addCategory(category) {
    this.#categories.push(
      {
      category: category,
      productions: []
      }
    )
  }

  get productions() {
    return this.#productions;
  }

  addProduction(production) {
    this.#productions.push(production)
  }

  removeProduction(production) {
    let found = this.#productions.findIndex(this.#productions, production);
    this.#productions.splice(found, 1);
  }

  addActor(actor) {
    this.#actors.push(actor)
  }

  removeActor(actor) {
    let found = this.#actors.findIndex(this.#actors, actor);
    this.#actors.splice(found, 1);
  }


  set seasons(seasons) {
    this.#seasons = seasons;
  }

  get seasons() {
    return this.#seasons;
  }

  set seasons(seasons) {
    this.#seasons = seasons;
  }


  get seasons() {
    return this.#seasons;
  }

  set seasons(seasons) {
    this.#seasons = seasons;
  }

  *usersGenerator() {
    yield* this.#users;
  }

  get users() {
    return this.#users;
  }

  set users(users) {
    this.#users = users;
  }

  get actors() {
    return this.#actors;
  }

  set actor(actor) {
    this.#actors = actor;
  }

  removeCategory(categorie) {
    this.#categories.delete(categorie);
  }

  addActor(actor) {
    //aqui usamos objetos literales
    this.#actors.push(actor);
  }

  removeActor(actor) {
    let found = this.#actors.findIndex(this.#actors, actor);
    this.#actors.splice(found, 1);
  }

  addProduction(production) {
    this.productions.push(production);
  }

  removeProduction() {
    let found = this.#productions.findIndex(this.#productions, production);
    this.#productions.splice(found, 1);
  }

  assignCategory() {
    
  }
  deassignCategory() {

  }

  assignDirector() {
    //recorrer array para ver si hay relaion entre lso objetos literales
  }

  deassignDirector() {

  }

  assignActor() {

  }

  deassignActor() {

  }

  getCast() {

  }

  getProductionsDirector() {

  }

  getProductionsActor() {

  }

  getProductionsCategory() {

  }


}

//es redundante exportar entidad a entidad y todo el VideoSystem
export { Person, Category, Resource, Production, Movie, Serie, User, Coordinate };
export default VideoSystem;