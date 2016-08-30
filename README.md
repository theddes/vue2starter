<p style="text-align:center">
    <center>
        <strong>Vue 2.0 starter</strong><br>
        <small>by theddes<br>Sun 7 Aug 2016</small>
    </center>
</p>

## Vue 2.0

There is little documentation available for the pre-release states of Vue and its router. Luckily the API has not changed all that much, and reading the [official documentation](https://vuejs.org/api/) is still incredibly useful.

For the router, I recommend taking a look at the examples in the [next](https://github.com/vuejs/vue-router/tree/next) branch of the [official vue router repo](https://github.com/vuejs/vue-router).

Using the [Vue Devtools](https://github.com/vuejs/vue-devtools) is also highly recommended (includes Vuex timeline so you can travel through your app state).

## Features

- Vue 2 (pre-release)
- Vue Router (pre-release)
- Vuex (state management)
- VueResource (HTTP client)
- Webpack 2
- Babel 6
- Hot reloading
- PostCSS (with [autoprefixer](https://github.com/postcss/autoprefixer), [postcss-apply](https://github.com/pascalduez/postcss-apply), [postcss-nested](https://github.com/postcss/postcss-nested), [postcss-reporter](https://github.com/postcss/postcss-reporter), [postcss-placehold](https://github.com/awayken/postcss-placehold) and [postcss-font-magician](https://github.com/jonathantneal/postcss-font-magician))
- [LostGrid](https://github.com/peterramsing/lost)

#### postcss-placehold
This plugin makes it easy to drop in placeholder images from placehold.it, like so:
```css
div {
    background: placehold(400, 400);
}
```

#### postcss-font-magician
Generates @font-face rules for you.
All you need to do is specify the font-family name and the plugin will look up and load the corresponding font from Google Fonts or Bootstrap.

_If you have local fonts you wish to use, add it at line 15 in build/webpack.base.js. They will be scanned and added automatically.
Refer to Github for additional configuration options._

## Get started

```bash
$ npm install

# edit files and start developing
$ npm run dev
# bundle all scripts and styles for production use
$ npm run build
```

---

![](https://i.imgur.com/9XCIaET.jpg "Enjoy!")