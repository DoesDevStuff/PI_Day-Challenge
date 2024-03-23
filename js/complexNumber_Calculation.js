class Complex {
    // Constructor to create a complex number with real (a) and imaginary (b) parts
    constructor(real, imaginary) {
        this.real = real;
        this.imaginary = imaginary;
    }

  // All function return the result as a new Complex number  
  
  // Adds this complex number with another
  add(other) {
    return new Complex( (this.real + other.real), (this.imaginary + other.imaginary) );
  }

  // subtracts another complex number from this one
  subtract(other) {
    return new Complex((this.real - other.real), (this.imaginary - other.imaginary) );
  }

  // scales this complex number by a real value
  scale(value) {
    return new Complex((this.real * value), (this.imaginary * value) );
  }

  // multiplies this complex number with another using the formula (ac-bd) + (ad+bc)i
  mult(other) {
    let real = (this.real * other.real) - (this.imaginary * other.imaginary);
    let imaginary = (this.real * other.imaginary) + (other.real * this.imaginary);

    return new Complex(real, imaginary);
  }

  // Calculates the square root of this complex number
  sqrt() {
    // convert to polar form
    let magnitude = sqrt( (this.real * this.real) + (this.imaginary * this.imaginary) );
    let angle = atan2(this.imaginary, this.real);

    // Calculate square root of magnitude and use half the angle for square root
    magnitude = sqrt(magnitude);
    angle = angle / 2;

    // Back to rectangular form
    return new Complex( (magnitude * cos(angle)), (magnitude * sin(angle)));
  }
}