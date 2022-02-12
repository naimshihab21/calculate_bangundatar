// PERSEGI
// LUAS
const inputPersegi = document.querySelector('.input-sisi-persegi');
const resultPersegi = document.querySelector('.result-sisi-persegi');

// BUTTON
const btnCalculate = document.querySelector('.btn-calculate');
btnCalculate.addEventListener('click', () => {
  return resultPersegi.value = inputPersegi.value * inputPersegi.value;
})

const btnRemove = document.querySelector('.btn-remove');
btnRemove.addEventListener('click', function() {
  const tanya1 = confirm("Do you want delete the result calculate luas?");
  if(tanya1) {
    inputPersegi.value = "";
    resultPersegi.value = "";
  }
})

// KELILING
const inpKelPersegi = document.querySelector('.input-keliling-persegi');
const resKelPersegi = document.querySelector('.result-keliling-persegi');

const btnCalculateKel = document.querySelector('.btn-calculate-keliling');
btnCalculateKel.addEventListener('click', () => {
  return resKelPersegi.value = inpKelPersegi.value * inpKelPersegi.value * inpKelPersegi.value * inpKelPersegi.value;
})

const btnRemoveKel = document.querySelector('.btn-remove-keliling');
btnRemoveKel.addEventListener('click', function() {
  const tanya2 = confirm("Do you want delete the result calculate keliling?");
  if(tanya2) {
    inpKelPersegi.value = "";
    resKelPersegi.value = "";
  }
})

// PERSEGI PANJANG
const inputPanjang = document.querySelector('.input-panjang-pp');
const inputLebar = document.querySelector('.input-lebar-pp');
const resultPP = document.querySelector('.result-pp');
const btnCalculateLuasPP = document.querySelector('.btn-calculate-luas-pp');
const btnCalculateKelPP = document.querySelector('.btn-calculate-keliling-pp');

btnCalculateLuasPP.addEventListener('click', () => {
  resultPP.value = inputPanjang.value * inputLebar.value;
})

btnCalculateKelPP.addEventListener('click', () => {
  const panjang = Number(inputPanjang.value);
  const lebar = Number(inputLebar.value);
  return resultPP.value = 2 * (panjang + lebar);
})

const btnRemoveLuasPP = document.querySelector('.btn-remove-luas-pp');
btnRemoveLuasPP.addEventListener('click', function() {
  const tanya3 = confirm("Delete the calculate the result persegi panjang?");
  if(tanya3) {
    inputPanjang.value = "";
    inputLebar.value = "";
    resultPP.value = "";
  }
})
