{

function formatString(input: string, toUpper?: boolean): string {
    
    if (toUpper || toUpper === undefined) {
        return input.toUpperCase();
    } else {
        return input.toLowerCase();
    }
  

  }
  
  const output1=formatString("Hello", false);  
  console.log(output1); 


  function filterByRating(items: { title: string; rating: number }[]): { title: string; rating: number }[] {
    return items.filter(item => item.rating >= 4);

  }
  const books = [
    { title: "Book A", rating: 4.5 },
    { title: "Book B", rating: 3.2 },
    { title: "Book C", rating: 5.0 }
  ];
  
 const Output2= filterByRating(books); 
 console.log(Output2);


 function concatenateArrays<T>(...arrays: T[][]): T[] {
    return arrays.reduce((acc, array) => acc.concat(array), []);
  }
  console.log(concatenateArrays(["a", "b"], ["c"]));         
  console.log(concatenateArrays([1, 2], [3, 4], [5]));  
  
  
  
class Vehicle {
   private _make: string;
   public year: number;
   constructor(_make: string, year: number) {
    this._make = _make;
    this.year = year;
  }

    getInfo(): string {
        return `Make:${this._make},Year: ${this.year}`;
    }
  } 
class Car extends Vehicle {
    private _model: string; 
    constructor(make: string, year: number, _model: string) {
        super(make, year);
        this._model = _model;
    } 

    getModel(): string {
        return `Model: ${this._model}`;
    }

}

    const myCar = new Car("Toyota", 2020, "Corolla");
    myCar.getInfo();  
    myCar.getModel(); 

    console.log(myCar.getInfo());  
    console.log(myCar.getModel());


function processValue(value: string | number): number{
    if (typeof value === "string") {
        const stringLength: number = value.length;
        return stringLength;
    } else {
        return value*2;
    }
  }
  console.log(processValue("hello")); 

  console.log(processValue(10)); 




  interface Product {
    name: string;
    price: number;
  }
  
  function getMostExpensiveProduct(products: Product[]): Product | null{
    if (products.length === 0) {
        return null;
    }
  
    return products.reduce((prev, current) => (prev.price > current.price) ? prev : current);
  }
  const products = [
    { name: "Pen", price: 10 },
    { name: "Notebook", price: 25 },
    { name: "Bag", price: 50 }
  ];

  console.log( getMostExpensiveProduct(products)); 
  
 


enum Day {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
  }
  
  function getDayType(day: Day): string {
    switch (day) {
        case Day.Saturday:
        case Day.Sunday:
            return "Weekend";
        default:
            return "Weekday";
    }
  }

  const Output4=getDayType(Day.Monday);  
  const Output=getDayType(Day.Sunday);  
    console.log(Output4); 
    console.log(Output); 



async function squareAsync(n: number): Promise<number> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (n < 0) {
          reject(new Error("Negative number not allowed"));
        } else {
          resolve(n * n);
        }
      }, 1000);
    });
  }



squareAsync(4).then(console.log);      
squareAsync(-3).catch(console.error);   


}

