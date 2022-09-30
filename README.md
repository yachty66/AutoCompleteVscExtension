# TextAutocompletionMarkdown

## What

Text autocompletion tool for markdown.

## Why

Text autocompletion in markdown makes not necessary to use google. All kinds of definitins for example the definition for an atom if you need it gets displayed directly in Visual Studio Code.

## Dependencies

- [x] define full scope of application and why I create it. write it under why from gh cheatsheet (check again how exactly the structure was)
- [ ] Suggest hello world inline. when starting with typing it should appear all the time 
- [ ] define next steps

# Notes
Works with activation event. I need a event for every new character in a markdown file. can test that at the beginning with logging something when new character is typed. That the extension is simple I take as input for the model always only the words starting after the last point of an sentence.  

Well I could try to implement the copy to clipboard stuff and then from there I can checkout how this works with my my more complex implementation. 

If I there was a keyboard event i.e i typed some text. What are my next steps now. 

functionwise i could do it like the copilot. I write a line and than this line gets interpreted. I guess i need a plan how I will get this application done. I also need to check what is possible. I think the best will be to try to copy an existing model. In general thats an skill which is really important because. So i will make a list of auto completion extensions and than I will check the code of them and will see how it works to implement the display hidden words function. 
How can I create an auto completion tool like copilot. The best would be if find something existing and then is se that. It litterally does not exist an markdown text completion. that is great. market gap. your smart cowriter in md. would be great to have something for directly checking output of extension. 

- Captain Stack
- https://code.visualstudio.com/api/references/vscode-api#:~:text=InlineCompletionItem%23,is%20being%20typed.
- https://github.com/microsoft/vscode-extension-samples/tree/main/inline-completions
- i need at least a roughly line on how to finish the project.
Example of how the model works

Here is some text.
A atom is something 

Only "A atom is something" is considered from the model because the above text is with an enter seperated from the one below. I.e "enter" is the condition when the model stops using the text as input.

I will make the extension not public because otherwise i would need to pay server costs. but in the backend is the bloom model loaded with huggingface and i take the returns of the model as my suggestion. The suggestion Refreshes with every word i type and stops with every enter. On the bottom is a icon with which i can disable the auto suggestions. 

I need to define the milestones of the project. I come back to the project and have no glue about what it is about

A atom is