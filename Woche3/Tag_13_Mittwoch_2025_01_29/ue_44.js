'use strict';

let productList = '3Doodler 3D Printing Pen, Game of Thrones Wax Seal Coasters, 10th Doctor Sonic Screwdriver Exclusive Programmable TV Remote, Electronic Butterfly in a Jar, Aquafarm: Aquaponics Fish Garden, Cassette Adapter Bluetooth, Marvel Comics Lightweight Infinity Scarf, Ollie - The App Controlled Robot, Sound Splash Bluetooth Waterproof Shower Speaker, PowerCube, Backpack of Holding, Retro Duo Portable NES/SNES Game System, Universal Gadget Wrist Charger, USB Squirming Tentacle, USB Fishquarium, Space Bar Keyboard Organizer & USB Hub Pop, USB Pet Rock, Powerstation 5- E. Maximus Chargus, Dual Heated Travel Mug, Crosley Collegiate Portable USB Turntable, Meh Hoodie, Magnetic Accelerator Cannon, 8-Bit Heat-Change Mug';

let handleCsv = (text) => text.split(', ').sort()


console.log(handleCsv(productList).join('\n'));