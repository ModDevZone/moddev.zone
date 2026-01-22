---
layout: doc
title: Discord Tips
description: Tips for using Discord effectively in the Mod Dev Zone
---
# Discord Message Format Tips

## Spoiler Tags
To create spoiler tags in Discord, you need to wrap the text you want to hide in double vertical bars (`||`).  
Here is an example of how to create a spoiler tag: `||This is a spoiler||`  
This would look like: ![Spoiler example](/discord-tips/spoiler.png)

## Text Formatting
- *Italic* → `*italics*` or `_italics_`
- <u>_Underline Italics_</u> → `__*underline italics*__`
- **Bold** → `**bold**`
- <u>_**Underline Bold**_</u> → `__**underline bold**__`
- ***Bold Italics*** → `***bold italic text***`
- <u>_***Underline Bold Italics***_</u> → `__***underline bold italic text***__`

- <u>_Underline_</u> → `__underline__`
- ~~Strikethrough~~ → `~~strikethrough text~~`

## Headers
To create a header you just need to include a specific number of the hash/pound sign character (`#`).
Use (`#`) for a big header, (`##`) for a smaller header, or (`###`) for an even smaller header as the first character(s) in a new line to make a header.
Here is an example of what each header type looks like in Discord.  

![Discord Header Example](/discord-tips/headers.png)

And here is the code used to create each header.
- `# Large Header`
- `## Medium Header`
- `### Small Header`

::: info
You must leave a space between the last hash/pound sign (`#`) and the header text for it to work.
:::

## Code Blocks
Code blocks are really useful in Discord for sharing code snippets, small files and more.

For simple single line code snippets, you can use a single backtick (\`) before and after your code. For example, `` `console.log("Hello, World!");` `` would look like this: `console.log("Hello, World!");`

To create a code block, you need to use triple backticks (```) before and after your code.
You can also specify the programming language right after the first set of triple backticks to enable syntax highlighting.
Here is an example of a code block with syntax highlighting for JavaScript:
```javascript
function greet(name) {
    console.log("Hello, " + name + "!");
}
greet("Mod Dev Zone");
```

## Masked Links
You can create masked links in Discord by using the following format:  
`[This is a link](https://reallyreallysuperduperlongexample.com)`

Here is an example: `[Mod Dev Zone](https://moddev.zone/docs/discord-tips#masked-links)`, this would look like this [Mod Dev Zone](<https://youtu.be/dQw4w9WgXcQ>)

You can also prevent embeds by adding a `<` before the URL and a `>` after the URL like:  
`[This is a link](<https://reallyreallysuperduperlongexample.com>)`

## Subtext
To create subtext (smaller text) you can invert a header so to speak, by placing a (`-`) in front of the hash/pound sign character (`#`).
For example, to create small subtext you would use (`-#`).
Here is an example of what subtext looks like in Discord.

![Discord Subtext Example](/discord-tips/subtext.png)
::: info
You must leave a space between the hash/pound sign (`#`) and the header text for it to work.
:::

## Block Quotes
To create a block quote, you need to use the greater than sign (`>`) followed by a space, these are especially useful to reply to a specific part of someone else's message without fully replying.
Here is an example of a block quote:
```
> This is a block quote example.
```
This would look like:
![Discord Block Quote Example](/discord-tips/single-line-blockquote.png)

You can also do multi-line block quotes by placing three greater than signs (`>`) at the start of your message.
Here is an example of a multi-line block quote:
```
>>> This is a multi-line block quote example.
It can span multiple lines.
Like this.
```
This would look like:
![Discord Multi-line Block Quote Example](/discord-tips/multiline-blockquote.png)

## Lists
You can create bullet point lists by using either a hyphen (`-`) or an asterisk (`*`) followed by a space at the start of each line.  
You can also make numbered lists by using numbers followed by a period (`.`) and a space at the start of each line, but this does not have special formatting.
It is also possible to indent your lists by adding two spaces before the hyphen (`-`) or asterisk (`*`).
Here is an example of a bullet point list:
```
- Item 1
- Item 2
  - Subitem 1
  - Subitem 2
    - Subsubitem 1
- Item 3
```
This would look like:
- Item 1
- Item 2
  - Subitem 1
  - Subitem 2
    - Subsubitem 1
- Item 3