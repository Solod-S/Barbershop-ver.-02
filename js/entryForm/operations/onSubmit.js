import optionsForNotiflix from "../../services/notiflix-options.js";
Notiflix.Notify.init(optionsForNotiflix);

const STORAGE_KEY = "appointmentLocallStorageKey";

const onSubmit = (event) => {
  event.preventDefault();
  const { name, feedback, tel } = event.currentTarget.elements;
  if (!name.value || !feedback.value || !tel.value) {
    console.log(name.value, feedback.value, tel.value);
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
};

export default onSubmit;
