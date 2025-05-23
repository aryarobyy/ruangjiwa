## User (GET, POST)
GET (login): http://example.api/user
    return = {
        statusMessage: string (Success/Failed),
        statusCode: number,
        data: {
            id: string,
            name: string,
            username: string,
            email: string,
            umur?: string,
            role: user,
            chatId?: [idChat1, idChat2, lainnya],
        }
    }

POST (register): http://example.api/user
    data = {
        id: string,
        name: string,
        username: string,
        password: string,
        email: string,
        role: string
        umur?: string,
        penyakit?: string,
    }


## dokter (GET, POST)
GET (login dokter): http://example.api/dokter
    return = {
        statusMessage: string (Success/Failed),
        statusCode: number,
        data: {
            id: string
            name: string
            username: string
            email: string
            umur?: string
            role: string
            spesialis: string
        }
    }

POST (register dokter): http://example.api/dokter
    data = {
        id: string
        name: string
        username: string
        password: string
        email: string
        role: string
        umur?: string
        spesialis?: string
    }


## Konsul (GET, POST) 
GET (get semua konsul): http://example.api/konsul/
    return = {
        message: string (Success/Failed)
        data: [
            {
                konsulId: string
                title: string
                userId: string
                dokterId: string
                userName: string
                dokterName: string
            }
        ]
    }

GET (get spesifik konsul): http://example.api/konsul/(konsulId)
    return = {
        message: string (Success/Failed)
        data: {
            konsulId: string
            title: string
            userId: string
            dokterId: string
            userName: string
            dokterName: string
            messages: [
                    {            
                        messageId: string (dari konsulId)
                        sender: string (userId/dokterId)
                        name: string
                        message: string
                    }
                ]
        }
    }

POST (bikin konsul baru): http://example.api/konsul
    data = {
        konsulId: string,
        title: string
        userId: string,
        userName: string
    }

## Chat Konsul (GET, POST)
POST (Send Message in Konsul): http://example.api/chat/konsul/(idKonsul)
    data = {
        messageId: string (dari konsulId)
        sender: string (userId/dokterId)
        name: string
        message: string
    }

GET (get message yg ada di konsul): http://example.api/chat/konsul/(konsulId)
    return {
            message: string (Success/Failed)
            data: [
                {
                    messageId: string (dari konsulId)
                    sender: string (userId/dokterId)
                    name: string
                    message: string
                }
            ]
        }

## Donasi (GET, POST)
GET (get all donate by id) http://example.api/donate/(userId)
    return = {
        message: string (Success/Failed),
        data: [
            {
                donateId: string
                name: string 
                userId: string
                amount: number
            }
        ]
    }

POST (add new donasi) http://example.api/donate
    data = {
        donateId: string
        userId: string
        amount: number
    }


## Forum (GET, POST)
GET (get semua forum): http://example.api/forum/
    return = {
            message: string (Success/Failed)
            data: {
                forumId: string
                title: string
                userId/dokterId: string
                name: string
            }
    }
    
GET (get spesifik forum): http://example.api/forum/(forumId)
    return = {
        message: string (Success/Failed);
        data: {
            forumId: string
            userId/dokterId: string
            name: string
            messages: [
                {
                    forumChatId: string
                    senderId: string
                    name: string
                    chat: string
                    date: new Date()
                }
            ]
        }
    }

POST (bikin forum baru): http://example.api/api/forum
    data = {
        forumId: string
        userId/dokterId: string
        name: string
        post: string
    }

## Chat Forum (GET, POST)
POST (Send Message in forum): http://example.api/chat/forum/(forumId)
    data = {
        messageId: string (dari konsulId)
        sender: string (userId/dokterId)
        name: string
        message: string
    }

GET (get message yg ada di forum): http://example.api/chat/forum/(forumId)
    return {
            message: string (Success/Failed)
            data: [
                {
                    forumId: string
                    createdBy: string
                    name: string
                    createdAt: string
                    title:
                    messages: [
                        {
                            idMessage: string
                            createdBy: string
                            name: string
                            message: string
                            createdAt: string
                        }
                    ]
                }
            ]
        }

## Artikel (GET, POST)
POST (bikin artikel): http://example.api/artikel
    data = {
        creatorId: string
        name: string
        artikelId: string
        title: string
        description: string
        image: string
        date: Date
    }
    return {
        message: "Success/Error"
    }

GET (semua artikel): http://example.api/artikel
    return {
        staus: string (Success/Error)
        data: [
                {
                    "_id": "66b44d021cc5622b6c6e68b4",
                    "creatorId": string,
                    "artikelId": stringUID,
                    "name": string,
                    "title": string,
                    "description": string,
                    image: string
                    "date": stringDate
                }
        ]
    }

GET (spesifik artikel): http://example.api/artikel/(artikelId)
    return {
        status: string (Success/Error)
        data {
            adminId: string
            name: string
            artikelId: string
            title: string
            description: string
            date: Date
        }
    }


## Chat Bot Room (GET, POST)
GET (get room chat by id): http://example.api/chatBot/(idUser)
return {
    status: string (Success/Failed),
    data {
        _id: string,
        chatId: string (idUser),
        messages: [
            messageId: string,
            role: string (user/model),
            text: string
        ]
    }
}

POST (buat room chatbot baru): http://example.api/chatBot
    data: {
        chatId: string (idUser),
        messages: []
    }

## Chat Bot (POST) 
    POST (send message into bot): http://example.api/api/chat/chatBot/(chatId)
    data: {
        messageId: string (uuid)
        role: string (user/model),
        text: string
        date: newDate();
    }