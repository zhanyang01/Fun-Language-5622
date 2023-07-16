export let checkSubsetArray = (arr1, arr2) => {
  return arr2.every((e1) => {
    return arr1.includes(e1);
  });
};
