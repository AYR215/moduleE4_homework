
class ElectricalDevice {
  constructor(name, manufacturer, wattage) {
    this.name = name;
    this.manufacturer = manufacturer;
    this.wattage = wattage ;
    this.devTurnOn = false; //true - устройство включено
  }

  getInfo() {
    return (Устройство ${this.name} производитель ${this.manufacturer}.)
    }


  getWattage() {
    return (Мощность прибора ${this.name}
      ${this.wattage} Ватт)
  }

  devOn() {
    this.devTurnOn = true;
    return (Устройство ${this.name}
      (${this.manufacturer}) включено)
  }

  devOff() {
    this.devTurnOn = false;
    return (Устройство ${this.name}
      (${this.manufacturer}) выключено)
  }
}

class Lamp extends ElectricalDevice {
  constructor(name, manufacturer, wattage,
  type, devTurnOn) {
    super(devTurnOn);
    super(name);
    this.manufacturer = manufacturer;
    this.wattage = wattage;
    this.type = type;
    }

  getInfo() {
    return (Лампа ${this.name} (${this.type}), производитель ${this.manufacturer}, мощность - ${this.wattage} Ватт.)
  }

  lampBrightLevel(bright) {
    return(Яркость лампы ${this.name}
      (${this.manufacturer}) установлена на
        уровне ${bright} %)
  }
}

class TV extends ElectricalDevice {
  constructor(name, manufacturer, wattage,
    type, screen, devTurnOn) {
    super(devTurnOn);
    super(name);
    this.manufacturer = manufacturer;
    this.wattage = wattage;
    this.type = type;
    this.screen = screen;
  }

  getInfo() {
    return(Телевизор ${this.name} с экраном ${this.type} (${this.screen}\'\'), производства ${this.manufacturer}, мощность - ${this.wattage} Ватт.)
  }
  // метод выключения по таймеру
  turnOffTimer(timeSecond) {
    const tvName = this.name;
    let timer = setInterval(function() {
      // Условие если время закончилось
      if (timeSecond <= 0) {
          this.devTurnOn = false;
          // Таймер удаляется
          clearInterval(timer);
          //Сообщение что время закончилось
          console.log(Телевизор ${tvName} выключен по таймеру);
      } else {
          --timeSecond; // Уменьшаем таймер
      }
    }, 1000);
  }
}

let grill = new ElectricalDevice('grill', 'tefal', 1500);
console.log(grill.getInfo())
  //"Устройство grill производитель tefal."


let tableLamp = new Lamp('tableLamp', "Xiaomi", 100, false);

console.log(tableLamp.getWattage());
  //"Мощность прибора tableLamp 100 Ватт"

console.log(tableLamp.getInfo());
  //"Лампа tableLamp (false), производитель Xiaomi, мощность - 100 Ватт."

console.log(tableLamp.devOn());
  //"Устройство tableLamp (Xiaomi) включено"

console.log(tableLamp.devOff());
  //"Устройство tableLamp (Xiaomi) выключено"

let flatTv = new TV('flatTv', 'Sony', 1200, 'OLED', 65);
console.log(flatTv.getInfo());
  //"Телевизор flatTv с экраном OLED (65''), производства Sony, мощность - 1200 Ватт."

console.log(flatTv.turnOffTimer(5));
  //"Телевизор flatTv выключен по таймеру"