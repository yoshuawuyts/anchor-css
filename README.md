# anchor-css
A tiny css ([styl -w](https://github.com/visionmedia/styl#styl1)) boilerplate

## Features
- Flexbox centric
- Sensible defaults only
- Roles > class selectors
- Built for today's browsers

## About selectors
There's no such thing as a semantic class, roles are the only way to convey context. If you use roles as selectors you get screen reader support for free. Classes are only used as modifiers or to style non-visible elements (e.g. grids). I have no idea what an ID is.

## Directory structure
````
.
├── utilities			// helper classes
│   ├── base
│   ├── colors 
│   ├── grid          
│   └── media
├── micro				// atoms
│   ├── animations
│   ├── buttons
│   ├── images
│   ├── navigation
│   ├── progress
│   ├── tables
│   └── typography
└── macro				// widgets
    ├── dialogs                 
    └── feedback       
````

## Inspiration
- [Solved by flexbox](http://philipwalton.github.io/solved-by-flexbox/)
- [Mailchimp UX patterns](http://ux.mailchimp.com/patterns/)
- [Atomic web design](http://bradfrostweb.com/blog/post/atomic-web-design/)
- [The problem with CSS classes](http://www.youtube.com/watch?v=u63Sq2Sq3LI)

## License
MIT © [Yoshua Wuyts](yoshuawuyts.com)
