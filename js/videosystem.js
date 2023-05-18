
let VideoSystem = (function () { //La función anónima devuelve un método getInstance que permite obtener el objeto único
  let instantiated; //Objeto con la instancia única ImageManager

  function init() { //Inicialización del Singleton

    //Declaración de la clase Videosystem
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
        return this.#categories
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
        this.#actors.push(actor);
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



      
    } //FIN DE CLASE
    let instance = new VideoSystem("videoclub"); //Devolvemos el objeto ImageManager para que sea una instancia única.
		Object.freeze(instance);
		
  }; //FIN DE INIT
})();