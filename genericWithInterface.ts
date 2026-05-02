// example of genericWithInterface

//* here the second parameter is X but optional so we have gave this a default value of null so that it don't ask for the X value
interface Developer<T, X = null> {
  name: string;
  salary: number;
  device: {
    brand: string;
    model: string;
    releasedYear: string;
  };
  smartWatch: T;
  bike?: X;
}

interface chinaBrand {
  heartRate: string;
  stopWatch: boolean;
}

interface appleBrand {
  heartRate: string;
  stopWatch: boolean;
  brand: string;
  model: string;
  year: number;
}

const poorDev: Developer<chinaBrand> = {
  name: "Jamil",
  salary: 8,
  device: {
    brand: "Computer",
    model: "MSI B650 + Ryzen 7700 + 32Gb DDR5 + 512GB SSD",
    releasedYear: "2025",
  },
  smartWatch: {
    heartRate: "100BP",
    stopWatch: false,
  },
  bike: null,
};
console.log(poorDev);

const richDev: Developer<appleBrand> = {
  name: "Ashraful",
  salary: 80,
  device: {
    brand: "Apple",
    model: "M4 Air",
    releasedYear: "2025",
  },
  smartWatch: {
    heartRate: "100BP",
    stopWatch: true,
    brand: "Apple",
    model: "A5",
    year: 2025,
  },
};

console.log(richDev);
