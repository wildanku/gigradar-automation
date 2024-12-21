const getSeniorityLevel = (year) => {
  let seniorityLevel = "";

  if (year < 2) {
    seniorityLevel = "Junior";
  } else if (year >= 2 && year < 5) {
    seniorityLevel = "Mid-Level";
  } else if (year >= 5 && year <= 10) {
    seniorityLevel = "Senior";
  } else if (year > 10) {
    seniorityLevel = "Expert";
  }

  return seniorityLevel;
};

export default getSeniorityLevel;
