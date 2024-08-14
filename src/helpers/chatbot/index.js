import { generateChatContent } from '@/libs/chatBot/chatBotGenerate';
import * as url from '../endpointUrl';

import axiosInstance from "@/libs/axiosInterface"
import { convertHistoryMessageGemini } from '@/utils/convertMessageHistoryGemini';

export const getChatBotRoom = async (chatId) => {
    return axiosInstance.get(`${url.ENDPOINT_CHATBOT}/${chatId}`);
};

export const postChatBotRoom = async (data) => {
    return axiosInstance.post(`${url.ENDPOINT_CHATBOT}`, data)
};

export const postNewMessageChatBot = async (data, chatId, historyMessage, isByUser) => {

    const newHistoryMessage = convertHistoryMessageGemini(historyMessage);

    if(isByUser) {
        const botMessage = await generateChatContent(data.text, newHistoryMessage);
        const response = await axiosInstance.post(`${url.ENDPOINT_CHATBOT_MESSAGE}/${chatId}`, data);
        return {
            chatBot: botMessage,
            response
        };
    } else {
        const response = await axiosInstance.post(`${url.ENDPOINT_CHATBOT_MESSAGE}/${chatId}`, data);
        return response;
    }

};

export const deleteChatBotRoom = async (chatId) => {
    return axiosInstance.delete(`${url.ENDPOINT_CHATBOT}/${chatId}`)
}