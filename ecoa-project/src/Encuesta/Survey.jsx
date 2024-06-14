import React from 'react';

const Survey = ({ questionHistoryArray, answerHistoryArray }) => {
    // Combinar preguntas y respuestas en un solo array
    const chatHistory = [];
    for (let i = 0; i < questionHistoryArray.length; i++) {
        chatHistory.push({ type: 'question', text: questionHistoryArray[i], id: `q${i}` });
        if (answerHistoryArray[i]) {
            chatHistory.push({ type: 'answer', text: answerHistoryArray[i], id: `a${i}` });
        }
    }

    return (
        <div className="h-auto bg-gray-100 flex flex-col items-center justify-center">
            <div className="bg-white w-full max-w-2xl rounded shadow p-4">
                <div className="h-96 overflow-y-auto">
                    {chatHistory.map((item, index) => (
                        <div
                            key={index}
                            className={`p-2 my-2 rounded ${
                                item.type === 'question' ? 'bg-blue-100 self-start' : 'bg-green-100 self-end'
                            }`}
                        >
                            {item.text}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Survey;