import refs from "../refs/index.js";
import operation from "./operations/index.js";

import optionsForNotiflix from "../services/notiflix-options.js";
Notiflix.Notify.init(optionsForNotiflix);

const { onSubmit, onFormInput, populateTextareaMulti } = operation;
const { entryRefs } = refs;
const { form } = entryRefs;

populateTextareaMulti();

form.addEventListener("submit", onSubmit.bind(entryRefs));
form.addEventListener("input", _.throttle(onFormInput.bind(entryRefs), 500));
