"use strict";

// clase de BaseException (Excepcion basica) que 
// permite crear objetos error

class BaseException extends Error {
    constructor(message = "", fileName, lineNumber) {
        super(message, fileName, lineNumber);
        this.name = "BaseException";
        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, BaseException)
        }
    }
}

//Excepción acceso inválido a constructor

class InvalidAccessConstructorException extends BaseException {
    constructor(fileName, lineNumber) {
        super("El constructor se debe de invocar con new.", fileName, lineNumber);
        this.name = "InvalidAccessConstructorException";
    }
}

//Excepción personalizada para indicar valores vacios.
class EmptyValueException extends BaseException {
    constructor(param, fileName, lineNumber) {
        super("Error: The parameter " + param + " can't be empty.", fileName,
            lineNumber);
        this.param = param;
        this.name = "EmptyValueException";
    }
}
//Excepción de valor inválido
class InvalidValueException extends BaseException {
    constructor(param, value, fileName, lineNumber) {
        super(`Error: The paramenter ${param} has an invalid value. (${param}: ${value})`, fileName, lineNumber);
        this.param = param;
        this.name = "InvalidValueException";
    }
}
//Excepción personalizada para clases abstractas.

class AbstractClassException extends BaseException {
    constructor(className, fileName, lineNumber) {
        super(`Error: The class ${className} is abstract.`, fileName, lineNumber);
        this.className = className;
        this.name = "AbstractClassException";
    }
}

//Excepción personalizada para cuando no se ha introducido un DNI correctamente.
class InvalidDNIException extends BaseException {
    constructor(dni, fileName, lineNumber) {
        super(`Error: The dni ${dni} is not correct.`, fileName, lineNumber);
        this.dni = dni;
        this.name = "InvalidDNIException";
    }
}

class InvalidDegreeException extends BaseException {
    constructor(degree, fileName, lineNumber) {
        super(`Error: The dni ${degree} is not correct.`, fileName, lineNumber);
        this.degree = degree;
        this.name = "InvalidDegreeException";
    }
}

//es redundante exportar entidad a entidad y todo el VideoSystem
export { BaseException, InvalidAccessConstructorException, EmptyValueException, InvalidValueException, AbstractClassException, InvalidDNIException, InvalidDegreeException };
