//return first-letters of words in the given string
const initials = {
  name: "initials",
  fn: (name) => {
    let initial = "";
    if (name) {
      name.split(" ").forEach((word) => {
        initial += word[0];
      });
    }
    return (initial.length > 2 ? initial.slice(0, 2) : initial).toUpperCase();
  }
};

const global = [initials];

export { initials };
export default global;
