"use strict";

class Person {
  constructor(name, lastname1, born) {
    //codigo para que la clase sea abstracta
    if (new.target === Person) {
      throw new Error("Cannot instantiate abstract class");
    }
    this._name = name;
    this._lastname1 = lastname1;
    this._lastname2 = "";
    this._born = born;
    this._picture = "";
  }

  get name() {
    return this._name;
  }

  set name(name) {
    this._name = name;
  }

  get _lastname1() {
    return this._lastname1;
  }

  set _lastname1(lastname1) {
    this._name = lastname1;
  }

  get _lastname2() {
    return this._name;
  }
  set _lastname2(name) {
    this._name = name;
  }

  get born() {
    return this._born;
  }

  set born(born) {
    this._born = born;
  }

  get picture() {
    return this._picture;
  }

  set picture(picture) {
    this._picture = picture;
  }

  toString() {
    return `Name: ${this._name}, LastName 1: ${this._lastname1}, LastName 2: ${this._lastname2}`;
  }
}

//!este codigo es para que un objeto no sea instanciable
// if (new.target === Person) {
//   throw new Error("Cannot instantiate abstract class");
// }


class Category {
  constructor(name) {

    this._name = name;
    this._description = "";

  }

  get name() {
    return this._name;
  }

  set name(name) {
    this._name = name;
  }

  get description() {
    return this._name;
  }

  set description(description) {
    this._description = description;
  }

  //TODO
  toString() {
    return `Name: ${this._name}, DNI: ${this._description}`;
  }
}


class Resource {

  constructor(duration, link) {
    this._duration = duration;
    this._link = link;
  }

  get duration() {
    return this._duration;
  }

  set duration(duration) {
    this._duration = duration;
  }

  get link() {
    return this._link;
  }

  set link(link) {
    this._link = link;
  }
  //TODO
  toString() {
    return `Duration: ${this._degree}, Link: ${this._grade}`;
  }
}


class Production {

  constructor(title, publication) {
    //Para que sea implementado de forma abstracta
    if (new.target === Production) {
      throw new Error("Cannot instantiate abstract class");
    }
    this._title = title;
    this._nationality = "";
    this._publication = publication;
    this._synopsis = "";
    this._image = "";
  }

  get title() {
    return this._title;
  }

  set title(link) {
    this._link = link;
  }

  get nationality() {
    return this._nationality;
  }

  set nationality(nationality) {
    this._nationality = nationality;
  }

  get publication() {
    return this._publication;
  }

  set publication(publication) {
    this._publication = publication;
  }

  get synopsis() {
    return this._publication;
  }

  set synopsis(synopsis) {
    this._synopsis = synopsis;
  }

  get image() {
    return this._image;
  }

  set image(image) {
    this._image = image;
  }

  //TODO
  toString() {
    return `Duration: ${this._degree}, Link: ${this._grade}`;
  }
}

//movie hereda de resource

class Movie extends Resource {

  constructor(duration, link) {
    super(duration, link);

    this._duration = duration;
    this._link = link;
  }

  get resource() {
    return this._resource;
  }

  set resource(resource) {
    this._resource = resource;
  }

  get locations() {
    return this._locations;
  }

  set locations(locations) {
    this._locations = locations;
  }
  //TODO
  toString() {
    return `Duration: ${this._degree}, Link: ${this._grade}`;
  }
}


class Serie extends Resource {

  constructor(duration, link) {
    super(duration, link);

    this._duration = duration;
    this._link = link;
  }


  get seasons() {
    return this._seasons;
  }

  set seasons(seasons) {
    this._seasons = seasons;
  }

  toString() {
    return `Duration: ${this._degree}, Link: ${this._grade}`;
  }

}

class User extends Person {
  constructor(name, lastname1, lastname2, born, picture, username, email, password) {

    super(name, lastname1, lastname2, born, picture);

    this._username = username;
    this._email = email;
    this._password = password;
  }
}

class Coordinate {

  constructor(latitude, longitude) {

    this._latitude = latitude;
    this._longitude = longitude;

  }

}


class VideoSystem {
  constructor(name) {
    if (instance) {
      return instance;
    }
    //nombre del sistema
    this._name = name;
    //usuarios que tienen acceso al sistema
    this._users = new Array();
    //producciones que tenemos en el sistema
    this._productions = new Array();
    //categorias de las producciones
    this._categories = new Array();
    //actores y actrices que tenemos registrados
    this._interpreters = new Array();
    //directores que tenemos en el sistema
    this._directors = new Array();






  }
  get name() {
    return this._name;
  }

  set name(name) {
    this._name = name;
  }

  get categories() {
    return this._name;
  }

  set categories(categories) {
    this._categories = categories;
  }

  get seasons() {
    return this._seasons;
  }

  set seasons(seasons) {
    this._seasons = seasons;
  }

  get seasons() {
    return this._seasons;
  }

  set seasons(seasons) {
    this._seasons = seasons;
  }

  *categoriesGenerator() {
    yield* this._categories;
  }

  get categories() {
    return this._categories;
  }

  get seasons() {
    return this._seasons;
  }

  set seasons(seasons) {
    this._seasons = seasons;
  }

  *usersGenerator() {
    yield* this._users;
  }

  get users() {
    return this._users;
  }

  set users(users) {
    this._users = users;
  }

  get productions() {
    return this._productions;
  }

  set productions(users) {
    this._productions = users;
  }

  get actors() {
    return this._actors;
  }

  set actors(actors) {
    this._actors = actors;
  }

  removeCategory(categorie) {
    this._categories.delete(categorie);
  }

  addUser(user) {
    this._users.push(user)
  }

  removeUser() {

  }

  addActor() {

  }

  removeActor() {

  }

  addProduction() {

  }

  removeProduction() {

  }

  assignCategory(){

  }

  assignDirector(){

  }

  deassignDirector(){

  }

  assignActor(){

  }  

  deassignActor(){

  }

  getCast(){

  }

  getProductionsDirector(){

  }

  getProductionsActor(){

  }

  getProductionsCategory(){

  }


}



