import React from 'react';
import {ChatCompletionRequestMessageRoleEnum, Configuration, OpenAIApi} from 'openai';
import reactLogo from "./assets/react.svg";
import MyComponent from "./Text_GPT";

export const Chatgpt: React.FC = () => {
  const [prompt, setPrompt] = React.useState<string | undefined>('');
  const [response, setResponse] = React.useState<string | undefined>('');
  const configuration = new Configuration({
    apiKey: 'MY_OPENAI_KEY',
  });
  const myOpenAi = new OpenAIApi(configuration);
  const chatGptMessages = [
    {
      role: ChatCompletionRequestMessageRoleEnum.User,
      content: !!prompt ? prompt : '',
    }
  ];
  const getOpenAIResponse = async (e: React.FormEvent<EventTarget>) => {
    e.preventDefault();
    const res = await myOpenAi.createChatCompletion({
      messages: chatGptMessages,
      model: 'gpt-3.5-turbo',
    });
    setResponse(res.data.choices[0].message?.content);
  };


  return (
      <>
        <div>
          <a href="https://reactjs.org" >
            <img src={reactLogo} className="logo react" alt="React logo"/>
          </a>
        </div>
        <h1><MyComponent/></h1>
        <form onSubmit={getOpenAIResponse}>
          <input
              id="chat-input"
              type="text"
              value={prompt}
              onChange={e => setPrompt(e.target.value)}
          />
          <button type="submit">Submit</button>
        </form>
        {/* If there's no response then don't show the element,
			we can replace it with a Loading component */}
        {!!response && <div>{response}</div>}
      </>
  );
};

