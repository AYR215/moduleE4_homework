function ElectricalDevice(name, manufacturer,
    wattage) {
    this.name = name;
    this.manufacturer = manufacturer;
    this.wattage = wattage;
    this.devTurnOn = false; //true - устройство включено
    }

ElectricalDevice.prototype.getInfo = function() {
    return (`Устройство ${this.name} производитель
    ${this.manufacturer}.`)
    }

ElectricalDevice.prototype.getWattage = function() {
    return (`Устройство ${this.name} обладает
    мощностью ${this.wattage}.`)
    }

ElectricalDevice.prototype.devOn = function() {
    devTurnOn = true;
    return(`Устройство ${this.name}
    (${this.manufacturer}) включено.`)
    }

ElectricalDevice.prototype.devOff = function() {
    devTurnOn = false;
    return (`Устройство ${this.name}
      (${this.manufacturer}) выключено`)
  }


function Lamp(name, manufacturer, wattage, type) {
    this.name = name;
    this.manufacturer = manufacturer;
    this.wattage = wattage;
    this.type = type;
    }

Lamp.prototype = new ElectricalDevice()

Lamp.prototype.getInfo = function() {
    return (`Лампа ${this.name} (${this.type}), производитель ${this.manufacturer}.`)
  }

Lamp.prototype.lampBrightLevel = function(bright) {
    return(`Яркость лампы ${this.name}
      (${this.manufacturer}) установлена на
        уровне ${bright} %`)
  }


function TV(name, manufacturer, wattage, type, screen) {
    this.name = name;
    this.manufacturer = manufacturer;
    this.wattage = wattage;
    this.type = type;
    this.screen = screen;
    }

TV.prototype = new ElectricalDevice()

TV.prototype.getInfo = function() {
    return(`Телевизор ${this.name} с экраном
    ${this.type} (${this.screen}\'\'), производства
    ${this.manufacturer}.`)
    }

// метод выключения по таймеру
TV.prototype.turnOffTimer = function(timeSecond) {
    const tvName = this.name;
    let timer = setInterval(function() {
      // Условие если время закончилось
      if (timeSecond <= 0) {
          this.devTurnOn = false;
          // Таймер удаляется
          clearInterval(timer);
          //Сообщение что время закончилось
          console.log(`Телевизор ${tvName} выключен
   по таймеру`);
      } else {
          --timeSecond; // Уменьшаем таймер
      }
    }, 1000);
  }

const grill = new ElectricalDevice('grill', 'tefal', 1500);
console.log(grill.getInfo())
  //"Устройство grill производитель tefal."


const tableLamp = new Lamp('tableLamp', "Xiaomi", 100, "LED");

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