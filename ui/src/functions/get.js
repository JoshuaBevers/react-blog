const getAll = async () => {
  try {
    const goog = await fetch(`http://localhost:3001/users/all`);
    const response = await goog.json();
    console.log(response);
    return response;
  } catch (e) {
    return e;
  }
};

export default getAll;
