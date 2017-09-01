'use strict';

var userDialog = document.querySelector('.setup');
var similarWizardsElement = document.querySelector('.setup-similar');
userDialog.classList.remove('hidden');
similarWizardsElement.classList.remove('hidden');

var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];

var getRandomValue = function (arrayLength) {
  var randomValue = Math.floor(Math.random() * arrayLength);
  return randomValue;
};

var getName = function () {
  return WIZARD_NAMES[getRandomValue(WIZARD_NAMES.length)] + ' ' + WIZARD_SURNAMES[getRandomValue(WIZARD_SURNAMES.length)];
};
var getCoatColor = function () {
  return COAT_COLOR[getRandomValue(COAT_COLOR.length)];
};
var getEyesColor = function () {
  return EYES_COLOR[getRandomValue(EYES_COLOR.length)];
};

var wizards = [];
var pushWizardToWizards = function () {
  for (i = 0; i < 4; i++) {
    var similarWizard = {
      name: getName(),
      coatColor: getCoatColor(),
      eyeColor: getEyesColor()
    };
    wizards.push(similarWizard);
  }
};
pushWizardToWizards();

var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content;

for (var i = 0; i < wizards.length; i++) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizards[i].name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizards[i].coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizards[i].eyesColor;

  similarListElement.appendChild(wizardElement);
}
