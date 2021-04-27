<template>
    
    Este archivo es únicamente para que puedas copiar la etiqueta style, este archivo no influye en nada en nuestro proyecto.

    PD. No copies esta etiqueta template, esta aquí solo para avisarte de esto :D

</template>

<style>

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: Arial, Helvetica, sans-serif;
}

.dashboard {
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 20px;

  background: rgb(154,221,212);
  background: linear-gradient(114deg, rgba(154,221,212,1) 0%, rgba(171,214,227,1) 100%);
}

.image-container {
  display: flex;
}

.image-container img {
  display: inline-block;
  width: 100%;
}

.selected-card {
  display: flex;
  justify-content: center;
}

.options {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin-top: 2rem;
  gap: 15px;
  justify-items: center;
}

.options .card {
  cursor: pointer;
}

</style>