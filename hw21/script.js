const BASE_URL = "https://swapi.dev/api";

const form = document.getElementById("objForm");
const selectObj = document.getElementById("selectObj");
const selectOpt = document.querySelectorAll(".select_options");
const IdInput = document.getElementById("objId");
const container = document.getElementById("container");
const btn = document.querySelector(".button");



const handleErrors = async (response) => {
  if (!response.ok) {
    let { error }   = await response.json();
    throw new Error(error);
  }
  return response;
}