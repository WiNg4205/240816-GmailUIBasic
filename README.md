# 16/08/24 - GmailUIBasic (#12)
This is a basic gmail UI with no routes and emails.

This is my first nuxt project so I couldn't get as much done as I would have liked. This has taken me most of the day so I will stop before I get burnt out. Setting up nuxt took up the majority of the time. It took me a while to get the pages and layouts running. I also tried to do a bit of typescript but for some reason the HMR stopped working so I switched back to js. I want to eventually learn typescript as a replacement to javascript. I've always found the lack of type validations a little messy.

I really like the idea of page based routes in Nuxt (also with NextJS which I will probably play around with some day). I've always found putting all this logic in the app component very awkward and this file based route approach makes so much sense. I have previously come across a similar ish concept when learning about the Rust package file system (can't remember exactly what it is called). This only problem I would see is if there is a lot of nesting and in that case there will be a lot of index.vue files which looks a little messy but I don't think there is a fix to that.

I also like the layout view in Nuxt. I actually never knew about this pattern of wrapping the layout around the entire app in react but the layout feature in Nuxt has made me realise this fact. I assume there is probably an equivalent in NextJS as well.

One thing I did not like about Nuxt is the server side rendering which takes forever to load (I am too used to the instant reloading of vite). This was especially frustrating when I was using fontawesomeicons (I later switched to heroicons which is made by the tailwind creators) and also tailwind customisations.

I like how having frontend frameworks makes things opinionated. I do not want to spend too much time thinking about file structure and patterns and using Nuxt has forced me to learn methods of building apps in a clean pattern. I have previously only done one other very basic vue app so I have to learn Vue at the same time as Nuxt. Just like with tailwind, I think I will stick with Vue and Nuxt as my main tech stack from now on mostly because of the very nice documentation. Not only in the structure but also the UI is very pretty. I believe it is more detailed than the react documentation.

I haven't played around with Vue nearly enough to make a decently informed judgement on whether I prefer it over react but what I can say right now is that I prefer the consistent html-like syntax over jsx which is mainly js syntax (which I find pretty ugly) with some html randomly mashed into the function. It just looks so much cleaner to divide the html and js/ts logic and imports into clear html tags.
