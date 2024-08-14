export const convertHistoryMessageGemini = (arrHistory) => {
    let result = [];

    if(arrHistory.length > 10) {
        const newArr = arrHistory.slice(arrHistory.length-11, arrHistory.length-1);
        let i = 0;

        while(newArr[0].role !== 'user') {
            newArr.shift();
            i++
        };
        
        newArr.map(el => {
            const newObj = {
                role: el.role,
                parts: [{text: el.text}]
            };
            result.push(newObj);
        });
    } else {
        arrHistory.map(el => {
            const newObj = {
                role: el.role,
                parts: [{text: el.text}]
            };
            result.push(newObj);
        });
    }

    return result;
}