export const getMonthName = (date: Date): string => {
  const month = date.toLocaleString("default", { month: "long" });
  return month.charAt(0).toUpperCase() + month.slice(1);
};
