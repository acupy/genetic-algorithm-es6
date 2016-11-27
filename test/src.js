'use strict';

const chai = require('chai');
const should = require('should');

let GeneticClass = require('../index.js'); 

let ga = new GeneticClass();

const expect = chai.expect;

describe('Testing the GeneticClass', () => {
	it('object should be instance of class', () => {
		expect(ga).to.be.an.instanceof(GeneticClass);
	});

	it('Class should be ok', () => {
		expect(GeneticClass).to.be.ok;
	});

	it('instance should be ok', () => {
		expect(GeneticClass).to.be.ok;
	});

	it('class should exists', () => {
		expect(GeneticClass).to.exist;
	});

	it('class should have populate method and not throw Error', () => {
		expect(ga.populate).to.exist;
		expect(ga.populate).to.not.throw(Error);
	});


	it('class should have mutate method and not throw Error', () => {
		expect(ga.mutate).to.exist;
		expect(ga.mutate).to.not.throw(Error);
	});

	it('class should have crossover method and not throw Error', () => {
		expect(ga.crossover).to.exist;
		expect(ga.crossover).to.not.throw(Error);
	});

	it('class should have comparison method and not throw Error', () => {
		expect(ga.isABetterThanB).to.exist;
		expect(ga.isABetterThanB).to.not.throw(Error);
	});

	it('class should have compete method and not throw Error', () => {
		expect(ga.compete).to.exist;
		expect(ga.compete).to.not.throw(Error);
	});

	it('class should have mixPopulation method and not throw Error', () => {
		expect(ga.mixPopulationOrder).to.exist;
		expect(ga.mixPopulationOrder).to.not.throw(Error);
	});
	
	it('class should have evolve method and not throw Error', () => {
		expect(ga.evolve).to.exist;
		expect(ga.evolve).to.not.throw(Error);
	});

	it('class should have best method and not throw Error', () => {
		expect(ga.best).to.exist;
		expect(ga.best).to.not.throw(Error);
	});

	it('class should respond to its method', () => {
		expect(GeneticClass).to.respondTo('populate');
	});

	it('class should respond to its method', () => {
		expect(GeneticClass).to.respondTo('crossover');
	});

	it('class should respond to its method', () => {
		expect(GeneticClass).to.respondTo('mutate');
	});

	it('class should respond to its method', () => {
		expect(GeneticClass).to.respondTo('isABetterThanB');
	});

	it('class should respond to its method', () => {
		expect(GeneticClass).to.respondTo('compete');
	});

	it('class should respond to its method', () => {
		expect(GeneticClass).to.respondTo('mixPopulationOrder');
	});

	it('class should respond to its method', () => {
		expect(GeneticClass).to.respondTo('evolve');
	});

	it('class should respond to its method', () => {
		expect(GeneticClass).to.respondTo('best');
	});

	it('some methods should expect arguments', () => {
		ga.mutate(expect(arguments).to.be.arguments);
		ga.crossover(expect(arguments).to.be.arguments);
		ga.isABetterThanB(expect(arguments).to.be.arguments);
	});
})
