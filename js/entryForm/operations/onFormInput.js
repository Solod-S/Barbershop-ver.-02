const STORAGE_KEY = "appointmentLocallStorageKey";
const formData = { ...JSON.parse(localStorage.getItem(STORAGE_KEY)) };

const onFormInput = (event) => {
  const { name, value } = event.target;
  formData[name] = value;
  // console.log(formData);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
};

export default onFormInput;
