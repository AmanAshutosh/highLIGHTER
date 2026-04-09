

const KEY_NAME = "highLIGHTER_blogs";


export const loadData = () => {
  try {
    const data = localStorage.getItem(KEY_NAME);

    if (data === null) {
      return [];
    }

    const parsedData = JSON.parse(data);
    return parsedData;
  } catch (err) {
    console.error("Error loading data from local storage:", err);
    return [];
  }
};


export const saveData = (data) => {
  try {
    const stringData = JSON.stringify(data);
    localStorage.setItem(KEY_NAME, stringData);
  } catch (err) {
    console.error("Error saving data to local storage:", err);
  }
};
