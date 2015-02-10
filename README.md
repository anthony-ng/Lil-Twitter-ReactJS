## Lil' Twitter

Part of Dev Bootcamp's thick client challenge for the 2014 Chorus Frogs.

## Learning Competencies

- Build a client side heavy Rails application.
- Consume a JSON API.
- Build Single Page App.
- write organized JavaScript code

## Summary

Your mission: build a one-page app using  Javascript to render a simple dashboard for a twitter application. The HTML, CSS, and back-end are already written for you -- all you need to do is write the JavaScript.

## Development Setup

requires ruby and rubygems.
```sh
$ bundle install
$ rake db:create && rake db:migrate && rake db:seed
$ rails server
```

Install React Tools
```sh
npm install react-tools -g

```
create a react folder
```sh
mkdir app/assets/react
```
watch your jsx files:
```sh
jsx --watch app/assets/react/ app/assets/javascripts/components -x jsx

```
## Releases

### Release 0: Static React
Turn the views into React components
