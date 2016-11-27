export default class {
  constructor(
    mutationFunction = (phenotype) => phenotype,
    crossoverFunction = (a, b) => [a, b],
    fitnessFunction = (phenotype) => 0 ,
    isABetterThanBFunction = undefined,
    population = [],
    populationSize = 100,
    chanceOfMutation = 50

    this.mutationFunction = mutationFunction;
    this.crossoverFunction = crossoverFunction;
    this.fitnessFunction = fitnessFunction;
    this.isABetterThanBFunction = isABetterThanBFunction;
    this.population = population;
    this.populationSize = populationSize;
    this.chanceOfMutation = chanceOfMutation;
  }

  populate () {

      var size = this.population.length;
      while( this.population.length < this.populationSize ) {
          this.population.push(
              this.mutate(
                  this.population[ Math.floor( Math.random() * size ) ]
              )
          );
      }
  }

  mutate(phenotype) {
    return this.mutationFunction(phenotype);
  }

  crossover(phenotype) {
    var randomIndex = Math.floor(Math.random() * this.population.length);
    var matePhenotype = this.population[randomIndex];
    return this.crossoverFunction(phenotype, matePhenotype);
  }

  isABetterThanB(a,b) {
    var isABetterThanB = false;
    if ( this.isABetterThanBFunction ) {
        return this.isABetterThanBFunction(a, b);
    }
    return this.fitnessFunction(a) >= this.fitnessFunction(b);
  }

  compete() {
      var nextGeneration = [];

      for( var p = 0 ; p < this.population.length - 1 ; p += 2 ) {
          var competitorA = this.population[p];
          var competitorB = this.population[p+1];
          var dominant = this.isABetterThanB( competitorA , competitorB ) ? competitorA : competitorB;

          var children = this.crossover(dominant);
          var children = children.map((child) => {
            if ( Math.random() < this.chanceOfMutation / 100 ) {
              return this.mutate(child);
            }
            return child;
          }, this);

          nextGeneration.push(...children);
      }

      this.population = nextGeneration;
  }

  mixPopulationOrder() {

      for( var index = 0 ; index < this.population.length ; index++ ) {
          var newIndex = Math.floor( Math.random() * this.population.length );
          var tempPhenotype = this.population[newIndex];
          this.population[newIndex] = this.population[index];
          this.population[index] = tempPhenotype;
      }
  }

  evolve() {
    // Only runs when we do not have enough pehotypes in our populatio
    this.populate();

    // Mix the phenotypes, so we can iterate through them at random
    this.mixPopulationOrder();

    // Populate the new generation
    this.compete();
  }

  best() {
    var myFitnessFunction = this.fitnessFunction;
    var theBest = this.population.reduce(function(previousPhenotype, currentPhenotype) {
       var previousFitness = myFitnessFunction(previousPhenotype);
       var currentFitness = myFitnessFunction(currentPhenotype);
       return previousFitness >= currentFitness ? previousPhenotype : currentPhenotype;
    });

    return theBest;
  }
}
