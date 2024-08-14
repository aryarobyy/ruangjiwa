export const dateConvert = (date) => {
    // const newDate = new Date(date);

    // const hour newDate.getHours
}

export const getHourFromDate = (date) => {
    const newDate = new Date(date);

    const hour = newDate.getHours();
    const minute = newDate.getMinutes();
    const seconds = newDate.getSeconds();

    return `${hour.toString().padStart(2, '0')}.${minute.toString().padStart(2, '0')}`;
}