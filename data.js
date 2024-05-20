export function getDate() {
    const date = new Date()

    const dateOptions = {
        day: 'numeric',
        month: 'numeric',
        year: 'numeric'
    }
    
const timeOptions = {
        hour: 'numeric',
        minute: 'numeric',
        hour12: true
    }
    
const displayTime = date.toLocaleTimeString('en-UK', timeOptions)
const displayDate = date.toLocaleDateString('en-UK', dateOptions)

return {
    displayDate: displayDate,
    displayTime: displayTime
}
}

//Used ChatGPT to come up with some placeholder responses
export const responses = [
    "That's interesting! Tell me more.",
    "I didn't know that. Thanks for sharing!",
    "Can you explain that a bit further?",
    "Wow, that sounds amazing!",
    "I'm not sure I understand. Could you clarify?",
    "Did you know that honey never spoils? Archaeologists have found pots of honey in ancient Egyptian tombs that are over 3,000 years old and still perfectly edible.",
    "Bananas are berries, but strawberries aren’t. Botanically speaking, a berry is a fruit produced from the ovary of a single flower with seeds embedded in the flesh.",
    "The shortest war in history was between Britain and Zanzibar on August 27, 1896. Zanzibar surrendered after 38 minutes.",
    "Octopuses have three hearts. Two pump blood to the gills, while the third pumps it to the rest of the body.",
    "The Eiffel Tower can be 15 cm taller during the summer due to the expansion of iron when it heats up."
]