const Person = function(name, weight, height, gender)
{
    this.name = name
    this.weight = weight
    this.height = height
    this.gender = gender
}

const person = new Person('Raul', 80, 1.80, 'male')

// --------------------------- Another file --------------------------------

const PersonBuilder = function(name, gender)
{
    this.name = name
    this.gender = gender

    this.setHeight = function(height)
    {
        this.height = height
        return this
    }

    this.setWeight = function(weight)
    {
        this.weight = weight
        return this
    }

    this.builder = function()
    {
        return new Person(this.name, this.weight, this.height, this.gender)
    }
}

const person1 = new PersonBuilder('Raul', 'male').setHeight(1.85).setWeight(80).builder()
console.log(person1)