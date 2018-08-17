# Genetic algorithm framework built with JavaScript ES6

[![Build Status](https://travis-ci.org/acupy/genetic-algorithm-es6.svg?branch=master)](https://travis-ci.org/acupy/genetic-algorithm-es6)

[![NPM](https://nodei.co/npm/genetic-algorithm-fw.png?downloads=true)](https://npmjs.org/package/genetic-algorithm-fw)

This package provides a framework for building applications where genetic algorithms (GA) are used for solving optimization problems based on a natural selection process that mimics biological evolution.

The algorithm repeatedly modifies a population of individual solutions.

## Installation

```bash

npm install genetic-algorithm-fw

```

## Functions to define

#### mutation

```js
function mutation(oldPhenotype){
  // return a new phenotype
}
```

#### crossover

```js
function crossover (phenoTypeA, phenoTypeB) {
    // using phenoTypeA and phenotypeB create a new list of two phenoTypes
    // return [phenotype1, phenotype2]
}
```
#### fitness

```js
function fitness(phenotype) {
  // return the fitness number
  // the higher the value the fitter it is
}
```
#### competition
```js
function competition(phenoTypeA, phenoTypeB) {
    // return true when the fitness value is higher for phenoTypeA
    // otherwise return false
}
```

## Initialize GA object with the previously defined functions
```js
var GeneticAlgorithm = require('genetic-algorithm-fw');

var geneticalgorithm = new GeneticAlgorithm(
  mutation, // if not specified, no mutation happens
  crossover, // if not specified, the initial phenoTypes are returned
  fitness, // if not specified, 0 is returned
  competition, // if not specified, no competition happens
  [], // initial list of phenoTypes
  populationSize, // by defualt it is 100
  chanceOfMutation); // by defautlt it is 50
```
## Evolve our population
```js
// we can run as many iterations as we like
geneticalgorithm.evolve();
```

## Get the best result
```js
// we can check the best phenotype in our current population
var theBestPhenotype = geneticalgorithm.best();
```
