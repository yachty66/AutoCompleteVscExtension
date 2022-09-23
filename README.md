# AutoCompleteVscExtension

# Notes
- [ ] Create VSC extension
- [ ] add configurations 
    - [ ] display next 50 words 
    - [ ] on tab take this words
    - [ ] icon in footer to turn off / on function 
- [ ] Python model for text generation


Works with activation event. I need a event for every new character in a markdown file. can test that at the beginning with logging something when new character is typed. That the extension is simple I take as input for the model always only the words starting after the last point of an sentence.  

Well I could try to implement the copy to clipboard stuff and then from there I can checkout how this works with my my more complex implementation. 

If I there was a keyboard event i.e i typed some text. What are my next steps now. 

functionwise i could do it like the copilot. I write a line and than this line gets interpreted. I guess i need a plan how I will get this application done. I also need to check what is possible. I think the best will be to try to copy an existing model. In general thats an skill which is really important because. So i will make a list of auto completion extensions and than I will check the code of them and will see how it works to implement the display hidden words function. 
How can I create an auto completion tool like copilot. The best would be if find something existing and then is se that. It litterally does not exist an markdown text completion. that is great. market gap. your smart cowriter in md. would be great to have something for directly checking output of extension. 

I should start the project new. I call the project TextAutoCompletionMarkdown

# List of VSC extension with displaying hidden autocompletion
- Captain Stack
- https://code.visualstudio.com/api/references/vscode-api#:~:text=InlineCompletionItem%23,is%20being%20typed.
- https://github.com/microsoft/vscode-extension-samples/tree/main/inline-completions

# Looking into code and check how they implemented that and implement mini version in my code

# Build my complete extension