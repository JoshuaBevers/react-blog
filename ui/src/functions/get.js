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

export const getById = async () => {
  try {
    const goog = await fetch(`http://localhost:3001/users/post`);
    const response = await goog.json();
    console.log(response);
    return response;
  } catch (e) {
    return e;
  }
};

export const submitComment = async id => {
  try {
    const push = await fetch(`http://localhost:3001/users/post/comment`);
    //push change to database.
  } catch (e) {
    return e;
  }
};

export default getAll;
