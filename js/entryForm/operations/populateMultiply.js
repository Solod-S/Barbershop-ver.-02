import refs from "../../refs/index.js";

const STORAGE_KEY = "appointmentLocallStorageKey";

const { entryRefs } = refs;

const populateTextareaMulti = () => {
  const { form } = entryRefs;
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
};

export default populateTextareaMulti;
