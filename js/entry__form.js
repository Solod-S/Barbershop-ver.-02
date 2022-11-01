const STORAGE_KEY = "appointmentLocallStorageKey";
import optionsForNotiflix from "./services/notiflix-options.js";
Notiflix.Notify.init(optionsForNotiflix);

const entryForm = {
  form: document.querySelector(".entry__form"),
  sendModalBtn: document.querySelector(".entry-form__btn"),
  formData: { ...JSON.parse(localStorage.getItem(STORAGE_KEY)) },
  onSubmit(event) {
    const { name, feedback, tel } = event.currentTarget.elements;
    console.log(event.currentTarget.elements.name.value);
    event.preventDefault();
    if (!name.value || !feedback.value || !tel.value) {
      Notiflix.Notify.failure("Внимание! Все поля должны быть заполнены.");
      console.log(`Внимание! Все поля должны быть заполнены`);
      return;
    }
    const capturedData = new FormData(event.currentTarget);
    const saveData = {};
    capturedData.forEach((value, key) => {
      saveData[key] = value;
    });

    Notiflix.Notify.info(
      "Мы собрали данные, скоро с Вами свяжиться наш менеджер."
    );
    console.log(`Спасибо за Ваш отзыв`);
    console.log("Мы собрали данные ==>", saveData);
    event.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
  },

  onFormInput(event) {
    const { formData } = this;
    const { name, value } = event.target;
    formData[name] = value;
    console.log(formData);

    localStorage.setItem(STORAGE_KEY, JSON.stringify(this.formData));
  },

  populateTextareaMulti() {
    const { form } = this;
    const parsedDataFromLocalStorage = JSON.parse(
      localStorage.getItem(STORAGE_KEY)
    );
    if (!parsedDataFromLocalStorage) {
      return;
    } else if (parsedDataFromLocalStorage) {
      for (let element of form.elements) {
        const entris = Object.entries(parsedDataFromLocalStorage);

        entris.forEach(([name, value]) => {
          if (element.name === name) {
            element.value = value;
          }
        });
      }
    }
  },
};
entryForm.populateTextareaMulti();

entryForm.form.addEventListener("submit", entryForm.onSubmit.bind(entryForm));
entryForm.form.addEventListener(
  "input",
  _.throttle(entryForm.onFormInput.bind(entryForm), 500)
);
